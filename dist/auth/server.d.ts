/**
 * Module for Auth
 *
 * @packageDocumentation
 */
import { urn_response } from 'uranio-utils';
import * as client_types from '../srv/types';
import { schema } from '../sch/server';
declare class AuthBase<A extends schema.AuthName> {
    auth_name: A;
    private raw;
    constructor(auth_name: A);
    authenticate(email: string, password: string): Promise<urn_response.General<client_types.Api.AuthResponse>>;
}
export declare type AuthBaseInstance = InstanceType<typeof AuthBase>;
export declare function create<A extends schema.AuthName>(auth_name: A): AuthBase<A>;
export {};
