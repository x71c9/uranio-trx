/**
 * Module for Media
 *
 * @packageDocumentation
 */
/// <reference types="node" />
import { urn_response } from 'uranio-utils';
import { schema } from '../sch/client';
import { Base } from '../base/class_cln';
declare class MediaBase extends Base<'_media'> {
    token?: string | undefined;
    constructor(token?: string | undefined);
    upload<D extends schema.Depth>(file: Buffer | ArrayBuffer | Blob, token?: string): Promise<urn_response.General<schema.Molecule<'_media', D>>>;
    presigned(filename: string, size?: number, type?: string, token?: string): Promise<urn_response.General<string>>;
}
export declare type MediaBaseInstance = InstanceType<typeof MediaBase>;
export declare function create(token?: string): MediaBase;
export {};
