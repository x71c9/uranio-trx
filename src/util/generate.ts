/**
 * Generate module
 *
 * @packageDocumentation
 */

import fs from 'fs';

import * as esbuild from 'esbuild';

// import dateformat from 'dateformat';

import api from 'uranio-api';

import {urn_log} from 'urn-lib';

import {schema as schema_types} from '../sch/server';

import * as book from '../book/server';

import {ClientConfiguration} from '../typ/conf_cln';

// import {Configuration} from '../typ/conf';

// import * as conf from '../conf/server';

// const required_server_config_client:Array<keyof Configuration> = [
//   'service_url',
//   'dev_service_url'
// ];

export const process_params = {
	urn_command: `schema`,
	urn_trx_repo_path: 'node_modules/uranio-trx'
};

export function schema():string{
	urn_log.trace('Started generating uranio trx schema...');
	init();
	const api_schema = api.util.generate.schema();
	const text = _generate_uranio_schema_text(api_schema);
	urn_log.trace(`TRX Schema generated.`);
	return text;
}

export function schema_and_save():void{
	const text = schema();
	save_schema(text);
	urn_log.trace(`Schema generated and saved.`);
}

export function save_schema(text:string):void{
	return api.util.generate.save_schema(text);
}

// export function hooks(repo:string):string{
export function hooks_client():string{
	urn_log.trace('Started generating uranio trx hooks...');
	init();
	// const text = _generate_hooks_text(repo);
	const text = _generate_hooks_text_client();
	urn_log.trace(`TRX Client Hooks generated.`);
	return text;
}

export function hooks_server():string{
	urn_log.trace('Started generating uranio trx hooks...');
	init();
	const text = _generate_hooks_text_server();
	urn_log.trace(`TRX Server Hooks generated.`);
	return text;
}

// export function hooks_and_save(repo:string):void{
export function hooks_and_save():void{
	// const text = hooks(repo);
	const text_server = hooks_server();
	const text_client = hooks_client();
	save_hooks_server(text_server);
	save_hooks_client(text_client);
	_compile_hooks_server();
	_compile_hooks_client();
	urn_log.trace(`Hooks generated and saved.`);
}

export function save_hooks_server(text:string):void{
	const output = _get_hooks_path_src_server();
	fs.writeFileSync(
		output,
		text
	);
	urn_log.trace(`Server Hooks saved in [${output}].`);
}

export function save_hooks_client(text:string):void{
	const output = _get_hooks_path_src_client();
	fs.writeFileSync(
		output,
		text
	);
	urn_log.trace(`Client Hooks saved in [${output}].`);
}

export function client_config(client_default:Required<ClientConfiguration>):string{
	urn_log.trace('Started generating uranio trx client config...');
	init();
	// const all_server_conf = conf.get_all();
	// for(const reqkey of required_server_config_client){
	//   (client_default as any)[`__server_${reqkey}`] = all_server_conf[reqkey];
	// }
	const text = api.util.generate.client_config(client_default);
	urn_log.trace(`TRX client config generated.`);
	return text;
}

export function client_config_and_save(client_default:Required<ClientConfiguration>):void{
	const text = client_config(client_default);
	save_client_config(text);
	urn_log.trace(`TRX Client config generated and saved.`);
}

export function save_client_config(text:string):void{
	api.util.generate.save_client_config(text);
}

function _get_hooks_path_src_server(){
	return `${process_params.urn_trx_repo_path}/src/hooks/hooks.ts`;
}

function _get_hooks_path_src_client(){
	return `${process_params.urn_trx_repo_path}/src/hooks/hooks_cln.ts`;
}

function _get_hooks_path_dist_server(){
	return `${process_params.urn_trx_repo_path}/dist/hooks/hooks.js`;
}

function _get_hooks_path_dist_client(){
	return `${process_params.urn_trx_repo_path}/dist/hooks/hooks_cln.js`;
}

function _get_hook_types_path_dist(){
	return `${process_params.urn_trx_repo_path}/dist/hooks/types.d.ts`;
}

function _get_hook_types_path_src(){
	return `${process_params.urn_trx_repo_path}/src/hooks/types.ts`;
}

function _compile(src:string, dest:string){
	esbuild.buildSync({
		entryPoints: [src],
		outfile: dest,
		platform: 'node',
		format: 'cjs'
	});
	urn_log.trace(`TRX Compiled [${src}] to [${dest}].`);
}

function _compile_hooks_server(){
	return _compile(
		_get_hooks_path_src_server(),
		_get_hooks_path_dist_server()
	);
}
function _compile_hooks_client(){
	return _compile(
		_get_hooks_path_src_client(),
		_get_hooks_path_dist_client()
	);
}
function _compile_hooks_types(){
	return _compile(
		_get_hook_types_path_src(),
		_get_hook_types_path_dist()
	);
}

export function hook_types():string{
	urn_log.trace('Started generating uranio trx types...');
	init();
	const text = _generate_uranio_hook_types_text();
	urn_log.trace(`TRX Hook types generated.`);
	return text;
}

export function hook_types_and_save():void{
	const text = hook_types();
	save_hook_types(text);
	_compile_hooks_types();
	urn_log.trace(`Hook types generated and saved.`);
}

export function save_hook_types(text:string):void{
	// const now = dateformat(new Date(), `yyyymmddHHMMssl`);
	// const backup_path = `${_get_hook_types_path_src()}.${now}.bkp`;
	// fs.copyFileSync(_get_hook_types_path_src(), backup_path);
	// urn_log.trace(`Copied backup file for atom schema in [${backup_path}].`);
	fs.writeFileSync(_get_hook_types_path_src(), text);
	urn_log.trace(`Update hook types [${_get_hook_types_path_src()}].`);
}

export function init():void{
	api.util.generate.init();
	// process_params.urn_base_schema = api.util.generate.process_params.urn_base_schema;
	process_params.urn_command = api.util.generate.process_params.urn_command;
	// process_params.urn_output_dir = api.util.generate.process_params.urn_output_dir;
	_init_trx_generate();
}

function _init_trx_generate(){
	for(const argv of process.argv){
		const splitted = argv.split('=');
		if(
		//   splitted[0] === 'urn_command'
		//   && typeof splitted[1] === 'string'
		//   && splitted[1] !== ''
		// ){
		//   process_params.urn_command = splitted[1];
		// }else if(
			splitted[0] === 'urn_trx_repo_path'
			&& typeof splitted[1] === 'string'
			&& splitted[1] !== ''
		){
			process_params.urn_trx_repo_path = splitted[1];
		// }else if(
		//   splitted[0] === 'urn_hooks_dir_src'
		//   && typeof splitted[1] === 'string'
		//   && splitted[1] !== ''
		// ){
		//   process_params.urn_hooks_dir_src = splitted[1];
		// }else if(
		//   splitted[0] === 'urn_hooks_dir_dist'
		//   && typeof splitted[1] === 'string'
		//   && splitted[1] !== ''
		// ){
		//   process_params.urn_hooks_dir_dist = splitted[1];
		}
		// if(
		//   splitted[0] === 'urn_base_types'
		//   && typeof splitted[1] === 'string'
		//   && splitted[1] !== ''
		// ){
		//   process_params.urn_base_types = splitted[1];
		// }else if(
		//   splitted[0] === 'urn_repo'
		//   && typeof splitted[1] === 'string'
		//   && splitted[1] !== ''
		// ){
		//   process_params.urn_repo = splitted[1];
		// }
	}
}

// function _read_hook_types_dist():string{
// 	return fs.readFileSync(_get_hook_types_path_dist(), {encoding: 'utf8'});
// }

function _read_hook_types_src():string{
	return fs.readFileSync(_get_hook_types_path_src(), {encoding: 'utf8'});
}

function _generate_uranio_hook_types_text(){
	const txt = _generate_hook_types_text_src();
	// const data = fs.readFileSync(process_params.urn_base_types, {encoding: 'utf8'});
	const data = _read_hook_types_src();
	const data_start = data.split('/** --uranio-generate-types-start */');
	const data_end = data_start[1].split('/** --uranio-generate-types-end */');
	let new_data = '';
	new_data += data_start[0];
	new_data += `/** --uranio-generate-types-start */\n\n`;
	new_data += txt; + '\n\n';
	new_data += `/** --uranio-generate-types-end */`;
	new_data += data_end[1];
	// const uranio_data = (process_params.urn_repo === 'trx') ?
	//   _replace_repo_with_uranio(new_data) : new_data;
	// return uranio_data;
	return new_data;
}

// function _replace_repo_with_uranio(text:string){
//   const regex = `uranio-${process_params.urn_repo}`;
//   return text.replaceAll(regex, 'uranio');
// }

function _generate_hook_types_text_src(){
	let text = '';
	text += `import {urn_response} from 'urn-lib';\n`;
	text += `import {Api} from '../typ/api_cln';\n`;
	text += `import {schema} from '../sch/client';\n`;
	text += `import {Hook} from '../typ/base_cln';\n`;
	text += `export type Hooks = {\n`;
	text += `\tset_token: (token: string) => void;\n`;
	text += `\tget_token: () => string | undefined;\n`;
	const atom_book = book.get_all_definitions();
	for(const [atom_name, atom_def] of Object.entries(atom_book)){
		if(!atom_def.dock || !atom_def.dock.url){
			continue;
		}
		const plural = book.get_plural(atom_name as schema_types.AtomName);
		text += `\t${plural}: {\n`;
		if(atom_def.authenticate === true){
			text += `\t\tauthenticate(email: string, password: string):`;
			text += `Promise<urn_response.General<Api.AuthResponse>>;\n`;
		}
		if(atom_name === 'media'){
			text += `\t\tupload(`;
			text += `file: Buffer | ArrayBuffer | Blob, `;
			text += `token?: string`;
			text += `):Promise<urn_response.General<schema.Atom<'media'>>>;\n`;
			text += `\t\tpresigned(`;
			text += `filename: string, `;
			text += `size?: number, `;
			text += `type?: string, `;
			text += `token?: string`;
			text += `): Promise<urn_response.General<string>>;\n`;
		}
		
		const route_defs = book.get_routes_definition(atom_name as schema_types.AtomName);
		for(const [route_name, route_def] of Object.entries(route_defs)){
			if(atom_name === 'media' && route_name === 'upload' || route_name === 'presigned'){
				continue;
			}
			const text_args = _text_args_for_url(route_def.url);
			text += `\t\t${route_name}<D extends schema.Depth>(`;
			text += `${text_args.replaceAll('\n','').replaceAll('\t','')}`;
			if(route_def.method === 'POST'){
				text += `body:Hook.Body<'${atom_name}', '${route_name}'>,`;
			}
			text += `parameters?:Hook.Arguments`;
			text += `<'${atom_name}', '${route_name}', D>,`;
			text += `token?:string`;
			text += `):Hook.Response<'${atom_name}', `;
			text += `'${route_name}', D>;\n`;
		}
		text += `\t};\n`;
	}
	text += `};\n`;
	
	return text;
}

// function _generate_hook_types_text_dist(){
// 	let text = '';
// 	text += `import {urn_response} from 'urn-lib';\n`;
// 	text += `import {Api} from '../typ/api_cln';\n`;
// 	text += `import {schema} from '../sch/client';\n`;
// 	text += `import {Hook} from '../typ/base_cln';\n`;
// 	text += `export declare type Hooks = {\n`;
// 	text += `\tset_token: (token: string) => void;\n`;
// 	text += `\tget_token: () => string | undefined;\n`;
// 	const atom_book = book.get_all_definitions();
// 	for(const [atom_name, atom_def] of Object.entries(atom_book)){
// 		if(!atom_def.dock || !atom_def.dock.url){
// 			continue;
// 		}
// 		const plural = book.get_plural(atom_name as schema_types.AtomName);
// 		text += `\t${plural}: {\n`;
// 		if(atom_def.authenticate === true){
// 			text += `\t\tauthenticate(email: string, password: string):`;
// 			text += `Promise<urn_response.General<Api.AuthResponse>>;\n`;
// 		}
// 		if(atom_name === 'media'){
// 			text += `\t\tupload(`;
// 			text += `file: Buffer | ArrayBuffer | Blob, `;
// 			text += `token?: string`;
// 			text += `):Promise<urn_response.General<schema.Atom<'media'>>>;\n`;
// 			text += `\t\tpresigned(`;
// 			text += `filename: string, `;
// 			text += `size?: number, `;
// 			text += `type?: string, `;
// 			text += `token?: string`;
// 			text += `): Promise<urn_response.General<string>>;\n`;
// 		}
		
// 		const route_defs = book.get_routes_definition(atom_name as schema_types.AtomName);
// 		for(const [route_name, route_def] of Object.entries(route_defs)){
// 			if(atom_name === 'media' && route_name === 'upload' || route_name === 'presigned'){
// 				continue;
// 			}
// 			const text_args = _text_args_for_url(route_def.url);
// 			text += `\t\t${route_name}<D extends schema.Depth>(`;
// 			text += `${text_args.replaceAll('\n','').replaceAll('\t','')}`;
// 			if(route_def.method === 'POST'){
// 				text += `body:Hook.Body<'${atom_name}', '${route_name}'>,`;
// 			}
// 			text += `parameters?:Hook.Arguments`;
// 			text += `<'${atom_name}', '${route_name}', D>,`;
// 			text += `token?:string`;
// 			text += `):Hook.Response<'${atom_name}', `;
// 			text += `'${route_name}', D>;\n`;
// 		}
// 		text += `\t};\n`;
// 	}
// 	text += `};\n`;
	
// 	return text;
// }

function _generate_uranio_schema_text(api_schema:string){
	const txt = _generate_trx_schema_text();
	const split_text = 'export {};/** --uranio-generate-end */';
	const data_splitted = api_schema.split(split_text);
	let new_data = '';
	new_data += data_splitted[0];
	new_data += txt; + '\n\n\t';
	new_data += split_text;
	new_data += data_splitted[1];
	return new_data;
}

function _generate_trx_schema_text(){
	// const atom_book = book.get_all_definitions();
	// let txt = '';
	// txt += `\n`;
	// txt += `import {urn_response} from 'urn-lib';\n`;
	// txt += _generate_default_response();
	// txt += _generate_custom_response(atom_book);
	// txt += _generate_response();
	const txt = '';
	return txt;
}

// function _get_submodule(repo:string){
//   if(repo === 'adm'){
//     return '.trx';
//   }
//   return '';
// }

function _generate_hooks_text_client(){
	return _generate_hooks_text('client');
}

function _generate_hooks_text_server(){
	return _generate_hooks_text('server');
}

// function _generate_hooks_text(repo:string){
function _generate_hooks_text(parent:string){
	// const submodule = _get_submodule(repo);
	let text = '';
	text += `/**\n`;
	text += ` * Auto generate hooks file\n`;
	text += ` *\n`;
	text += ` * @packageDocumentation\n`;
	text += ` */\n`;
	text += `\n`;
	text += `import {urn_response} from 'urn-lib';\n`;
	text += `\n`;
	// text += `import uranio from 'uranio/client';\n`;
	// text += `import uranio from '../src/index';\n`;
	// text += `import {Hooks} from './types';\n`;
	text += `import {schema} from '../sch/${parent}';\n`;
	text += `import * as types from '../${parent}/types';\n`;
	text += `import * as auth from '../auth/${parent}';\n`;
	text += `import * as base from '../base/${parent}';\n`;
	text += `import * as media from '../media/${parent}';\n`;
	text += `import {Hooks} from './types';\n`;
	text += `\n`;
	text += `let hook_token:string|undefined;\n`;
	text += `\n`;
	text += `export const hooks:Hooks = {\n`;
	text += `\tset_token: (token:string):void => {\n`;
	text += `\t\thook_token = token;\n`;
	text += `\t},\n`;
	text += `\tget_token: ():string|undefined => {\n`;
	text += `\t\treturn hook_token;\n`;
	text += `\t},\n`;
	// text += `};\n`;
	// text += `\n`;
	
	const atom_book = book.get_all_definitions();
	for(const [atom_name, atom_def] of Object.entries(atom_book)){
		if(!atom_def.dock || !atom_def.dock.url){
			continue;
		}
		const plural = book.get_plural(atom_name as schema_types.AtomName);
		// text += `uranio${submodule}.hooks['${plural}'] = {\n`;
		text += `\t${plural}: {\n`;
		if(atom_def.authenticate === true){
			// text += _authenticate_hooks(atom_name, submodule);
			text += _authenticate_hooks(atom_name);
		}
		if(atom_name === 'media'){
			// text += _upload_hooks(submodule);
			// text += _presigned_hooks(submodule);
			text += _upload_hooks();
			text += _presigned_hooks();
		}
		const route_defs = book.get_routes_definition(atom_name as schema_types.AtomName);
		for(const [route_name, route_def] of Object.entries(route_defs)){
			if(atom_name === 'media' && route_name === 'upload' || route_name === 'presigned'){
				continue;
			}
			const text_args = _text_args_for_url(route_def.url);
			const body_arg = _body_arg_for_route(route_def.method, atom_name, route_name);
			// text += `\t\t${route_name}: async <D extends uranio.schema.Depth>(\n`;
			text += `\t\t${route_name}: async <D extends schema.Depth>(\n`;
			// text += `\t\t${text_args}${body_arg}\tparameters?:uranio.types.Hook.Arguments`;
			text += `\t\t\t${text_args}${body_arg}parameters?:types.Hook.Arguments`;
			text += `<'${atom_name}', '${route_name}', D>,\n`;
			text += `\t\t\ttoken?:string\n`;
			// text += `\t\t):uranio.types.Hook.Response<'${atom_name}', `;
			text += `\t\t):types.Hook.Response<'${atom_name}', `;
			text += `'${route_name}', D>  => {\n`;
			// text += `\t\t\tconst args:uranio.types.Hook.Arguments<'${atom_name}', `;
			text += `\t\t\tconst args:types.Hook.Arguments<'${atom_name}', `;
			text += `'${route_name}', D> = {\n`;
			const lines = _text_lines_in_args_params(route_def.url);
			if(lines.length > 0){
				text += `\t\t\t\tparams: {\n`;
				for(const line of lines){
					text += `\t\t\t\t\t${line}\n`;
				}
				text += `\t\t\t\t},\n`;
			}
			if(body_arg !== ''){
				text += `\t\t\t\tbody: body,\n`;
			}
			text += `\t\t\t\t...parameters\n`;
			text += `\t\t\t};\n`;
			text += `\t\t\tlet current_token:string|undefined;\n`;
			// text += `\t\t\tconst hook_token = uranio${submodule}.hooks.get_token();\n`;
			text += `\t\t\tconst hook_token = hooks.get_token();\n`;
			text += `\t\t\tif(typeof hook_token === 'string' && hook_token !== ''){\n`;
			text += `\t\t\t\tcurrent_token = hook_token;\n`;
			text += `\t\t\t}\n`;
			text += `\t\t\tif(typeof token === 'string' && token !== ''){\n`;
			text += `\t\t\t\tcurrent_token = token;\n`;
			text += `\t\t\t}\n`;
			// text += `\t\t\treturn await uranio${submodule}.base.create('${atom_name}',`;
			text += `\t\t\treturn await base.create('${atom_name}',`;
			text += `current_token).hook<'${route_name}',D>('${route_name}')(args);\n`;
			text += `\t\t},\n`;
		}
		text += `\t},\n`;
	}
	text += `};\n`;
	text += `\n`;
	return text;
}

function _text_lines_in_args_params(url:string){
	const lines:string[] = [];
	if(typeof url !== 'string'){
		return lines;
	}
	let checked_url = url;
	if(url[0] === "'" && url[url.length-1] === "'"){
		checked_url = url.substring(1,url.length-1);
	}
	const url_params = _get_parameters_from_url(checked_url);
	for(const p of url_params){
		lines.push(`${p}: ${p},`);
	}
	return lines;
}

function _body_arg_for_route(method:string, atom_name: string, route_name:string){
	if(method === 'POST'){
		// return `\tbody:uranio.types.Hook.Body<'${atom_name}', '${route_name}'>,\n\t\t`;
		return `body:types.Hook.Body<'${atom_name}', '${route_name}'>,\n\t\t\t`;
	}
	return '';
}

function _text_args_for_url(url:string){
	let checked_url = url;
	if(url[0] === "'" && url[url.length-1] === "'"){
		checked_url = url.substring(1,url.length-1);
	}
	const params = _get_parameters_from_url(checked_url);
	return _generate_args(params);
}

function _get_parameters_from_url(url:string){
	const url_params:string[] = [];
	if(typeof url !== 'string'){
		return url_params;
	}
	const splitted_url = url.split('/');
	for(const split_url of splitted_url){
		if(split_url.includes(':')){
			const splitted_split = split_url.split(':');
			if(splitted_split.length > 1){
				url_params.push(splitted_split[1]);
			}
		}
	}
	return url_params;
}

function _generate_args(params:string[]){
	const param_text:string[] = [];
	for(const p of params){
		param_text.push(`${p}:string,\n\t\t\t`);
	}
	return param_text.join('');
}

// function _authenticate_hooks(atom_name:string, submodule:string){
function _authenticate_hooks(atom_name:string){
	let text = '';
	text += `\t\tauthenticate: async (\n`;
	text += `\t\t\temail: string,\n`;
	text += `\t\t\tpassword: string\n`;
	// text += `\t\t): Promise<urn_response.General<uranio.types.Api.AuthResponse>> => {\n`;
	// text += `\t\t\treturn await uranio${submodule}.auth.create('${atom_name}').authenticate(email, password);\n`;
	text += `\t\t): Promise<urn_response.General<types.Api.AuthResponse>> => {\n`;
	text += `\t\t\treturn await auth.create('${atom_name}').authenticate(email, password);\n`;
	text += `\t\t},\n`;
	return text;
}

// function _upload_hooks(submodule:string){
function _upload_hooks(){
	let text = '';
	text += `\t\tupload: async<D extends schema.Depth>(\n`;
	text += `\t\t\tfile: Buffer | ArrayBuffer | Blob,\n`;
	text += `\t\t\ttoken?: string\n`;
	text += `\t\t): Promise<urn_response.General<schema.Atom<'media'>>> => {\n`;
	text += `\t\t\tlet current_token: string | undefined;\n`;
	text += `\t\t\tconst hook_token = hooks.get_token();\n`;
	text += `\t\t\tif (typeof hook_token === "string" && hook_token !== "") {\n`;
	text += `\t\t\t\tcurrent_token = hook_token;\n`;
	text += `\t\t\t}\n`;
	text += `\t\t\tif (typeof token === "string" && token !== "") {\n`;
	text += `\t\t\t\tcurrent_token = token;\n`;
	text += `\t\t\t}\n`;
	text += `\t\t\treturn await media.create(current_token).upload<D>(file, current_token);\n`;
	text += `\t\t},\n`;
	return text;
}

// function _presigned_hooks(submodule:string){
function _presigned_hooks(){
	let text = '';
	text += `\t\tpresigned: async(\n`;
	text += `\t\t\tfilename: string,\n`;
	text += `\t\t\tsize?: number,\n`;
	text += `\t\t\ttype?: string,\n`;
	text += `\t\t\ttoken?: string\n`;
	text += `\t\t): Promise<urn_response.General<string>> => {\n`;
	text += `\t\t\tlet current_token: string | undefined;\n`;
	// text += `\t\t\tconst hook_token = uranio${submodule}.hooks.get_token();\n`;
	text += `\t\t\tconst hook_token = hooks.get_token();\n`;
	text += `\t\t\tif (typeof hook_token === "string" && hook_token !== "") {\n`;
	text += `\t\t\t\tcurrent_token = hook_token;\n`;
	text += `\t\t\t}\n`;
	text += `\t\t\tif (typeof token === "string" && token !== "") {\n`;
	text += `\t\t\t\tcurrent_token = token;\n`;
	text += `\t\t\t}\n`;
	// text += `\t\t\treturn await uranio${submodule}.media.create(current_token).presigned(filename, size, type, current_token);\n`;
	text += `\t\t\treturn await media.create(current_token).presigned(filename, size, type, current_token);\n`;
	text += `\t\t},\n`;
	return text;
}


// function _generate_response(){
//   let text = '';
//   text += `export declare type Response<A extends AtomName, R extends RouteName<A>, D extends Depth = 0> =\n`;
//   text += `\tR extends RouteDefaultName ? DefaultResponse<A,R,D> :\n`;
//   text += `\tR extends RouteCustomName<A> ? CustomResponse<A,R,D> :\n`;
//   text += `\tnever\n`;
//   text += `\n`;
//   return text;
// }

// function _generate_custom_response(atom_book:types.Book){
//   let text = '';
//   text += `declare type CustomResponse<A extends AtomName, R extends RouteName<A>, D extends Depth = 0> =\n`;
//   for(const [atom_name, atom_def] of Object.entries(atom_book)){
//     text += `\tA extends '${atom_name}' ?\n`;
//     if(!atom_def.dock || !atom_def.dock.routes){
//       text += `\t\tnever :\n`;
//     }else{
//       const routes = atom_def.dock.routes as types.Book.Definition.Dock.Routes<'superuser'>;
//       for(const [route_name, route_def] of Object.entries(routes)){
//         text += `\t\tR extends '${route_name}' ? ${route_def.return} :\n`;
//       }
//       text += `\t\tnever :\n`;
//     }
//   }
//   text += `\t\tnever\n`;
//   text += `\n`;
//   return text;
// }

// function _generate_default_response(){
//   let text = '';
//   text += `declare type DefaultResponse<A extends AtomName, R extends RouteName<A>, D extends Depth = 0> =\n`;
//   // for(const [route_name, route_def] of Object.entries(api.routes.default_routes)){
//   //   text += `\tR extends '${route_name}' ? \n`;
//   // }
//   text += `\tR extends 'count' ? urn_response.General<number, any> :\n`;
//   text += `\tR extends 'find_id' ? urn_response.General<Molecule<A,D>,any> :\n`;
//   text += `\tR extends 'find' ? urn_response.General<Molecule<A,D>[],any> :\n`;
//   text += `\tR extends 'find_one' ? urn_response.General<Molecule<A,D>,any> :\n`;
//   text += `\tR extends 'insert' ? urn_response.General<Molecule<A,D>,any> :\n`;
//   text += `\tR extends 'update' ? urn_response.General<Molecule<A,D>,any> :\n`;
//   text += `\tR extends 'delete' ? urn_response.General<Molecule<A,D>,any> :\n`;
//   text += `\tR extends 'insert_multiple' ? urn_response.General<Molecule<A,D>[],any> :\n`;
//   text += `\tR extends 'update_multiple' ? urn_response.General<Molecule<A,D>[],any> :\n`;
//   text += `\tR extends 'delete_multiple' ? urn_response.General<Molecule<A,D>[],any> :\n`;
//   text += `\t// R extends 'upload' ? urn_response.General<Molecule<A,D>,any> :\n`;
//   text += `\t// R extends 'presigned' ? urn_response.General<string,any> :\n`;
//   text += `\tnever;\n`;
//   text += `\n`;
//   return text;
// }
