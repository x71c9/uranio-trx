/**
 * Raw server module
 *
 * @packageDocumentation
 */
import { AxiosInstance } from 'axios';
import * as types from '../srv/types';
import { schema } from '../sch/server';
import { RAW } from '../typ/raw';
declare class AxiosRaw<A extends schema.AtomName> implements RAW<A> {
    private _axios_instance;
    private is_auth;
    private axios_config;
    constructor(_axios_instance: AxiosInstance, is_auth?: boolean);
    get<R extends schema.RouteName<A>, D extends schema.Depth>(url: string, query?: types.Hook.Query<A, R, D>, headers?: types.Hook.Headers): types.Hook.Response<A, R, D>;
    post<R extends schema.RouteName<A>, D extends schema.Depth>(url: string, body: any, query?: types.Hook.Query<A, R, D>, headers?: types.Hook.Headers): types.Hook.Response<A, R, D>;
    delete<R extends schema.RouteName<A>, D extends schema.Depth>(url: string, query?: types.Hook.Query<A, R, D>, headers?: types.Hook.Headers): types.Hook.Response<A, R, D>;
}
export declare type AxiosRawInstance = InstanceType<typeof AxiosRaw>;
/**
 * A function the will create an AxiosRawInstance.
 */
export declare function create(is_auth?: boolean): AxiosRawInstance;
export {};
