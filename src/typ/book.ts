/**
 * Server book type module
 *
 * This module defines the type of the `atom_book` for the Server.
 * It extends the defintion of the Client Book type.
 *
 * `type Book` must be re-defined.
 *
 * @packageDocumentation
 */

import api from 'uranio-api';

import * as book_cln from './book_cln';

import {schema} from '../sch/server';

export type Book = {
	[k in schema.AtomName]?: Book.Definition<k>;
}

export namespace Book {
	
	export type Definition<A extends schema.AtomName> =
		api.types.Book.Definition<A> & {
			bll?: Definition.Bll<A>,
			dock?: Definition.Dock<A>
		}
	
	export namespace Definition {
		
		export type Bll<A extends schema.AtomName> =
			api.types.Book.Definition.Bll<A>;
		
		export type Dock<A extends schema.AtomName> =
			api.types.Book.Definition.Dock<A>
		
		export namespace Dock {
			
			export type Routes<A extends schema.AtomName> =
				api.types.Book.Definition.Dock.Routes<A>
			
			export namespace Routes {
				
				export type Route<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> =
					api.types.Book.Definition.Dock.Routes.Route<A,R,D>
				
				export namespace Route {
					export type Call<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> =
						api.types.Book.Definition.Dock.Routes.Route.Call<A,R,D>
				}
				
			}
		}
		
		
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		// export import Properties = api.types.Book.Definition.Properties;
		
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		// export import Property = api.types.Book.Definition.Property;
		
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		// export import Security = api.types.Book.Definition.Security;
		
		export type Property = book_cln.Book.Definition.Property;
		
		export type Properties = book_cln.Book.Definition.Properties;
		
		export namespace Property {
			export type ID = book_cln.Book.Definition.Property.ID;
			export type Text = book_cln.Book.Definition.Property.Text;
			export type LongText = book_cln.Book.Definition.Property.LongText;
			export type String = book_cln.Book.Definition.Property.String;
			export type Number = book_cln.Book.Definition.Property.Number;
			export type Enum = book_cln.Book.Definition.Property.Enum;
			export type Set = book_cln.Book.Definition.Property.Set;
			export type DayTime = book_cln.Book.Definition.Property.DayTime;
			export type Email = book_cln.Book.Definition.Property.Email;
			export type Integer = book_cln.Book.Definition.Property.Integer;
			export type Float = book_cln.Book.Definition.Property.Float;
			export type Binary = book_cln.Book.Definition.Property.Binary;
			export type Encrypted = book_cln.Book.Definition.Property.Encrypted;
			export type Day = book_cln.Book.Definition.Property.Day;
			export type Time = book_cln.Book.Definition.Property.Time;
			export type EnumString = book_cln.Book.Definition.Property.EnumString;
			export type EnumNumber = book_cln.Book.Definition.Property.EnumNumber;
			export type SetString = book_cln.Book.Definition.Property.SetNumber;
			export type SetNumber = book_cln.Book.Definition.Property.SetString;
			export type Atom = book_cln.Book.Definition.Property.Atom;
			export type AtomArray = book_cln.Book.Definition.Property.AtomArray;
			export namespace Format {
				export type Float = book_cln.Book.Definition.Property.Format.Float;
			}
			export namespace Validation {
				export type String = book_cln.Book.Definition.Property.Validation.String;
				export type Number = book_cln.Book.Definition.Property.Validation.Number;
				export type DayTime = book_cln.Book.Definition.Property.Validation.DayTime;
				export type SetString = book_cln.Book.Definition.Property.Validation.SetString;
				export type SetNumber = book_cln.Book.Definition.Property.Validation.SetNumber;
				export type Atom = book_cln.Book.Definition.Property.Validation.Atom;
			}
		}
		
		export type Security = api.types.Book.Definition.Security;
		
	}
	
}
