import * as superagent from 'superagent';
import {config} from '../config';

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

export function parseHeaders(res: superagent.Response): Response {
    const header = res && res.header ? res.header : {};
    return {
        pageSize: parseInt(header['page-size'], 10),
        count: parseInt(header.count, 10),
        totalCount: parseInt(header['total-count'], 10),
        ratelimitLimit: parseInt(header['ratelimit-limit'], 10),
        ratelimitRemaining: parseInt(header['ratelimit-remaining'], 10)
    };
}

export function get(uri: string, query: Query = {}): Promise<superagent.Response> {
    return superagent
        .get(config.API_URL_V1 + uri)
        .query(query)
        .catch(err => {
            throw new Error(err.message);
        });
}
