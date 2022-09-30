import {Query, Response, get, parseHeaders} from './request';
import {Set} from './model/set';

export interface SetQuery extends Query {
    name?: string;
    ptcgoCode?: string;
    series?: string;
    totalCards?: string;
    standardLegal?: string;
    expandedLegal?: string;
    updatedSince?: string;
}

export interface SetsResponse extends Response {
    data: Set[];
    count: number;
    page: number;
    pageSize: number;
    totalCount: number;
}

export interface SetResponse extends Response {
    data: Set;
}

export let sets = {
    where: (query: SetQuery = {}): Promise<SetsResponse> => {
        return get('/sets', query).then(res =>
            <SetsResponse>Object.assign(parseHeaders(res), {
                data: res.body.data,
                count: res.body.count,
                page: res.body.page,
                pageSize: res.body.pageSize,
                totalCount: res.body.totalCount
            })
        );
    },
    find: (id: string): Promise<SetResponse> => {
        return get('/sets/' + id).then(res =>
            <SetResponse>Object.assign(parseHeaders(res), {
                data: res.body.data
            })
        );
    },
    all: (query: Query = {}): Promise<SetsResponse> => {
        return sets.where(query);
    }
};
