/**
 * Export module for Hook
 *
 * @packageDocumentation
 */
import { urn_response } from 'urn-lib';
import * as types from '../cln/types';
import { schema } from '../sch/index';
export declare const hooks: {
    set_token: (token: string) => void;
    get_token: () => string | undefined;
    superusers: {
        upload: <D extends schema.Depth>(file: Buffer | ArrayBuffer | Blob, token?: string | undefined) => Promise<urn_response.General<schema.Atom<'media'>>>;
        presigned: (filename: string, size?: number | undefined, type?: string | undefined, token?: string | undefined) => Promise<urn_response.General<string>>;
        authenticate: (email: string, password: string) => Promise<urn_response.General<types.Api.AuthResponse>>;
        count: <D_1 extends schema.Depth>(options?: types.Hook.Arguments<"superuser", "count", D_1> | undefined, token?: string | undefined) => Promise<urn_response.General<number, any>>;
        find: <D_2 extends schema.Depth>(options?: types.Hook.Arguments<"superuser", "find", D_2> | undefined, token?: string | undefined) => Promise<urn_response.General<schema.Molecule<A, D_3>[], any>>;
        find_id: <D_4 extends schema.Depth>(id: string, options?: types.Hook.Arguments<"superuser", "find_id", D_4> | undefined, token?: string | undefined) => Promise<urn_response.General<schema.Molecule<A, D_3>, any>>;
    };
};
