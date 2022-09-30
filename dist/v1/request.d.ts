/// <reference types="superagent" />
import * as superagent from 'superagent';
export interface Query {
    page?: number;
    pageSize?: number;
}
export interface Response {
    pageSize: number;
    count: number;
    totalCount: number;
    ratelimitLimit: number;
    ratelimitRemaining: number;
}
export declare function parseHeaders(res: superagent.Response): Response;
export declare function get(uri: string, query?: Query): Promise<superagent.Response>;
