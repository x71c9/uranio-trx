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
    service_url: string;
    dev_service_url: string;
    fetch_url: string;
    dev_fetch_url: string;
};
export declare type ClientConfiguration = api_client.types.ClientConfiguration & RequiredClientConfigParams & Partial<OptionalClientConfigParam>;
export {};
