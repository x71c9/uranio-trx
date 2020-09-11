
import {IURNResource} from '../rsrc/rsrc';

export abstract class URNTRXResource<T extends IURNResource> {
	
	public abstract get():Promise<T>
	
}

