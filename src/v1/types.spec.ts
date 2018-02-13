import * as request from './request';
import {types, subtypes, supertypes} from './types';

describe('types', () => {

    it('Should be able to find all types', (done) => {
        // given
        spyOn(request, 'get').and.returnValue(
            Promise.resolve({body: {types: ['Fire', 'Water']}})
        );
        // when
        const response = types.all();
        // then
        expect(request.get).toHaveBeenCalledWith('/types');
        response
            .then(types => expect(types).toEqual(['Fire', 'Water']))
            .then(done);
    });

    it('Should be able to find all subtypes', (done) => {
        // given
        spyOn(request, 'get').and.returnValue(
            Promise.resolve({body: {subtypes: ['Basic', 'Stage 1']}})
        );
        // when
        const response = subtypes.all();
        // then
        expect(request.get).toHaveBeenCalledWith('/subtypes');
        response
            .then(types => expect(types).toEqual(['Basic', 'Stage 1']))
            .then(done);
    });

    it('Should be able to find all supertypes', (done) => {
        // given
        spyOn(request, 'get').and.returnValue(
            Promise.resolve({body: {supertypes: ['Pokémon', 'Trainer']}})
        );
        // when
        const response = supertypes.all();
        // then
        expect(request.get).toHaveBeenCalledWith('/supertypes');
        response
            .then(types => expect(types).toEqual(['Pokémon', 'Trainer']))
            .then(done);
    });

});
