import express from 'express';
import { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { LogMiddleware, CacheMiddleware } from './middleware';
import { CacheTimes } from '../models/utils';
const fs = require('fs');
const app = express();


/**
 * 请求参数最大值限制
 */
app.use(bodyParser.json({
    limit: 100000000
}));
/**
 * 请求参数最大值限制
 */
app.use(bodyParser.raw({
    limit: 100000000
}));
/**
 * 校验请求路由地址是否正确.
 */
app.use('/api/:chain', (req: Request, resp: Response, next: any) => {
    let { chain } = req.params;
    const chains: Array<string> = ['btc', 'ltc', 'eth', 'bch'];
    if (!chains.includes(chain)) {
        return resp.status(500).send(`This node is not configured for the chain ${chain}`);
    }
    return next();
});
app.use('/api', bootstrap('api'));
/**
 * 跨域请求拦截中间件
 */
app.use(cors());
app.use(LogMiddleware());
app.use(CacheMiddleware(CacheTimes.Second, CacheTimes.Second));

/**
 * 根据文件路径动态加载路由
 * @param path 
 */
function bootstrap(path?: string) {
    const router = express.Router({
        mergeParams: true
    });
    const folder = path ? path + '/' : '';
    fs.readdirSync(__dirname + '/' + path).forEach(function (file: string) {
        if (file.match(/\.js$/) !== null && file !== 'index.js') {
            var route = require('./' + folder + file);
            router.use(route.path, route.router);
        }
    });
    return router;
}
export default app;