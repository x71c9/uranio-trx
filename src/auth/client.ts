/**
 * Module for Auth
 *
 * @packageDocumentation
 */

import {urn_response, urn_log, urn_exception} from 'urn-lib';

const urn_exc = urn_exception.init(`AUTH_MODULE`, `Auth module.`);

import * as book from '../book/client';

import * as client_types from '../client/types';

import {schema} from '../sch/client';

import {create as create_raw} from '../raw/client';

@urn_log.util.decorators.debug_constructor
@urn_log.util.decorators.debug_methods
class AuthBase<A extends schema.AuthName> {
	
	private raw:client_types.RAW<A>;
	
	constructor(public auth_name:A){
		_check_auth_name(auth_name);
		this.raw = create_raw(true) as client_types.RAW<A>;
	}
	
	public async authenticate(email:string, password:string)
			:Promise<urn_response.General<client_types.Api.AuthResponse>>{
		const auth_url = _get_auth_url(this.auth_name);
		return await this.raw.post(auth_url, {email, password}) as any;
	}
	
}

function _get_auth_url(auth_name:schema.AuthName):string{
	const dock_def = book.get_definition(auth_name).dock;
	if(!dock_def || typeof dock_def.auth_url !== 'string'){
		throw urn_exc.create(
			`INVALID_AUTH_DEFINITION`,
			`Invalid auth_def for \`${auth_name}\`. auth_def is missing \`auth\` property.`
		);
	}
	return dock_def.auth_url;
}

function _check_auth_name(auth_name:schema.AuthName)
		:true{
	if(book.validate_auth_name(auth_name)){
		return true;
	}
	throw urn_exc.create(
		`INVALID_AUTH_NAME`,
		`Invalid AuthName \`${auth_name}\`.`
	);
}

export type AuthBaseInstance = InstanceType<typeof AuthBase>;

export function create<A extends schema.AuthName>(auth_name:A)
		:AuthBase<A>{
	urn_log.trace(`Create AuthBase [${auth_name}]`);
	return new AuthBase(auth_name);
}

