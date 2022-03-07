/**
 * Env type module
 *
 * @packageDocumentation
 */
import api from 'uranio-api';
declare type RequiredEnvParams = {};
declare type OptionalEnvParam = {};
export declare type Environment = api.types.Environment & RequiredEnvParams & Partial<OptionalEnvParam>;
export {};
