/**
 * 请求限速器
 * @param method 
 * @param perSecond 
 * @param perMinute 
 * @param perHour 
 */
export function RateLimiter(method: string, perSecond: number, perMinute: number, perHour: number) {

}
/**
 * 请求日志中间件
 */
export function LogMiddleware() {
    return () => { };
}
/**
 * 设置请求缓存
 * @param serverSeconds 
 * @param browserSeconds 
 */
export function CacheMiddleware(serverSeconds: number, browserSeconds: number) {
    return () => { };
}