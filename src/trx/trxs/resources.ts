
import {URNResponse} from '../../return/return.t';

import {URNTRXRAW} from '../../raw/raw';

export abstract class URNTRXResource<Model> {
	
	private _raw:URNTRXRAW;
	
	protected _path:string;
	
	public constructor(_rawInstance:URNTRXRAW){
		this._raw = _rawInstance;
		
		/*
		 * _path must be overwritten in subclasses
		 */
		this._path = '';
	}
	
	public async get()
			:Promise<URNResponse.Response<Model[],any>>{
		return this._raw.get(this._path);
	}
}

