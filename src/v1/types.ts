import {Response, get, parseHeaders} from './request';

export interface TypesResponse extends Response {
    types: string[];
}

export interface SubtypesResponse extends Response {
    subtypes: string[];
}

export interface SupertypesResponse extends Response {
    supertypes: string[];
}

export let types = {
    all: (): Promise<TypesResponse> => {
        return get('/types').then(res =>
            <TypesResponse>Object.assign(parseHeaders(res), {
                types: res.body.types
            })
        );
    }
};

export let subtypes = {
    all: (): Promise<SubtypesResponse> => {
        return get('/subtypes').then(res =>
            <SubtypesResponse>Object.assign(parseHeaders(res), {
                subtypes: res.body.subtypes
            })
        );
    }
};

export let supertypes = {
    all: (): Promise<SupertypesResponse> => {
        return get('/supertypes').then(res =>
            <SupertypesResponse>Object.assign(parseHeaders(res), {
                supertypes: res.body.supertypes
            })
        );
    }
};
