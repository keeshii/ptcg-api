import {Query, get} from './request';
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

export let cards = {
    where: (query: CardQuery = {}): Promise<Card[]> => {
        return get('/cards', query).then(res => {
            const cards = <Card[]>(res.body as any).cards;
            return cards;
        });
    },
    find: (id: string): Promise<Card> => {
        return get('/cards/' + id).then(res => {
            const cards = <Card>(res.body as any).card;
            return cards;
        });
    },
    all: (query: Query = {}): Promise<Card[]> => {
        return cards.where(query);
    }
};
