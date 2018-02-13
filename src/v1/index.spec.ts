import * as v1 from './index';
import {cards} from './cards';
import {sets} from './sets';
import {types, subtypes, supertypes} from './types';

describe('ptcg-api v1', () => {

    it('Should properly export V1 API', () => {
        expect(v1).toBeDefined();
        expect(v1.cards).toBe(cards);
        expect(v1.sets).toBe(sets);
        expect(v1.types).toBe(types);
        expect(v1.subtypes).toBe(subtypes);
        expect(v1.supertypes).toBe(supertypes);
    });

});
