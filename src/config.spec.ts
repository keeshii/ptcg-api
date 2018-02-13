import {config} from './config';

describe('config', () => {

    it('Should define default API_URL', () => {
        expect(config.API_URL).toEqual('https://api.pokemontcg.io');
    });

    it('Should be able to change API_URL', () => {
        // when
        config.API_URL = 'https://new-url.io';
        expect(config.API_URL).toEqual('https://new-url.io');
    });

});
