/**
 * Env module
 *
 * @packageDocumentation
 */
import { trx_client_env } from '../client/default_env';
export { trx_client_env as defaults };
import * as types from '../client/types';
export declare function get<k extends keyof Required<types.ClientEnvironment>>(param_name: k): typeof trx_client_env[k];
export declare function get_current<k extends keyof types.ClientEnvironment>(param_name: k): typeof trx_client_env[k];
export declare function is_initialized(): boolean;
export declare function set_initialize(is_initialized: boolean): void;
export declare function set_from_env(repo_config: Required<types.ClientEnvironment>): void;
export declare function set(repo_config: Required<types.ClientEnvironment>, config: Partial<types.ClientEnvironment>): void;
export declare function is_production(): boolean;
