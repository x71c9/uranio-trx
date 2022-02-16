/**
 * Register module
 *
 * @packageDocumentation
 */

// import {urn_response} from 'urn-lib';

// import path from 'path';

// import caller from 'caller';

// import {urn_log} from 'urn-lib';

// import core from 'uranio-core';
import api from 'uranio-api';

// import * as book from '../book/index';

// import {hooks} from '../hooks/index';

import * as types from '../types';

import {schema} from '../sch/index';

// import {create as auth_create} from '../auth/index';

// import {create as media_create} from '../media/index';

// import {create as base_create} from '../base/index';

export function register<A extends schema.AtomName>(
	atom_definition:types.Book.Definition<A>,
	atom_name?:A
):string{
	const final_atom_name = api.register(atom_definition, atom_name);
	// _add_hooks<A>(atom_definition, final_atom_name as A);
	return final_atom_name;
}

// function _add_hooks<A extends schema.AtomName>(
//   atom_def:types.Book.Definition<A>,
//   atom_name:A
// ):void{
//   const plural = (typeof atom_def.plural === 'string' && atom_def.plural !== '') ?
//     atom_def.plural : `${atom_name}s`;
//   const atom_hook = {} as any;
//   atom_hook[plural] = {};
	
//   const dock_def_with_all_routes = book.get_routes_definition_with_defaults(atom_name);
	
//   for(const [route_name, route_def] of Object.entries(dock_def_with_all_routes)){
		
//     atom_hook[plural][route_name] = async (
//       id:string,
//       id2:string,
//       ids:string[],
//       body:types.Hook.Body<any,any>,
//       options?:types.Hook.Arguments<any,any>,
//       token?:string
//     ) => {
//       const args = {
//         params: {
//           id: id,
//           id2: id2,
//           ids: ids.join(',')
//         },
//         body: body,
//         ...options
//       };
//       let current_token:string|undefined;
//       const hook_token = hooks.get_token();
//       if(typeof hook_token === 'string' && hook_token !== ''){
//         current_token = hook_token;
//       }
//       if(typeof token === 'string' && token !== ''){
//         current_token = token;
//       }
//       return await base_create(atom_name, current_token)
//         .hook(route_name as schema.RouteName<A>)(args);
//     };
		
//   }
	
//   // Authenticate
//   if(api.core.atom.util.is_auth_atom_name(atom_name as schema.AuthName)){
//     atom_hook[plural]['authenticate'] = async (email:string, password:string) => {
//       return auth_create(atom_name as schema.AuthName).authenticate(email, password);
//     };
//   }
	
//   // Media
//   if(atom_name === 'media'){
//     atom_hook[plural]['upload'] = async<D extends schema.Depth>(
//       file: Buffer | ArrayBuffer | Blob,
//       token?:string
//     ):Promise<urn_response.General<schema.Atom<'media'>>> => {
//       let current_token: string | undefined;
//       const hook_token = hooks.get_token();
//       if (typeof hook_token === "string" && hook_token !== "") {
//         current_token = hook_token;
//       }
//       if (typeof token === "string" && token !== "") {
//         current_token = token;
//       }
//       return await media_create(current_token).upload<D>(file, current_token);
//     };
//     atom_hook[plural]['presigned'] = async(
//       filename: string,
//       size?: number,
//       type?: string,
//       token?: string
//     ): Promise<urn_response.General<string>> => {
//       let current_token: string | undefined;
//       const hook_token = hooks.get_token();
//       if (typeof hook_token === "string" && hook_token !== "") {
//         current_token = hook_token;
//       }
//       if (typeof token === "string" && token !== "") {
//         current_token = token;
//       }
//       return await media_create(current_token).presigned(filename, size, type, current_token);
//     };
//   }
	
// }


