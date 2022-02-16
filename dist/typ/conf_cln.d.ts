/**
 * Client Conf type module
 *
 * @packageDocumentation
 */
import { RawName } from '../raw/types';
declare type RequiredClientConfigParams = {
    fetch: RawName;
    protocol: string;
    domain: string;
    port: number;
    service_url: string;
};
declare type OptionalClientConfigParam = {};
export declare type ClientConfiguration = RequiredClientConfigParams & Partial<OptionalClientConfigParam>;
export {};
