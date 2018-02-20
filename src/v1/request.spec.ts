import * as superagent from 'superagent';
import {config} from '../config';
import {get, parseHeaders} from './request';

describe('request', () => {

    let queryMock: any;
    let catchMock: any;

    beforeEach(() => {
        catchMock = {catch: () => {}};
        queryMock = {query: () => catchMock};
        spyOn(superagent, 'get').and.returnValue(queryMock);
    });

    it('Should call valid URL', () => {
        // when
        get('/cards');
        // then
        expect(superagent.get).toHaveBeenCalledWith(config.API_URL + '/v1/cards');
    });

    it('Should query valid params', () => {
        // given
        spyOn(queryMock, 'query').and.callThrough();
        // when
        get('/cards', {page: 4});
        // then
        expect(queryMock.query).toHaveBeenCalledWith({page: 4});
    });

    it('Should be able to throw an error', () => {
        // given
        spyOn(catchMock, 'catch').and.callFake((callback: Function) => callback({
            response: 400,
            message: 'error message'
        }));
        // then
        expect(() => get('/cards')).toThrowError('error message');
    });

    it('Should parse headers', () => {
        // given
        const res = {header: {'total-count': '10'}};
        // when
        const result = parseHeaders(res as superagent.Response);
        // then
        expect(result.totalCount).toEqual(10);
    });

    it('Should parse headers with default values', () => {
        // given
        const res = {};
        // when
        const result = parseHeaders(res as superagent.Response);
        // then
        expect(result.totalCount).toEqual(NaN);
    });

});
