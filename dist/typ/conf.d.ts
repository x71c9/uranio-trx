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
    service_url: string;
    dev_service_url: string;
    fetch_url: string;
    dev_fetch_url: string;
};
export declare type Configuration = api.types.Configuration & RequiredConfigParams & Partial<OptionalConfigParam>;
export {};
