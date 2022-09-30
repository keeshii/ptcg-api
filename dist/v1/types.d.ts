import { Response } from './request';
export interface TypesResponse extends Response {
    types: string[];
}
export interface SubtypesResponse extends Response {
    subtypes: string[];
}
export interface SupertypesResponse extends Response {
    supertypes: string[];
}
export declare let types: {
    all: () => Promise<TypesResponse>;
};
export declare let subtypes: {
    all: () => Promise<SubtypesResponse>;
};
export declare let supertypes: {
    all: () => Promise<SupertypesResponse>;
};
