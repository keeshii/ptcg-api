import * as request from './request';
import {sets} from './sets';
import {Set} from './model/set';

describe('sets', () => {

    it('Should be able to find sets with `where`', (done) => {
        // given
        spyOn(request, 'get').and.returnValue(
            Promise.resolve({body: {sets: []}})
        );
        // when
        const response = sets.where({page: 4});
        // then
        expect(request.get).toHaveBeenCalledWith('/sets', {page: 4});
        response
            .then(res => expect(res.sets).toEqual([]))
            .then(done);
    });

    it('Should be able to find sets with `where` without query', (done) => {
        // given
        spyOn(request, 'get').and.returnValue(
            Promise.resolve({body: {sets: []}})
        );
        // when
        const response = sets.where();
        // then
        expect(request.get).toHaveBeenCalledWith('/sets', {});
        response
            .then(res => expect(res.sets).toEqual([]))
            .then(done);
    });

    it('Should be able to find sets by id', (done) => {
        // given
        spyOn(request, 'get').and.returnValue(
            Promise.resolve({body: {set: {}}})
        );
        // when
        const response = sets.find('set-id');
        // then
        expect(request.get).toHaveBeenCalledWith('/sets/set-id');
        response
            .then(res => expect(res.set).toEqual(<Set>{}))
            .then(done);
    });

    it('Should be able to find all sets', (done) => {
        // given
        spyOn(request, 'get').and.returnValue(
            Promise.resolve({body: {sets: []}})
        );
        // when
        const response = sets.all();
        // then
        expect(request.get).toHaveBeenCalledWith('/sets', {});
        response
            .then(res => expect(res.sets).toEqual([]))
            .then(done);
    });

    it('Should be able to find all sets with query', (done) => {
        // given
        spyOn(request, 'get').and.returnValue(
            Promise.resolve({body: {sets: []}})
        );
        // when
        const response = sets.all({page: 4});
        // then
        expect(request.get).toHaveBeenCalledWith('/sets', {page: 4});
        response
            .then(res => expect(res.sets).toEqual([]))
            .then(done);
    });

});
