/**
 *
 * Module for abstract class Hook
 *
 * @packageDocumentation
 */

import * as urn_raw from '../raw';

import {urn_response} from 'urn-lib';

export abstract class Hook<Model>{
	
	private _raw:urn_raw.Raw;
	
	protected _path!:string;
	
	public constructor(_raw_instance:urn_raw.Raw){
		
		this._raw = _raw_instance;
		
		this.set_path();
		
	}
	
	/**
	 * Method that must be overwritte in sublclasses.
	 * The protected parameter `_path` must be set in its implementation.
	 */
	abstract set_path():string;
	
	public async get()
			:Promise<urn_response.General<Model[],any>>{
		return await this._raw.get(this._path);
	}
	
}
