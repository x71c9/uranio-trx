/**
 * Client Conf type module
 *
 * @packageDocumentation
 */
import api_client from 'uranio-api/client';
import { RawName } from '../typ/raw_cln';
declare type RequiredClientConfigParams = {
    fetch: RawName;
    service_url: string;
    service_dev_url: string;
};
declare type OptionalClientConfigParam = {};
export declare type ClientConfiguration = api_client.types.ClientConfiguration & RequiredClientConfigParams & Partial<OptionalClientConfigParam>;
export {};
