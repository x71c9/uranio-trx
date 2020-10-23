/**
 *
 * Module for abstract class Hook
 *
 * @packageDocumentation
 */

import * as urn_raw from '../raw';

import {urn_response} from 'urn-lib';

export abstract class Hook<Model>{
	
	private _raw:urn_raw.RawInstance;
	
	protected _path:string;
	
	public constructor(_raw_instance:urn_raw.RawInstance, path:string){
		
		this._raw = _raw_instance;
		
		this._path = path;
		
	}
	
	public async get()
			:Promise<urn_response.General<Model[],any>>{
		return await this._raw.get(this._path);
	}
	
}
