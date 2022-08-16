/**
 * Conf type module
 *
 * @packageDocumentation
 */
import api from 'uranio-api';
import { RawName } from '../typ/raw';
declare type RequiredConfigParams = {};
declare type OptionalConfigParam = {
    fetch: RawName;
    service_domain: string;
    dev_service_domain: string;
    ssl_secure: boolean;
    dev_ssl_secure: boolean;
};
export declare type Configuration = api.types.Configuration & RequiredConfigParams & Partial<OptionalConfigParam>;
export {};
