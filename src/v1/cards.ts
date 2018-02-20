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
    cards: Card[];
}

export interface CardResponse extends Response {
    card: Card;
}

export let cards = {
    where: (query: CardQuery = {}): Promise<CardsResponse> => {
        return get('/cards', query).then(res =>
            <CardsResponse>Object.assign(parseHeaders(res), {
                cards: res.body.cards
            })
        );
    },
    find: (id: string): Promise<CardResponse> => {
        return get('/cards/' + id).then(res =>
            <CardResponse>Object.assign(parseHeaders(res), {
                card: res.body.card
            })
        );
    },
    all: (query: Query = {}): Promise<CardsResponse> => {
        return cards.where(query);
    }
};
