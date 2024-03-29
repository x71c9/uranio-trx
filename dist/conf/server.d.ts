/**
 * Server Conf module
 *
 * @packageDocumentation
 */
import { Configuration } from '../typ/conf';
export declare function get<k extends keyof Configuration>(param_name: k): Required<Configuration>[k];
export declare function set(config: Partial<Configuration>): void;
export declare function get_all(): Required<Configuration>;
export declare function set_service_url(url: string): void;
export declare function get_service_url(): string;
