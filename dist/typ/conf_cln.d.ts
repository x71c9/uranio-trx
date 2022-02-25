/**
 * Client Conf type module
 *
 * @packageDocumentation
 */
import { urn_log } from 'urn-lib';
import { RawName } from '../raw/types';
declare type RequiredClientConfigParams = {
    fetch: RawName;
    protocol: string;
    domain: string;
    port: number;
    service_url: string;
};
declare type OptionalClientConfigParam = {
    log_level: urn_log.LogLevel;
};
export declare type ClientConfiguration = RequiredClientConfigParams & Partial<OptionalClientConfigParam>;
export {};
