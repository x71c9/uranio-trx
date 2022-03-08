/**
 * env module
 *
 * @packageDocumentation
 */
import { trx_env } from './defaults';
export { trx_env as defaults };
import * as types from '../server/types';
export declare function get<k extends keyof types.Environment>(param_name: k): typeof trx_env[k];
export declare function is_initialized(): boolean;
export declare function set_initialize(is_initialized: boolean): void;
export declare function set_from_env(repo_config: Required<types.Environment>): void;
export declare function set(repo_config: Required<types.Environment>, config: Partial<types.Environment>): void;
export declare function is_production(): boolean;
