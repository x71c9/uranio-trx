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
import { schema } from '../sch/index';
export declare type Book = {
    [k in schema.AtomName]?: Book.Definition;
};
export declare namespace Book {
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
