import {Query, Response, get, parseHeaders} from './request';
import {Card} from './model/card';

export interface CardQuery extends Query {
    name?: string;
    id?: string;
    nationalPokedexNumber?: string;
    types?: string;
    subtype?: string;
    supertype?: string;
    hp?: string;
    number?: string;
    artist?: string;
    rarity?: string;
    series?: string;
    set?: string;
    setCode?: string;
    retreatCost?: string;
    text?: string;
    attackDamage?: string;
    attackCost?: string;
    attackName?: string;
    attackText?: string;
    weaknesses?: string;
    resistances?: string;
    ancientTrait?: string;
    abilityName?: string;
    abilityText?: string;
    abilityType?: string;
    contains?: string;
}

export interface CardsResponse extends Response {
    data: Card[];
    count: number;
    page: number;
    pageSize: number;
    totalCount: number;
}

export interface CardResponse extends Response {
    data: Card;
}

export let cards = {
    where: (query: CardQuery = {}): Promise<CardsResponse> => {
        return get('/cards', query).then(res =>
            <CardsResponse>Object.assign(parseHeaders(res), {
                data: res.body.data,
                count: res.body.count,
                page: res.body.page,
                pageSize: res.body.pageSize,
                totalCount: res.body.totalCount
            })
        );
    },
    find: (id: string): Promise<CardResponse> => {
        return get('/cards/' + id).then(res =>
            <CardResponse>Object.assign(parseHeaders(res), {
                data: res.body.data
            })
        );
    },
    all: (query: Query = {}): Promise<CardsResponse> => {
        return cards.where(query);
    }
};
