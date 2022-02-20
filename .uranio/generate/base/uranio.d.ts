declare module 'uranio-trx/atoms' {
  /**
   * Required TRX books
   *
   * @packageDocumentation
   */
  export const atom_book: {};

}
declare module 'uranio-trx/auth/class' {
  /**
   * Module for Auth
   *
   * @packageDocumentation
   */
  import { urn_response } from 'urn-lib';
  import * as client_types from 'uranio-trx/cln/types';
  import { schema } from 'uranio-trx/sch/index';
  class AuthBase<A extends schema.AuthName> {
      auth_name: A;
      private raw;
      constructor(auth_name: A);
      authenticate(email: string, password: string): Promise<urn_response.General<client_types.Api.AuthResponse>>;
  }
  export type AuthBaseInstance = InstanceType<typeof AuthBase>;
  export function create<A extends schema.AuthName>(auth_name: A): AuthBase<A>;
  export {};

}
declare module 'uranio-trx/auth/index' {
  /**
   * Auth index module
   *
   * @packageDocumentation
   */
  export * from 'uranio-trx/auth/class';

}
declare module 'uranio-trx/base/class' {
  /**
   * Module for Base
   *
   * @packageDocumentation
   */
  import * as client_types from 'uranio-trx/cln/types';
  import { schema } from 'uranio-trx/sch/index';
  import { Hook } from 'uranio-trx/base/types';
  export class Base<A extends schema.AtomName> {
      atom_name: A;
      token?: string | undefined;
      protected raw: client_types.RAW<A>;
      constructor(atom_name: A, token?: string | undefined);
      hook<R extends schema.RouteName<A>, D extends schema.Depth = 0>(route_name: R): (args: Hook.Arguments<A, R, D>) => Promise<client_types.Hook.Response<A, R, D>>;
  }
  export type BaseInstance = InstanceType<typeof Base>;
  export function create<A extends schema.AtomName>(atom_name: A, token?: string): Base<A>;

}
declare module 'uranio-trx/base/index' {
  /**
   * Base index module
   *
   * @packageDocumentation
   */
  export * from 'uranio-trx/base/class';
  export * from 'uranio-trx/base/types';

}
declare module 'uranio-trx/base/types' {
  /**
   * TRX client_types module
   *
   * @packageDocumentation
   */
  import * as client_types from 'uranio-trx/cln/types';
  import { schema } from 'uranio-trx/sch/index';
  export namespace Hook {
      type Arguments<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> = {
          params?: Params<A, R>;
          query?: Query<A, R, D>;
          body?: Body<A, R>;
      };
      type Headers = {
          [k: string]: string;
      };
      type Params<A extends schema.AtomName, R extends schema.RouteName<A>> = client_types.Api.Request.Params<A, R>;
      type Query<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> = client_types.Api.Request.Query<A, R, D>;
      type Body<A extends schema.AtomName, R extends schema.RouteName<A>> = R extends 'insert' ? schema.AtomShape<A> : R extends 'update' ? schema.AtomShape<A> : R extends 'insert_multiple' ? schema.AtomShape<A>[] : R extends 'update_multiple' ? schema.AtomShape<A> : any;
      type Response<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> = schema.Response<A, R, D>;
  }

}
declare module 'uranio-trx/book/_dock/client' {
  /**
   * Module for Client Dock Book Methods
   *
   * @packageDocumentation
   */

}
declare module 'uranio-trx/book/_dock/index' {
  /**
   * Index module for Dock Book methods
   *
   * @packageDocumentation
   */

}
declare module 'uranio-trx/book/_dock/server' {
  /**
   * Module for Server Dock Book Methods
   *
   * @packageDocumentation
   */

}
declare module 'uranio-trx/book/atom/client' {
  /**
   * Module for Client Book Methods
   *
   * @packageDocumentation
   */

}
declare module 'uranio-trx/book/atom/index' {
  /**
   * Index module for Atom Book methods
   *
   * @packageDocumentation
   */

}
declare module 'uranio-trx/book/atom/server' {
  /**
   * Module for Server Atom Book Methods
   *
   * @packageDocumentation
   */

}
declare module 'uranio-trx/book/client' {
  /**
   * Module for Client Book Methods
   *
   * @packageDocumentation
   */
  import { Book } from 'uranio-trx/typ/book_cln';
  import { schema } from 'uranio-trx/sch/index';
  export function get_route_def<A extends schema.AtomName, R extends schema.RouteName<A>>(atom_name: A, route_name: R): Book.Definition.Dock.Routes.Route;
  export function get_routes_definition<A extends schema.AtomName>(atom_name: A): Book.Definition.Dock.Routes;
  export function get_routes_definition_with_defaults(atom_name: schema.AtomName): Book.Definition.Dock.Routes;
  export function get_dock_definition<A extends schema.AtomName>(atom_name: A): Book.Definition.Dock;
  export function get_plural(atom_name: schema.AtomName): string;
  export function validate_name(atom_name: string): atom_name is schema.AtomName;
  export function validate_auth_name(auth_name: string): auth_name is schema.AuthName;
  export function get_all_definitions(): Book;
  export function get_definition<A extends schema.AtomName>(atom_name: A): Book.Definition;
  export function get_property_definition<A extends schema.AtomName>(atom_name: A, property_name: keyof Book.Definition.Properties): Book.Definition.Property;
  export function get_custom_property_definitions<A extends schema.AtomName>(atom_name: A): Book.Definition.Properties;
  export function get_full_properties_definition<A extends schema.AtomName>(atom_name: A): Book.Definition.Properties;
  export function has_property<A extends schema.AtomName>(atom_name: A, key: string): boolean;
  export function get_names(): schema.AtomName[];

}
declare module 'uranio-trx/book/index' {
  /**
   * Index module for Book methods
   *
   * @packageDocumentation
   */
  export * from 'uranio-trx/book/server';

}
declare module 'uranio-trx/book/server' {
  /**
   * Module for Server Atom Book Methods
   *
   * @packageDocumentation
   */
  import { Book } from 'uranio-trx/typ/book_srv';
  import { schema } from 'uranio-trx/sch/index';
  export function get_route_def<A extends schema.AtomName, R extends schema.RouteName<A>>(atom_name: A, route_name: R): Book.Definition.Dock.Routes.Route<A, R>;
  export function get_routes_definition<A extends schema.AtomName>(atom_name: A): Book.Definition.Dock.Routes<A>;
  export function get_routes_definition_with_defaults<A extends schema.AtomName>(atom_name: A): Book.Definition.Dock.Routes<A>;
  export function get_dock_definition<A extends schema.AtomName>(atom_name: A): Book.Definition.Dock<A>;
  export function add_definition<A extends schema.AtomName>(atom_name: A, atom_definition: Book.Definition<A>): Book;
  export function get_names(): schema.AtomName[];
  export function validate_name(atom_name: string): boolean;
  export function get_plural(atom_name: schema.AtomName): string;
  export function get_all_definitions(): Book;
  export function get_definition<A extends schema.AtomName>(atom_name: A): Book.Definition<A>;
  export function get_property_definition<A extends schema.AtomName>(atom_name: A, property_name: keyof Book.Definition.Properties): Book.Definition.Property;
  export function get_custom_property_definitions<A extends schema.AtomName>(atom_name: A): Book.Definition.Properties;
  export function get_full_properties_definition<A extends schema.AtomName>(atom_name: A): Book.Definition.Properties;
  export function has_property<A extends schema.AtomName>(atom_name: A, key: string): boolean;

}
declare module 'uranio-trx/client' {
  /**
   * Index module for URANIO Client
   *
   * @packageDocumentation
   */
  import * as urn_trx_client from 'uranio-trx/cln/main';
  export default urn_trx_client;

}
declare module 'uranio-trx/cln/defaults' {
  /**
   * Module for default client configuration object
   *
   * @packageDocumentation
   */
  import { ClientConfiguration } from 'uranio-trx/cln/types';
  /**
   * IMPORTANT: if new variable are added here they must be added on
   * uranio-trx/conf/client.ts
   *
   * Unfortunately the browser doesn't allow to dynamically access process.env
   * variable, like process.env[var_name] where `var_name` is a variable.
   */
  export const trx_client_config: Required<ClientConfiguration>;

}
declare module 'uranio-trx/cln/main' {
  /**
   * Main module for client
   *
   * @packageDocumentation
   */
  import api from 'uranio-api/client';
  import * as base from 'uranio-trx/base/index';
  import * as auth from 'uranio-trx/auth/index';
  import * as media from 'uranio-trx/media/index';
  import { hooks } from 'uranio-trx/hooks/index';
  import * as book from 'uranio-trx/book/client';
  import * as conf from 'uranio-trx/conf/client';
  import * as types from 'uranio-trx/cln/types';
  import { schema } from 'uranio-trx/sch/index';
  export * from 'uranio-trx/init/client';
  export { api, base, auth, media, hooks, book, conf, schema, types };

}
declare module 'uranio-trx/cln/types' {
  /**
   * Exported type module for client
   *
   * @packageDocumentation
   */
  export * from 'uranio-trx/typ/api';
  export * from 'uranio-trx/typ/book_cln';
  export * from 'uranio-trx/typ/conf_cln';
  export * from 'uranio-trx/raw/types';
  export * from 'uranio-trx/base/types';

}
declare module 'uranio-trx/conf/client' {
  /**
   * Conf module
   *
   * @packageDocumentation
   */
  import { trx_client_config } from 'uranio-trx/cln/defaults';
  import * as types from 'uranio-trx/cln/types';
  export function get<k extends keyof Required<types.ClientConfiguration>>(param_name: k): typeof trx_client_config[k];
  export function is_initialized(): boolean;
  export function set_initialize(is_initialized: boolean): void;
  export function set_from_env(repo_config: Required<types.ClientConfiguration>): void;
  export function set(repo_config: Required<types.ClientConfiguration>, config: types.ClientConfiguration): void;

}
declare module 'uranio-trx/conf/conf' {
  /**
   * Conf module
   *
   * @packageDocumentation
   */
  import { trx_config } from 'uranio-trx/conf/defaults';
  import * as types from 'uranio-trx/types';
  export function get<k extends keyof Required<types.Configuration>>(param_name: k): typeof trx_config[k];
  export function is_initialized(): boolean;
  export function set_initialize(is_initialized: boolean): void;
  export function set_from_env(repo_config: Required<types.Configuration>): void;
  export function set(repo_config: Required<types.Configuration>, config: types.Configuration): void;

}
declare module 'uranio-trx/conf/defaults' {
  /**
   * Module for default configuration object
   *
   * @packageDocumentation
   */
  import { Configuration } from 'uranio-trx/types';
  export const trx_config: Required<Configuration>;

}
declare module 'uranio-trx/conf/index' {
  /**
   * Index module for conf
   *
   * @packageDocumentation
   */
  export * from 'uranio-trx/conf/conf';

}
declare module 'uranio-trx/generate' {
  /**
   * Api generate module
   *
   * @packageDocumentation
   */
  export * from 'uranio-trx/register';

}
declare module 'uranio-trx/hooks/hooks' {
  /**
   * Autogenerated TRX Hooks module from urn-cli
   *
   * @packageDocumentation
   */

}
declare module 'uranio-trx/hooks/index' {
  /**
   * Export module for Hook
   *
   * @packageDocumentation
   */
  import { Hooks } from 'uranio-trx/hooks/types';
  export const hooks: Hooks;

}
declare module 'uranio-trx/hooks/types' {
  /**
   * Export module for Hook
   *
   * @packageDocumentation
   */
  /** --uranio-generate-types-start */
  export type Hooks = {
      set_token: (token: string) => void;
      get_token: () => string | undefined;
  };
  /** --uranio-generate-types-end */

}
declare module 'uranio-trx/index' {
  /**
   * Index module
   *
   * @packageDocumentation
   */
  import * as urn_trx from 'uranio-trx/srv/main';
  export default urn_trx;

}
declare module 'uranio-trx/init/client' {
  /**
   * Init module
   *
   * @packageDocumentation
   */
  import * as types from 'uranio-trx/cln/types';
  export function init(config?: types.ClientConfiguration): void;

}
declare module 'uranio-trx/init/index' {
  /**
   * Index module for init
   *
   * @packageDocumentation
   */
  export * from 'uranio-trx/init/init';

}
declare module 'uranio-trx/init/init' {
  /**
   * Init module
   *
   * @packageDocumentation
   */
  import * as types from 'uranio-trx/types';
  export function init(config?: types.Configuration): void;

}
declare module 'uranio-trx/media/class' {
  /**
   * Module for Media
   *
   * @packageDocumentation
   */
  /// <reference types="node" />
  import { urn_response } from 'urn-lib';
  import { schema } from 'uranio-trx/sch/index';
  import { Base } from 'uranio-trx/base/index';
  class MediaBase extends Base<'media'> {
      token?: string | undefined;
      constructor(token?: string | undefined);
      upload<D extends schema.Depth>(file: Buffer | ArrayBuffer | Blob, token?: string): Promise<urn_response.General<schema.Molecule<'media', D>>>;
      presigned(filename: string, size?: number, type?: string, token?: string): Promise<urn_response.General<string>>;
  }
  export type MediaBaseInstance = InstanceType<typeof MediaBase>;
  export function create(token?: string): MediaBase;
  export {};

}
declare module 'uranio-trx/media/index' {
  /**
   * Media index module
   *
   * @packageDocumentation
   */
  export * from 'uranio-trx/media/class';

}
declare module 'uranio-trx/raw/axios' {
  /**
   * Module for AxiosRaw
   *
   * @packageDocumentation
   */
  import { AxiosInstance } from 'axios';
  import { urn_response } from 'urn-lib';
  import * as client_types from 'uranio-trx/cln/types';
  import { schema } from 'uranio-trx/sch/index';
  import { RAW } from 'uranio-trx/raw/types';
  class AxiosRaw<A extends schema.AtomName> implements RAW<A> {
      private _axios_instance;
      private is_auth;
      private axios_config;
      constructor(_axios_instance: AxiosInstance, is_auth?: boolean);
      get<R extends schema.RouteName<A>, D extends schema.Depth>(url: string, query?: client_types.Hook.Query<A, R, D>, headers?: client_types.Hook.Headers): Promise<urn_response.General<any, any>>;
      post<R extends schema.RouteName<A>, D extends schema.Depth>(url: string, body: any, query?: client_types.Hook.Query<A, R, D>, headers?: client_types.Hook.Headers): Promise<urn_response.General<any, any>>;
      delete<R extends schema.RouteName<A>, D extends schema.Depth>(url: string, query?: client_types.Hook.Query<A, R, D>, headers?: client_types.Hook.Headers): Promise<urn_response.General<any, any>>;
  }
  export type AxiosRawInstance = InstanceType<typeof AxiosRaw>;
  /**
   * A function the will create an AxiosRawInstance.
   */
  export function create(config?: client_types.ClientConfiguration, is_auth?: boolean): AxiosRawInstance;
  export {};

}
declare module 'uranio-trx/raw/defaults' {
  /**
   * Module for default raw config
   *
   * @packageDocumentation
   */
  export const raw_config: {
      service_url: string;
  };

}
declare module 'uranio-trx/raw/index' {
  /**
   * Export module for TRXRaw
   *
   * @packageDocumentation
   */
  export * from 'uranio-trx/raw/types';
  import { create } from 'uranio-trx/raw/axios';
  export { create };

}
declare module 'uranio-trx/raw/types' {
  /**
   * Type module for raw
   *
   * @packageDocumentation
   */
  import { urn_response } from 'urn-lib';
  export type RawName = 'axios';
  import * as cln_types from 'uranio-trx/cln/types';
  import { schema } from 'uranio-trx/sch/index';
  export interface RAW<A extends schema.AtomName> {
      get<R extends schema.RouteName<A>, D extends schema.Depth>(url: string, query?: cln_types.Hook.Query<A, R, D>, headers?: cln_types.Hook.Headers): Promise<urn_response.General<any, any>>;
      post<R extends schema.RouteName<A>, D extends schema.Depth>(url: string, body: any, query?: cln_types.Hook.Query<A, R, D>, headers?: cln_types.Hook.Headers): Promise<urn_response.General<any, any>>;
      delete<R extends schema.RouteName<A>, D extends schema.Depth>(url: string, query?: cln_types.Hook.Query<A, R, D>, headers?: cln_types.Hook.Headers): Promise<urn_response.General<any, any>>;
  }

}
declare module 'uranio-trx/reg/index' {
  /**
   * Index module for register
   *
   * @packageDocumentation
   */
  export * from 'uranio-trx/reg/register';

}
declare module 'uranio-trx/reg/register' {
  /**
   * Register module
   *
   * @packageDocumentation
   */
  import * as types from 'uranio-trx/types';
  import { schema } from 'uranio-trx/sch/index';
  export function register<A extends schema.AtomName>(atom_definition: types.Book.Definition<A>, atom_name?: A): string;

}
declare module 'uranio-trx/register' {
  /**
   * Register module for URANIO Api
   *
   * @packageDocumentation
   */
  export {};

}
declare module 'uranio-trx/run' {
  /**
   * TRX run module
   *
   * @packageDocumentation
   */
  export {};

}
declare module 'uranio-trx/sch/index' {
  /**
   * Index module for Schema
   *
   * @packageDocumentation
   */
  export * from 'uranio-trx/sch/schema';

}
declare module 'uranio-trx/sch/schema' {
  /**
   * Schema types module
   *
   * @packageDocumentation
   */
  import schema from 'uranio-schema';
  export { schema };

}
declare module 'uranio-trx/srv/main' {
  /**
   * Main module for server
   *
   * @packageDocumentation
   */
  import api from 'uranio-api';
  import * as base from 'uranio-trx/base/index';
  import * as auth from 'uranio-trx/auth/index';
  import * as media from 'uranio-trx/media/index';
  import { hooks } from 'uranio-trx/hooks/index';
  import * as book from 'uranio-trx/book/index';
  import * as conf from 'uranio-trx/conf/index';
  import * as types from 'uranio-trx/srv/types';
  import { schema } from 'uranio-trx/sch/index';
  import * as util from 'uranio-trx/util/index';
  export * from 'uranio-trx/init/index';
  export * from 'uranio-trx/reg/index';
  export { api, base, auth, media, hooks, book, conf, util, schema, types, };

}
declare module 'uranio-trx/srv/types' {
  /**
   * Exported type module for server
   *
   * @packageDocumentation
   */
  export * from 'uranio-trx/typ/api';
  export * from 'uranio-trx/typ/book_srv';
  export * from 'uranio-trx/typ/conf';
  export * from 'uranio-trx/raw/types';
  export * from 'uranio-trx/base/types';

}
declare module 'uranio-trx/typ/api' {
  /**
   * Re-export API types module
   *
   * @packageDocumentation
   */
  import api from 'uranio-api';
  import { schema } from 'uranio-trx/sch/index';
  export namespace Api {
      type AuthResponse = api.types.Api.AuthResponse;
      type Request<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> = api.types.Api.Request<A, R, D>;
      namespace Request {
          type File = api.types.Api.Request.File;
          type Paths = api.types.Api.Request.Paths;
          type Headers = api.types.Api.Request.Headers;
          type Params<A extends schema.AtomName, R extends schema.RouteName<A>> = api.types.Api.Request.Params<A, R>;
          type Query<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> = api.types.Api.Request.Query<A, R, D>;
          type Body<A extends schema.AtomName, R extends schema.RouteName<A>> = api.types.Api.Request.Body<A, R>;
      }
  }
  export type RouteParam<A extends schema.AtomName, R extends schema.RouteName<A>> = api.types.RouteParam<A, R>;

}
declare module 'uranio-trx/typ/book_cln' {
  /**
   * Client Book types module
   *
   * This module defines the type of the `atom_book` for the Client.
   *
   * In order to copy and reexport namespaces and types we use the syntax
   * `export import`.
   *
   * `type Book` must be re-defined.
   *
   * @packageDocumentation
   */
  import api_client from 'uranio-api/client';
  import { schema } from 'uranio-trx/sch/index';
  export type Book = {
      [k in schema.AtomName]?: Book.Definition;
  };
  export namespace Book {
      type Definition = api_client.types.Book.Definition;
      namespace Definition {
          /**
           * ** NOTE **
           * For some reason it is not possible to use the following syntax.
           * NuxtJS will fail in the browser.
           * All namespace and types must be re-defined.
           */
          type Property = api_client.types.Book.Definition.Property;
          type Properties = api_client.types.Book.Definition.Properties;
          namespace Property {
              type ID = api_client.types.Book.Definition.Property.ID;
              type Text = api_client.types.Book.Definition.Property.Text;
              type LongText = api_client.types.Book.Definition.Property.LongText;
              type String = api_client.types.Book.Definition.Property.String;
              type Number = api_client.types.Book.Definition.Property.Number;
              type Enum = api_client.types.Book.Definition.Property.Enum;
              type Set = api_client.types.Book.Definition.Property.Set;
              type DayTime = api_client.types.Book.Definition.Property.DayTime;
              type Email = api_client.types.Book.Definition.Property.Email;
              type Integer = api_client.types.Book.Definition.Property.Integer;
              type Float = api_client.types.Book.Definition.Property.Float;
              type Binary = api_client.types.Book.Definition.Property.Binary;
              type Encrypted = api_client.types.Book.Definition.Property.Encrypted;
              type Day = api_client.types.Book.Definition.Property.Day;
              type Time = api_client.types.Book.Definition.Property.Time;
              type EnumString = api_client.types.Book.Definition.Property.EnumString;
              type EnumNumber = api_client.types.Book.Definition.Property.EnumNumber;
              type SetString = api_client.types.Book.Definition.Property.SetNumber;
              type SetNumber = api_client.types.Book.Definition.Property.SetString;
              type Atom = api_client.types.Book.Definition.Property.Atom;
              type AtomArray = api_client.types.Book.Definition.Property.AtomArray;
              namespace Format {
                  type Float = api_client.types.Book.Definition.Property.Format.Float;
              }
              namespace Validation {
                  type String = api_client.types.Book.Definition.Property.Validation.String;
                  type Number = api_client.types.Book.Definition.Property.Validation.Number;
                  type DayTime = api_client.types.Book.Definition.Property.Validation.DayTime;
                  type SetString = api_client.types.Book.Definition.Property.Validation.SetString;
                  type SetNumber = api_client.types.Book.Definition.Property.Validation.SetNumber;
                  type Atom = api_client.types.Book.Definition.Property.Validation.Atom;
              }
          }
          type Dock = api_client.types.Book.Definition.Dock;
          namespace Dock {
              type Routes = api_client.types.Book.Definition.Dock.Routes;
              namespace Routes {
                  type Route = api_client.types.Book.Definition.Dock.Routes.Route;
                  type Params = api_client.types.Book.Definition.Dock.Routes.Params;
              }
          }
      }
  }

}
declare module 'uranio-trx/typ/book_srv' {
  /**
   * Server book type module
   *
   * This module defines the type of the `atom_book` for the Server.
   * It extends the defintion of the Client Book type.
   *
   * In order to copy and reexport namespaces and types we use the syntax
   * `export import`.
   *
   * `type Book` must be re-defined.
   *
   * @packageDocumentation
   */
  import api from 'uranio-api';
  import * as book_cln from 'uranio-trx/typ/book_cln';
  import { schema } from 'uranio-trx/sch/index';
  export type Book = {
      [k in schema.AtomName]?: Book.Definition<k>;
  };
  export namespace Book {
      type Definition<A extends schema.AtomName> = api.types.Book.Definition<A> & {
          bll?: Definition.Bll<A>;
          dock?: Definition.Dock<A>;
      };
      namespace Definition {
          type Bll<A extends schema.AtomName> = api.types.Book.Definition.Bll<A>;
          type Dock<A extends schema.AtomName> = api.types.Book.Definition.Dock<A>;
          namespace Dock {
              type Routes<A extends schema.AtomName> = api.types.Book.Definition.Dock.Routes<A>;
              namespace Routes {
                  type Route<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> = api.types.Book.Definition.Dock.Routes.Route<A, R, D>;
                  namespace Route {
                      type Call<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> = api.types.Book.Definition.Dock.Routes.Route.Call<A, R, D>;
                  }
              }
          }
          type Property = book_cln.Book.Definition.Property;
          type Properties = book_cln.Book.Definition.Properties;
          namespace Property {
              type ID = book_cln.Book.Definition.Property.ID;
              type Text = book_cln.Book.Definition.Property.Text;
              type LongText = book_cln.Book.Definition.Property.LongText;
              type String = book_cln.Book.Definition.Property.String;
              type Number = book_cln.Book.Definition.Property.Number;
              type Enum = book_cln.Book.Definition.Property.Enum;
              type Set = book_cln.Book.Definition.Property.Set;
              type DayTime = book_cln.Book.Definition.Property.DayTime;
              type Email = book_cln.Book.Definition.Property.Email;
              type Integer = book_cln.Book.Definition.Property.Integer;
              type Float = book_cln.Book.Definition.Property.Float;
              type Binary = book_cln.Book.Definition.Property.Binary;
              type Encrypted = book_cln.Book.Definition.Property.Encrypted;
              type Day = book_cln.Book.Definition.Property.Day;
              type Time = book_cln.Book.Definition.Property.Time;
              type EnumString = book_cln.Book.Definition.Property.EnumString;
              type EnumNumber = book_cln.Book.Definition.Property.EnumNumber;
              type SetString = book_cln.Book.Definition.Property.SetNumber;
              type SetNumber = book_cln.Book.Definition.Property.SetString;
              type Atom = book_cln.Book.Definition.Property.Atom;
              type AtomArray = book_cln.Book.Definition.Property.AtomArray;
              namespace Format {
                  type Float = book_cln.Book.Definition.Property.Format.Float;
              }
              namespace Validation {
                  type String = book_cln.Book.Definition.Property.Validation.String;
                  type Number = book_cln.Book.Definition.Property.Validation.Number;
                  type DayTime = book_cln.Book.Definition.Property.Validation.DayTime;
                  type SetString = book_cln.Book.Definition.Property.Validation.SetString;
                  type SetNumber = book_cln.Book.Definition.Property.Validation.SetNumber;
                  type Atom = book_cln.Book.Definition.Property.Validation.Atom;
              }
          }
          type Security = api.types.Book.Definition.Security;
      }
  }

}
declare module 'uranio-trx/typ/conf' {
  /**
   * Conf type module
   *
   * @packageDocumentation
   */
  import api from 'uranio-api';
  type RequiredConfigParams = {};
  type OptionalConfigParam = {
      protocol: string;
      domain: string;
      port: number;
      client_protocol: string;
      client_domain: string;
      client_port: number;
      service_url: string;
  };
  export type Configuration = api.types.Configuration & RequiredConfigParams & Partial<OptionalConfigParam>;
  export {};

}
declare module 'uranio-trx/typ/conf_cln' {
  /**
   * Client Conf type module
   *
   * @packageDocumentation
   */
  import { RawName } from 'uranio-trx/raw/types';
  type RequiredClientConfigParams = {
      fetch: RawName;
      protocol: string;
      domain: string;
      port: number;
      service_url: string;
  };
  type OptionalClientConfigParam = {};
  export type ClientConfiguration = RequiredClientConfigParams & Partial<OptionalClientConfigParam>;
  export {};

}
declare module 'uranio-trx/types' {
  /**
   * Main types module
   *
   * @packageDocumentation
   */
  export * from 'uranio-trx/srv/types';

}
declare module 'uranio-trx/util/generate' {
  /**
   * Generate module
   *
   * @packageDocumentation
   */
  export const process_params: {
      urn_command: string;
      urn_base_schema: string;
      urn_base_types: string;
      urn_output_dir: string;
      urn_repo: string;
  };
  export function schema(): string;
  export function schema_and_save(): void;
  export function save_schema(text: string): void;
  export function hooks(): string;
  export function hooks_and_save(): void;
  export function save_hooks(text: string): void;
  export function types(): string;
  export function types_and_save(): void;
  export function save_types(text: string): void;

}
declare module 'uranio-trx/util/index' {
  /**
   * Index module for utils
   *
   * @packageDocumentation
   */
  import * as generate from 'uranio-trx/util/generate';
  export { generate };

}
declare module 'uranio-trx' {
  import main = require('uranio-trx/index');
  export = main;
}