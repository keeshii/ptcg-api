import {config} from './config';

describe('config', () => {

    it('Should define default API_URL', () => {
        expect(config.API_URL_V1).toEqual('https://api.pokemontcg.io/v1');
    });

    it('Should be able to change API_URL', () => {
        // when
        config.API_URL_V1 = 'https://new-url.io';
        expect(config.API_URL_V1).toEqual('https://new-url.io');
    });

});
