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
    sets: Set[];
}

export interface SetResponse extends Response {
    set: Set;
}

export let sets = {
    where: (query: SetQuery = {}): Promise<SetsResponse> => {
        return get('/sets', query).then(res =>
            <SetsResponse>Object.assign(parseHeaders(res), {
                sets: res.body.sets
            })
        );
    },
    find: (id: string): Promise<SetResponse> => {
        return get('/sets/' + id).then(res =>
            <SetResponse>Object.assign(parseHeaders(res), {
                set: res.body.set
            })
        );
    },
    all: (query: Query = {}): Promise<SetsResponse> => {
        return sets.where(query);
    }
};
