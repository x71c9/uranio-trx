/**
 * Client Conf type module
 *
 * @packageDocumentation
 */
import api_client from 'uranio-api/client';
import { RawName } from '../typ/raw_cln';
declare type RequiredClientConfigParams = {};
declare type OptionalClientConfigParam = {
    fetch: RawName;
    service_domain: string;
    dev_service_domain: string;
    service_protocol: string;
    dev_service_protocol: string;
    service_port: number;
    dev_service_port: number;
    prefix_api: string;
    dev_prefix_api: string;
    ssl_secure: boolean;
    dev_ssl_secure: boolean;
    api_proxy: string;
    dev_api_proxy: string;
};
export declare type ClientConfiguration = api_client.types.ClientConfiguration & RequiredClientConfigParams & Partial<OptionalClientConfigParam>;
export {};
