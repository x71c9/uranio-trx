/**
 * Generate module
 *
 * @packageDocumentation
 */

import fs from 'fs';

import api from 'uranio-api';

// import {urn_util, urn_exception, urn_log} from 'urn-lib';
import {urn_log} from 'urn-lib';

// const urn_exc = urn_exception.init(`REGISTER_MODULE`, `Register module.`);

import {schema} from '../sch/index';

import * as book from '../book/index';

import * as types from '../types';

let urn_generate_base_schema = `./types/schema.d.ts`;
let urn_generate_output_dir = `.`;

// import {default_routes} from '../routes/client';
export function generate():void{
	
	_generate_trx_schema();
	
	_generate_hooks();
	
	_generate_uranio_types();
	
}

function _generate_uranio_types(){
	// TODO
}

function _generate_hooks(){
	urn_log.debug('Generating uranio trx hooks...');
	const text = _generate_hooks_text();
	_save_hooks_file(text);
	urn_log.debug(`TRX Hooks generated.`);
}

function _save_hooks_file(text:string){
	for(const argv of process.argv){
		const splitted = argv.split('=');
		if(
			splitted[0] === 'urn_generate_output_dir'
			&& typeof splitted[1] === 'string'
			&& splitted[1] !== ''
		){
			urn_generate_output_dir = splitted[1];
		}
	}
	fs.writeFileSync(`${urn_generate_output_dir}/__urn_hooks.ts`, text);
}

function _generate_hooks_text(){
	let text = '';
	text += `import uranio from 'uranio/client';\n`;
	text += `\n`;
	const atom_book = book.get_all_definitions();
	for(const [atom_name, atom_def] of Object.entries(atom_book)){
		const plural = book.get_plural(atom_name as schema.AtomName);
		text += `uranio.hooks['${plural}'] = {\n`;
		if(atom_def.authenticate === true){
			text += _authenticate_hooks(atom_name);
		}
		if(atom_name === 'media'){
			text += _upload_hooks();
			text += _presigned_hooks();
		}
		const route_defs = book.get_routes_definition_with_defaults(atom_name as schema.AtomName);
		for(const [route_name, route_def] of Object.entries(route_defs)){
			const text_args = _text_args_for_url(route_def.url);
			const body_arg = _body_arg_for_route(route_def.method, atom_name, route_name);
			text += `\t${route_name}: async <D extends uranio.types.Depth>(\n`;
			text += `\t\t${text_args}${body_arg}options?:uranio.types.Hook.Arguments`;
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
			text += `\t\t\t...options\n`;
			text += `\t\t};\n`;
			text += `\t\tlet current_token:string|undefined;\n`;
			text += `\t\tif(typeof hook_token === 'string' && hook_token !== ''){\n`;
			text += `\t\t\tcurrent_token = hook_token;\n`;
			text += `\t\t}\n`;
			text += `\t\tif(typeof token === 'string' && token !== ''){\n`;
			text += `\t\t\tcurrent_token = token;\n`;
			text += `\t\t}\n`;
			text += `\t\treturn await uranio.base.create('${atom_name}',`;
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

function _authenticate_hooks(atom_name:string){
	let text = '';
	text += `\tauthenticate: async (\n`;
	text += `\t\temail: string,\n`;
	text += `\t\tpassword: string\n`;
	text += `\t): Promise<urn_response.General<uranio.api.core.types.Api.AuthResponse>> => {\n`;
	text += `\t\treturn await uranio.auth.create('${atom_name}').authenticate(email, password);\n`;
	text += `\t},\n`;
	return text;
}

function _upload_hooks(){
	let text = '';
	text += `\tupload: async<D extends uranio.types.Depth>(\n`;
	text += `\t\tfile: Buffer | ArrayBuffer | Blob,\n`;
	text += `\t\ttoken?: string\n`;
	text += `\t): Promise<urn_response.General<uranio.schema.Atom<'media'>>> => {\n`;
	text += `\t\tlet current_token: string | undefined;\n`;
	text += `\t\tif (typeof hook_token === "string" && hook_token !== "") {\n`;
	text += `\t\t\tcurrent_token = hook_token;\n`;
	text += `\t\t}\n`;
	text += `\t\tif (typeof token === "string" && token !== "") {\n`;
	text += `\t\t\tcurrent_token = token;\n`;
	text += `\t\t}\n`;
	text += `\t\treturn await uranio.media.create(current_token).upload<D>(file, current_token);\n`;
	text += `\t},\n`;
	return text;
}

function _presigned_hooks(){
	let text = '';
	text += `\tpresigned: async(\n`;
	text += `\t\tfilename: string,\n`;
	text += `\t\tsize?: number,\n`;
	text += `\t\ttype?: string,\n`;
	text += `\t\ttoken?: string\n`;
	text += `\t): Promise<urn_response.General<string>> => {\n`;
	text += `\t\tlet current_token: string | undefined;\n`;
	text += `\t\tif (typeof hook_token === "string" && hook_token !== "") {\n`;
	text += `\t\t\tcurrent_token = hook_token;\n`;
	text += `\t\t}\n`;
	text += `\t\tif (typeof token === "string" && token !== "") {\n`;
	text += `\t\t\tcurrent_token = token;\n`;
	text += `\t\t}\n`;
	text += `\t\treturn await uranio.media.create(current_token).presigned(filename, size, type, current_token);\n`;
	text += `\t},\n`;
	return text;
}

function _generate_trx_schema(){
	urn_log.debug('Generating uranio trx schema...');
	api.util.generate();
	const text = _generate_schema_text();
	_save_schema_declaration_file(text);
	urn_log.debug(`TRX Schema generated.`);
}

function _save_schema_declaration_file(text:string){
	for(const argv of process.argv){
		const splitted = argv.split('=');
		if(
			splitted[0] === 'urn_generate_base_schema'
			&& typeof splitted[1] === 'string'
			&& splitted[1] !== ''
		){
			urn_generate_base_schema = splitted[1];
		}else if(
			splitted[0] === 'urn_generate_output_dir'
			&& typeof splitted[1] === 'string'
			&& splitted[1] !== ''
		){
			urn_generate_output_dir = splitted[1];
		}
	}
	_replace_text(urn_generate_base_schema, urn_generate_output_dir, text);
}

function _generate_schema_text(){
	const atom_book = book.get_all_definitions();
	let txt = '';
	txt += _generate_default_response();
	txt += _generate_custom_response(atom_book);
	txt += _generate_response();
	return txt;
}

function _generate_response(){
	let text = '';
	text += `\texport type Response<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> =\n`;
	text += `\t\tR extends RouteDefaultName ? DefaultResponse<A,R,D> :\n`;
	text += `\t\tCustomResponse<A,R,D>\n`;
	text += `\n`;
	return text;
}

function _generate_custom_response(atom_book:types.Book){
	let text = '';
	text += `\ttype CustomResponse<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> =\n`;
	for(const [atom_name, atom_def] of Object.entries(atom_book)){
		text += `\t\tA extends '${atom_name}' ?\n`;
		if(!atom_def.dock || !atom_def.dock.routes){
			text += `\t\t\tnever :\n`;
		}else{
			const routes = atom_def.dock.routes as types.Book.Definition.Dock.Routes<'superuser'>;
			for(const [route_name, route_def] of Object.entries(routes)){
				text += `\t\t\tR extends '${route_name}' ? ${route_def.return} :\n`;
			}
			text += `\t\t\tnever :\n`;
		}
	}
	text += `\t\t\tnever\n`;
	text += `\n`;
	return text;
}

function _generate_default_response(){
	let text = '';
	text += `\ttype DefaultResponse<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> =\n`;
	// for(const [route_name, route_def] of Object.entries(api.routes.default_routes)){
	//   text += `\tR extends '${route_name}' ? \n`;
	// }
	text += `\t\tR extends 'count' ? urn_response.General<number, any> :\n`;
	text += `\t\tR extends 'find_id' ? urn_response.General<schema.Molecule<A,D>,any> :\n`;
	text += `\t\tR extends 'find' ? urn_response.General<schema.Molecule<A,D>[],any> :\n`;
	text += `\t\tR extends 'find_one' ? urn_response.General<schema.Molecule<A,D>,any> :\n`;
	text += `\t\tR extends 'insert' ? urn_response.General<schema.Molecule<A,D>,any> :\n`;
	text += `\t\tR extends 'update' ? urn_response.General<schema.Molecule<A,D>,any> :\n`;
	text += `\t\tR extends 'delete' ? urn_response.General<schema.Molecule<A,D>,any> :\n`;
	text += `\t\tR extends 'insert_multiple' ? urn_response.General<schema.Molecule<A,D>[],any> :\n`;
	text += `\t\tR extends 'update_multiple' ? urn_response.General<schema.Molecule<A,D>[],any> :\n`;
	text += `\t\tR extends 'delete_multiple' ? urn_response.General<schema.Molecule<A,D>[],any> :\n`;
	text += `\t\t// R extends 'upload' ? urn_response.General<schema.Molecule<A,D>,any> :\n`;
	text += `\t\t// R extends 'presigned' ? urn_response.General<string,any> :\n`;
	text += `\t\tnever;\n`;
	text += `\n`;
	return text;
}

function _replace_text(base_schema_path:string, output_dir_path:string, txt:string){
	const data = fs.readFileSync(base_schema_path, {encoding: 'utf8'});
	const split_text = '\texport {};/** --uranio-generate-end */';
	const data_splitted = data.split(split_text);
	let new_data = '';
	new_data += data_splitted[0];
	new_data += txt; + '\n\n\t';
	new_data += split_text;
	new_data += data_splitted[1];
	fs.writeFileSync(`${output_dir_path}/schema.d.ts`, new_data);
}

