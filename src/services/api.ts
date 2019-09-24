import * as http from 'http';
import app from '../routes/app';
export class ApiService {
    private _port: number;
    private _host: string;
    private _timeout: number;
    private _httpServer: http.Server;
    constructor({ port = 3000, host = "0.0.0.0", timeout = 600000 } = {}) {
        this._port = port;
        this._host = host;
        this._timeout = timeout;
        this._httpServer = new http.Server(app);
    }
    async start() {
        this._httpServer.timeout = this._timeout;
        this._httpServer.listen(this._port, this._host, () => {
            //logger.info(`Starting API Service on port ${this.port}`);
            console.log(`Starting API Service on port ${this._port} host ${this._host}`);
        });
        //return this._httpServer;
    }
}

export const Api = new ApiService({
    port: 3000,
    host: "localhost"
});