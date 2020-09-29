
import {URNTRXRAWInstance} from '../urn_raw';

export abstract class URNTRXResource {
	
	private _raw:URNTRXRAWInstance;
	
	protected _path:string;
	
	public constructor(_rawInstance:URNTRXRAWInstance){
		this._raw = _rawInstance;
		this._path = '';
	}
	
	public get(){
		return this._raw.get(this._path);
	}
}

