/**
 * Module for AxiosRaw
 *
 * @packageDocumentation
 */
import { AxiosInstance } from 'axios';
import { urn_response } from 'urn-lib';
import * as client_types from '../cln/types';
import { schema } from '../sch/index';
import { RAW } from './types';
declare class AxiosRaw<A extends schema.AtomName> implements RAW<A> {
    private _axios_instance;
    private is_auth;
    private axios_config;
    constructor(_axios_instance: AxiosInstance, is_auth?: boolean);
    get<R extends schema.RouteName<A>, D extends schema.Depth>(url: string, query?: client_types.Hook.Query<A, R, D>, headers?: client_types.Hook.Headers): Promise<urn_response.General<any, any>>;
    post<R extends schema.RouteName<A>, D extends schema.Depth>(url: string, body: any, query?: client_types.Hook.Query<A, R, D>, headers?: client_types.Hook.Headers): Promise<urn_response.General<any, any>>;
    delete<R extends schema.RouteName<A>, D extends schema.Depth>(url: string, query?: client_types.Hook.Query<A, R, D>, headers?: client_types.Hook.Headers): Promise<urn_response.General<any, any>>;
}
export declare type AxiosRawInstance = InstanceType<typeof AxiosRaw>;
/**
 * A function the will create an AxiosRawInstance.
 */
export declare function create(config?: client_types.ClientConfiguration, is_auth?: boolean): AxiosRawInstance;
export {};
