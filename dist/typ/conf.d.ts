/**
 * Conf type module
 *
 * @packageDocumentation
 */
import api from 'uranio-api';
import { RawName } from '../raw/types';
declare type RequiredConfigParams = {};
declare type OptionalConfigParam = {
    fetch: RawName;
    protocol: string;
    domain: string;
    port: number;
    client_protocol: string;
    client_domain: string;
    client_port: number;
    service_url: string;
};
export declare type Configuration = api.types.Configuration & RequiredConfigParams & Partial<OptionalConfigParam>;
export {};
