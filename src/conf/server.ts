/**
 * Server Conf module
 *
 * @packageDocumentation
 */

import {urn_context} from 'urn-lib';

import {trx_config} from './defaults';

import {Configuration} from '../typ/conf';

import * as env from '../env/server';

const urn_ctx = urn_context.create<Required<Configuration>>(
	trx_config,
	env.is_production(),
	'TRX:CONF'
);

let service_url = _build_service_url();

export function get<k extends keyof Configuration>(
	param_name:k
):Required<Configuration>[k]{
	return urn_ctx.get(param_name);
}

export function set(config:Partial<Configuration>):void{
	urn_ctx.set(config);
	set_service_url(_build_service_url());
}

export function get_all():Required<Configuration>{
	return urn_ctx.get_all();
}

export function set_service_url(url:string){
	service_url = url;
}

export function get_service_url(){
	return service_url;
}

function _build_service_url(){
	const prefix = get(`prefix_api`);
	const protocol = get(`service_protocol`);
	const domain = get(`service_domain`);
	const port = get(`service_port`);
	return `${protocol}://${domain}:${port}${prefix}`;
}

// export function get_service_url():string{
// 	const prefix = get(`prefix_api`);
// 	// If the configuraion cotains `panel_protocol`
// 	// it means the repo is uranio-adm, therefore the service url
// 	// is proxied by the panel
// 	if(typeof urn_ctx.get_any(`panel_protocol`) === 'string'){
// 		const panel_protocol = urn_ctx.get_any(`panel_protocol`);
// 		const panel_domain = urn_ctx.get_any(`panel_domain`);
// 		const panel_port = urn_ctx.get_any(`panel_port`);
// 		return `${panel_protocol}://${panel_domain}:${panel_port}${prefix}`;
// 	}
// 	const protocol = get(`service_protocol`);
// 	const domain = get(`service_domain`);
// 	const port = get(`service_port`);
// 	return `${protocol}://${domain}:${port}${prefix}`;
// }
