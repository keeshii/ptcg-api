import {get} from './request';

export let types = {
    all: (): Promise<string[]> => {
        return get('/types').then(res => {
            return <string[]>(res.body as any).types;
        });
    }
};

export let subtypes = {
    all: (): Promise<string[]> => {
        return get('/subtypes').then(res => {
            return <string[]>(res.body as any).subtypes;
        });
    }
};

export let supertypes = {
    all: (): Promise<string[]> => {
        return get('/supertypes').then(res => {
            return <string[]>(res.body as any).supertypes;
        });
    }
};
