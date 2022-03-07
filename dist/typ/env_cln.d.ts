/**
 * Client Env type module
 *
 * @packageDocumentation
 */
import api_client from 'uranio-api/client';
declare type RequiredClientEnvParams = {};
declare type OptionalClientEnvParam = {};
export declare type ClientEnvironment = api_client.types.ClientEnvironment & RequiredClientEnvParams & Partial<OptionalClientEnvParam>;
export {};
