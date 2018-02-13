import * as request from './request';
import {cards} from './cards';
import {Card} from './model/card';

describe('cards', () => {

    it('Should be able to find cards with `where`', (done) => {
        // given
        spyOn(request, 'get').and.returnValue(
            Promise.resolve({body: {cards: []}})
        );
        // when
        const response = cards.where({page: 4});
        // then
        expect(request.get).toHaveBeenCalledWith('/cards', {page: 4});
        response
            .then(cards => expect(cards).toEqual([]))
            .then(done);
    });

    it('Should be able to find cards with `where` without query', (done) => {
        // given
        spyOn(request, 'get').and.returnValue(
            Promise.resolve({body: {cards: []}})
        );
        // when
        const response = cards.where();
        // then
        expect(request.get).toHaveBeenCalledWith('/cards', {});
        response
            .then(cards => expect(cards).toEqual([]))
            .then(done);
    });

    it('Should be able to find cards by id', (done) => {
        // given
        spyOn(request, 'get').and.returnValue(
            Promise.resolve({body: {card: {}}})
        );
        // when
        const response = cards.find('card-id');
        // then
        expect(request.get).toHaveBeenCalledWith('/cards/card-id');
        response
            .then(card => expect(card).toEqual(<Card>{}))
            .then(done);
    });

    it('Should be able to find all cards', (done) => {
        // given
        spyOn(request, 'get').and.returnValue(
            Promise.resolve({body: {cards: []}})
        );
        // when
        const response = cards.all();
        // then
        expect(request.get).toHaveBeenCalledWith('/cards', {});
        response
            .then(card => expect(card).toEqual([]))
            .then(done);
    });

    it('Should be able to find all cards with query', (done) => {
        // given
        spyOn(request, 'get').and.returnValue(
            Promise.resolve({body: {cards: []}})
        );
        // when
        const response = cards.all({page: 4});
        // then
        expect(request.get).toHaveBeenCalledWith('/cards', {page: 4});
        response
            .then(card => expect(card).toEqual([]))
            .then(done);
    });

});
