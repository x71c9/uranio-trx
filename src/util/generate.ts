/**
 * Generate module
 *
 * @packageDocumentation
 */

import fs from 'fs';

import dateformat from 'dateformat';

import api from 'uranio-api';

import {urn_log} from 'urn-lib';

import {schema as schema_types} from '../sch/server';

import * as book from '../book/server';

import * as types_types from '../server/types';

export const process_params = {
	urn_command: `schema`,
	urn_hook_types_path: `./node_modules/uranio-trx/dist/hooks/types.d.ts`,
	// urn_base_schema: `./.uranio/generate/base/schema.d.ts`,
	// urn_base_types: `./.uranio/generate/base/uranio-trx.d.ts`,
	urn_output_dir: `.`,
	urn_repo: 'adm'
};

export function schema():string{
	urn_log.debug('Started generating uranio trx schema...');
	init();
	const api_schema = api.util.generate.schema();
	const text = _generate_uranio_schema_text(api_schema);
	urn_log.debug(`TRX Schema generated.`);
	return text;
}

export function schema_and_save():void{
	const text = schema();
	save_schema(text);
	urn_log.debug(`Schema generated and saved.`);
}

export function save_schema(text:string):void{
	return api.util.generate.save_schema(text);
}

export function hooks(repo:string):string{
	urn_log.debug('Started generating uranio trx hooks...');
	init();
	const text = _generate_hooks_text(repo);
	urn_log.debug(`TRX Hooks generated.`);
	return text;
}

export function hooks_and_save(repo:string):void{
	const text = hooks(repo);
	save_hooks(text);
	urn_log.debug(`Hooks generated and saved.`);
}

export function save_hooks(text:string):void{
	const output = `${process_params.urn_output_dir}/__urn_hooks.ts`;
	fs.writeFileSync(
		output,
		text
	);
	urn_log.debug(`Hooks saved in [${output}.`);
}

export function hook_types():string{
	urn_log.debug('Started generating uranio trx types...');
	init();
	const text = _generate_uranio_hook_types_text();
	urn_log.debug(`TRX Types generated.`);
	return text;
}

export function hook_types_and_save():void{
	const text = hook_types();
	save_hook_types(text);
	urn_log.debug(`Types generated and saved.`);
}

export function save_hook_types(text:string):void{
	const now = dateformat(new Date(), `yyyymmddHHMMssl`);
	const backup_path = `${process_params.urn_hook_types_path}.${now}.bkp`;
	fs.copyFileSync(process_params.urn_hook_types_path, backup_path);
	urn_log.debug(`Copied backup file for atom schema in [${backup_path}].`);
	fs.writeFileSync(process_params.urn_hook_types_path, text);
	urn_log.debug(`Update schema [${process_params.urn_hook_types_path}].`);
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
			splitted[0] === 'urn_output_dir'
			&& typeof splitted[1] === 'string'
			&& splitted[1] !== ''
		){
			process_params.urn_output_dir = splitted[1];
		}else if(
			splitted[0] === 'urn_hook_types_path'
			&& typeof splitted[1] === 'string'
			&& splitted[1] !== ''
		){
			process_params.urn_hook_types_path = splitted[1];
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

function _read_hook_types():string{
	return fs.readFileSync(process_params.urn_hook_types_path, {encoding: 'utf8'});
}

function _generate_uranio_hook_types_text(){
	const txt = _generate_types_text();
	// const data = fs.readFileSync(process_params.urn_base_types, {encoding: 'utf8'});
	const data = _read_hook_types();
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

function _generate_types_text(){
	let text = '';
	text += `import {urn_response} from 'urn-lib';\n`;
	text += `import {Api} from '../typ/api_cln';\n`;
	text += `import {schema} from '../sch/client';\n`;
	text += `import {Hook} from '../base/types';\n`;
	text += `export declare type Hooks = {\n`;
	text += `\tset_token: (token: string) => void;\n`;
	text += `\tget_token: () => string | undefined;\n`;
	const atom_book = book.get_all_definitions();
	for(const [atom_name, atom_def] of Object.entries(atom_book)){
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
		
		const route_defs = book.get_routes_definition_with_defaults(atom_name as schema_types.AtomName);
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
			text += `):Promise<Hook.Response<'${atom_name}', `;
			text += `'${route_name}', D>>;\n`;
		}
		text += `\t};\n`;
	}
	text += `};\n`;
	
	return text;
}

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
	const atom_book = book.get_all_definitions();
	let txt = '';
	txt += `\n`;
	txt += `import {urn_response} from 'urn-lib';\n`;
	txt += _generate_default_response();
	txt += _generate_custom_response(atom_book);
	txt += _generate_response();
	return txt;
}

function _get_submodule(repo:string){
	if(repo === 'adm'){
		return '.trx';
	}
	return '';
}

function _generate_hooks_text(repo:string){
	const submodule = _get_submodule(repo);
	let text = '';
	text += `/**\n`;
	text += ` * Auto generate hooks file\n`;
	text += ` *\n`;
	text += ` * @packageDocumentation\n`;
	text += ` */\n`;
	text += `\n`;
	text += `import {urn_response} from 'urn-lib';\n`;
	text += `\n`;
	text += `import uranio from 'uranio/client';\n`;
	// text += `import uranio from '../src/index';\n`;
	text += `\n`;
	const atom_book = book.get_all_definitions();
	for(const [atom_name, atom_def] of Object.entries(atom_book)){
		const plural = book.get_plural(atom_name as schema_types.AtomName);
		text += `uranio${submodule}.hooks['${plural}'] = {\n`;
		if(atom_def.authenticate === true){
			text += _authenticate_hooks(atom_name, submodule);
		}
		if(atom_name === 'media'){
			text += _upload_hooks(submodule);
			text += _presigned_hooks(submodule);
		}
		const route_defs = book.get_routes_definition_with_defaults(atom_name as schema_types.AtomName);
		for(const [route_name, route_def] of Object.entries(route_defs)){
			if(atom_name === 'media' && route_name === 'upload' || route_name === 'presigned'){
				continue;
			}
			const text_args = _text_args_for_url(route_def.url);
			const body_arg = _body_arg_for_route(route_def.method, atom_name, route_name);
			text += `\t${route_name}: async <D extends uranio.schema.Depth>(\n`;
			text += `\t\t${text_args}${body_arg}parameters?:uranio.types.Hook.Arguments`;
			text += `<'${atom_name}', '${route_name}', D>,\n`;
			text += `\t\ttoken?:string\n`;
			text += `\t):Promise<uranio.types.Hook.Response<'${atom_name}', `;
			text += `'${route_name}', D>>  => {\n`;
			text += `\t\tconst args:uranio.types.Hook.Arguments<'${atom_name}', `;
			text += `'${route_name}', D> = {\n`;
			const lines = _text_lines_in_args_params(route_def.url);
			if(lines.length > 0){
				text += `\t\t\tparams: {\n`;
				for(const line of lines){
					text += `\t\t\t\t${line}\n`;
				}
				text += `\t\t\t},\n`;
			}
			if(body_arg !== ''){
				text += `\t\t\tbody: body,\n`;
			}
			text += `\t\t\t...parameters\n`;
			text += `\t\t};\n`;
			text += `\t\tlet current_token:string|undefined;\n`;
			text += `\t\tconst hook_token = uranio${submodule}.hooks.get_token();\n`;
			text += `\t\tif(typeof hook_token === 'string' && hook_token !== ''){\n`;
			text += `\t\t\tcurrent_token = hook_token;\n`;
			text += `\t\t}\n`;
			text += `\t\tif(typeof token === 'string' && token !== ''){\n`;
			text += `\t\t\tcurrent_token = token;\n`;
			text += `\t\t}\n`;
			text += `\t\treturn await uranio${submodule}.base.create('${atom_name}',`;
			text += `current_token).hook<'${route_name}',D>('${route_name}')(args);\n`;
			text += `\t},\n`;
		}
		text += `}\n`;
	}
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
		return `body:uranio.types.Hook.Body<'${atom_name}', '${route_name}'>,\n\t\t`;
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
		param_text.push(`${p}:string,\n\t\t`);
	}
	return param_text.join('');
}

function _authenticate_hooks(atom_name:string, submodule:string){
	let text = '';
	text += `\tauthenticate: async (\n`;
	text += `\t\temail: string,\n`;
	text += `\t\tpassword: string\n`;
	text += `\t): Promise<urn_response.General<uranio.types.Api.AuthResponse>> => {\n`;
	text += `\t\treturn await uranio${submodule}.auth.create('${atom_name}').authenticate(email, password);\n`;
	text += `\t},\n`;
	return text;
}

function _upload_hooks(submodule:string){
	let text = '';
	text += `\tupload: async<D extends uranio.schema.Depth>(\n`;
	text += `\t\tfile: Buffer | ArrayBuffer | Blob,\n`;
	text += `\t\ttoken?: string\n`;
	text += `\t): Promise<urn_response.General<uranio.schema.Atom<'media'>>> => {\n`;
	text += `\t\tlet current_token: string | undefined;\n`;
	text += `\t\tconst hook_token = uranio${submodule}.hooks.get_token();\n`;
	text += `\t\tif (typeof hook_token === "string" && hook_token !== "") {\n`;
	text += `\t\t\tcurrent_token = hook_token;\n`;
	text += `\t\t}\n`;
	text += `\t\tif (typeof token === "string" && token !== "") {\n`;
	text += `\t\t\tcurrent_token = token;\n`;
	text += `\t\t}\n`;
	text += `\t\treturn await uranio${submodule}.media.create(current_token).upload<D>(file, current_token);\n`;
	text += `\t},\n`;
	return text;
}

function _presigned_hooks(submodule:string){
	let text = '';
	text += `\tpresigned: async(\n`;
	text += `\t\tfilename: string,\n`;
	text += `\t\tsize?: number,\n`;
	text += `\t\ttype?: string,\n`;
	text += `\t\ttoken?: string\n`;
	text += `\t): Promise<urn_response.General<string>> => {\n`;
	text += `\t\tlet current_token: string | undefined;\n`;
	text += `\t\tconst hook_token = uranio${submodule}.hooks.get_token();\n`;
	text += `\t\tif (typeof hook_token === "string" && hook_token !== "") {\n`;
	text += `\t\t\tcurrent_token = hook_token;\n`;
	text += `\t\t}\n`;
	text += `\t\tif (typeof token === "string" && token !== "") {\n`;
	text += `\t\t\tcurrent_token = token;\n`;
	text += `\t\t}\n`;
	text += `\t\treturn await uranio${submodule}.media.create(current_token).presigned(filename, size, type, current_token);\n`;
	text += `\t},\n`;
	return text;
}


function _generate_response(){
	let text = '';
	text += `export declare type Response<A extends AtomName, R extends RouteName<A>, D extends Depth = 0> =\n`;
	text += `\tR extends RouteDefaultName ? DefaultResponse<A,R,D> :\n`;
	text += `\tR extends RouteCustomName<A> ? CustomResponse<A,R,D> :\n`;
	text += `\tnever\n`;
	text += `\n`;
	return text;
}

function _generate_custom_response(atom_book:types_types.Book){
	let text = '';
	text += `declare type CustomResponse<A extends AtomName, R extends RouteName<A>, D extends Depth = 0> =\n`;
	for(const [atom_name, atom_def] of Object.entries(atom_book)){
		text += `\tA extends '${atom_name}' ?\n`;
		if(!atom_def.dock || !atom_def.dock.routes){
			text += `\t\tnever :\n`;
		}else{
			const routes = atom_def.dock.routes as types_types.Book.Definition.Dock.Routes<'superuser'>;
			for(const [route_name, route_def] of Object.entries(routes)){
				text += `\t\tR extends '${route_name}' ? ${route_def.return} :\n`;
			}
			text += `\t\tnever :\n`;
		}
	}
	text += `\t\tnever\n`;
	text += `\n`;
	return text;
}

function _generate_default_response(){
	let text = '';
	text += `declare type DefaultResponse<A extends AtomName, R extends RouteName<A>, D extends Depth = 0> =\n`;
	// for(const [route_name, route_def] of Object.entries(api.routes.default_routes)){
	//   text += `\tR extends '${route_name}' ? \n`;
	// }
	text += `\tR extends 'count' ? urn_response.General<number, any> :\n`;
	text += `\tR extends 'find_id' ? urn_response.General<Molecule<A,D>,any> :\n`;
	text += `\tR extends 'find' ? urn_response.General<Molecule<A,D>[],any> :\n`;
	text += `\tR extends 'find_one' ? urn_response.General<Molecule<A,D>,any> :\n`;
	text += `\tR extends 'insert' ? urn_response.General<Molecule<A,D>,any> :\n`;
	text += `\tR extends 'update' ? urn_response.General<Molecule<A,D>,any> :\n`;
	text += `\tR extends 'delete' ? urn_response.General<Molecule<A,D>,any> :\n`;
	text += `\tR extends 'insert_multiple' ? urn_response.General<Molecule<A,D>[],any> :\n`;
	text += `\tR extends 'update_multiple' ? urn_response.General<Molecule<A,D>[],any> :\n`;
	text += `\tR extends 'delete_multiple' ? urn_response.General<Molecule<A,D>[],any> :\n`;
	text += `\t// R extends 'upload' ? urn_response.General<Molecule<A,D>,any> :\n`;
	text += `\t// R extends 'presigned' ? urn_response.General<string,any> :\n`;
	text += `\tnever;\n`;
	text += `\n`;
	return text;
}
