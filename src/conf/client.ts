/**
 * Client Conf module
 *
 * @packageDocumentation
 */

import {urn_context} from 'uranio-utils';

import {trx_client_config} from '../cln/default_conf';

import {ClientConfiguration} from '../cln/types';

import * as env from '../env/client';

const urn_ctx = urn_context.create<Required<ClientConfiguration>>(
	trx_client_config,
	env.is_production(),
	'TRX:CONF:CLIENT'
);

let service_url = _build_service_url();

export function get<k extends keyof ClientConfiguration>(
	param_name:k
):Required<ClientConfiguration>[k]{
	return urn_ctx.get(param_name);
}

export function set(config:Partial<ClientConfiguration>):void{
	urn_ctx.set(config);
	set_service_url(_build_service_url());
}

export function get_all():Required<ClientConfiguration>{
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
	const service_proxy = get(`service_proxy`);
	if(typeof service_proxy === 'string' && service_proxy){
		return (service_proxy + prefix)
			.replace(/([^:]\/)\/+/g, "$1"); // remove double slash
	}
	const protocol = get(`service_protocol`);
	const domain = get(`service_domain`);
	const port = get(`service_port`);
	return `${protocol}://${domain}:${port}${prefix}`
		.replace(/([^:]\/)\/+/g, "$1"); // remove double slash
}

// export function get_service_url(repo_ctx?:ReturnType<typeof urn_context.create>):string{
// 	const prefix = get(`prefix_api`);
// 	// If the configuraion cotains `panel_protocol`
// 	// it means the repo is uranio-adm, therefore the service url
// 	// is proxied by the panel
// 	const ctx = (typeof repo_ctx !== 'undefined') ? repo_ctx : urn_ctx;
// 	if(typeof ctx.get_any(`panel_protocol`) === 'string'){
// 		const panel_protocol = ctx.get_any(`panel_protocol`);
// 		const panel_domain = ctx.get_any(`panel_domain`);
// 		const panel_port = ctx.get_any(`panel_port`);
// 		return `${panel_protocol}://${panel_domain}:${panel_port}${prefix}`;
// 	}
// 	const protocol = get(`service_protocol`);
// 	const domain = get(`service_domain`);
// 	const port = get(`service_port`);
// 	return `${protocol}://${domain}:${port}${prefix}`;
// }
