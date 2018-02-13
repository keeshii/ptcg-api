import {Ability} from './ability';
import {AncientTrait} from './ancientTrait';
import {Attack} from './attack';

export interface WeaknessOrResistance {
    type: string;
    value: string;
}

export interface Card {
    id: string;
    name: string;
    nationalPokedexNumber: number;
    imageUrl: string;
    imageUrlHiRes: string;
    subtype: string;
    supertype: string;
    ability: Ability;
    ancientTrait: AncientTrait;
    hp: string;
    number: string;
    artist: string;
    rarity: string;
    series: string;
    set: string;
    setCode: string;
    evolvesFrom: string;
    retreatCost: string[];
    text: string[];
    types: string[];
    attacks: Attack[];
    resistance: WeaknessOrResistance[];
    weakness: WeaknessOrResistance[];
}
