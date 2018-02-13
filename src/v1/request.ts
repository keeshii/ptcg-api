import * as superagent from 'superagent';
import {config} from '../config';

export interface Query {
    page?: number;
    pageSize?: number;
}

export function get(uri: string, query: Query = {}): Promise<superagent.Response> {
    return superagent
        .get(config.API_URL + '/v1' + uri)
        .send(query)
        .catch(err => {
            throw new Error(err.message);
        });
}
