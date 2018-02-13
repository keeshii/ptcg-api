import * as superagent from 'superagent';
import {config} from '../config';
import {get} from './request';

describe('request', () => {

    let sendMock: any;
    let catchMock: any;

    beforeEach(() => {
        catchMock = {catch: () => {}};
        sendMock = {send: () => catchMock};
        spyOn(superagent, 'get').and.returnValue(sendMock);
    });

    it('Should call valid URL', () => {
        // when
        get('/cards');
        // then
        expect(superagent.get).toHaveBeenCalledWith(config.API_URL + '/v1/cards');
    });

    it('Should send valid params', () => {
        // given
        spyOn(sendMock, 'send').and.callThrough();
        // when
        get('/cards', {page: 4});
        // then
        expect(sendMock.send).toHaveBeenCalledWith({page: 4});
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

});
