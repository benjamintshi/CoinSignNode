import express from 'express';
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
 * 跨域请求拦截
 */
app.use(cors());
app.use(LogMiddleware());
app.use(CacheMiddleware(CacheTimes.Second, CacheTimes.Second));
//加载路由.
app.use('/api/:chain/', bootstrap('api'));
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