import './bootstrap';
export interface IEnvConfig {
    /**
     * mongo 连接字符串
     */
    mongoConnectionString: string;
    /**
     * wx pusher app token
     */
    wxPusherAppToken: string;
}
/**
 * 获取环境配置
 */
export declare const envConfig: IEnvConfig;
