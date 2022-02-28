/**
 * Client Book types module
 *
 * This module defines the type of the `atom_book` for the Client.
 *
 * `type Book` must be re-defined.
 *
 * @packageDocumentation
 */

import api_client from 'uranio-api/client';

// import {schema} from '../sch/client';

export type Book = {
	[k:string]: Book.Definition
}

export namespace Book {
	
	export type Definition =
		api_client.types.Book.Definition
	
	export namespace Definition {
		
		export type Dock =
			api_client.types.Book.Definition.Dock
		
		export namespace Dock {
			
			export type Routes =
				api_client.types.Book.Definition.Dock.Routes
			
			export namespace Routes {
				
				export type Route =
					api_client.types.Book.Definition.Dock.Routes.Route
				
				export type Params =
					api_client.types.Book.Definition.Dock.Routes.Params
				
			}
			
		}
		
		/**
		 * ** NOTE **
		 * For some reason it is not possible to use the following syntax.
		 * NuxtJS will fail in the browser.
		 * All namespace and types must be re-defined.
		 */
		
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		// export import Properties = api_client.types.Book.Definition.Properties;
		
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		// export import Property = api_client.types.Book.Definition.Property;
		
		export type Property = api_client.types.Book.Definition.Property;
		
		export type Properties = api_client.types.Book.Definition.Properties;
		
		export namespace Property {
			export type ID = api_client.types.Book.Definition.Property.ID;
			export type Text = api_client.types.Book.Definition.Property.Text;
			export type LongText = api_client.types.Book.Definition.Property.LongText;
			export type String = api_client.types.Book.Definition.Property.String;
			export type Number = api_client.types.Book.Definition.Property.Number;
			export type Enum = api_client.types.Book.Definition.Property.Enum;
			export type Set = api_client.types.Book.Definition.Property.Set;
			export type DayTime = api_client.types.Book.Definition.Property.DayTime;
			export type Email = api_client.types.Book.Definition.Property.Email;
			export type Integer = api_client.types.Book.Definition.Property.Integer;
			export type Float = api_client.types.Book.Definition.Property.Float;
			export type Binary = api_client.types.Book.Definition.Property.Binary;
			export type Encrypted = api_client.types.Book.Definition.Property.Encrypted;
			export type Day = api_client.types.Book.Definition.Property.Day;
			export type Time = api_client.types.Book.Definition.Property.Time;
			export type EnumString = api_client.types.Book.Definition.Property.EnumString;
			export type EnumNumber = api_client.types.Book.Definition.Property.EnumNumber;
			export type SetString = api_client.types.Book.Definition.Property.SetNumber;
			export type SetNumber = api_client.types.Book.Definition.Property.SetString;
			export type Atom = api_client.types.Book.Definition.Property.Atom;
			export type AtomArray = api_client.types.Book.Definition.Property.AtomArray;
			export namespace Format {
				export type Float = api_client.types.Book.Definition.Property.Format.Float;
			}
			export namespace Validation {
				export type String = api_client.types.Book.Definition.Property.Validation.String;
				export type Number = api_client.types.Book.Definition.Property.Validation.Number;
				export type DayTime = api_client.types.Book.Definition.Property.Validation.DayTime;
				export type SetString = api_client.types.Book.Definition.Property.Validation.SetString;
				export type SetNumber = api_client.types.Book.Definition.Property.Validation.SetNumber;
				export type Atom = api_client.types.Book.Definition.Property.Validation.Atom;
			}
		}
		
	}
}
