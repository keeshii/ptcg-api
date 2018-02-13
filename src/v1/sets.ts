import {Query, get} from './request';
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

export let sets = {
    where: (query: SetQuery = {}): Promise<Set[]> => {
        return get('/sets', query).then(res => {
            const set = <Set[]>(res.body as any).sets;
            return set;
        });
    },
    find: (id: string): Promise<Set> => {
        return get('/sets/' + id).then(res => {
            const cards = <Set>(res.body as any).set;
            return cards;
        });
    },
    all: (query: Query = {}): Promise<Set[]> => {
        return sets.where(query);
    }
};
