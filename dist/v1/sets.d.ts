import { Query, Response } from './request';
import { Set } from './model/set';
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
export declare let sets: {
    where: (query?: SetQuery) => Promise<SetsResponse>;
    find: (id: string) => Promise<SetResponse>;
    all: (query?: Query) => Promise<SetsResponse>;
};
