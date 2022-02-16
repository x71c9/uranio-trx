"use strict";
/**
 * Generate module
 *
 * @packageDocumentation
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const fs_1 = __importDefault(require("fs"));
const uranio_api_1 = __importDefault(require("uranio-api"));
// import {urn_util, urn_exception, urn_log} from 'urn-lib';
const urn_lib_1 = require("urn-lib");
// const urn_exc = urn_exception.init(`REGISTER_MODULE`, `Register module.`);
// import {schema} from '../sch/index';
const book = __importStar(require("../book/index"));
// import {default_routes} from '../routes/client';
function generate() {
    urn_lib_1.urn_log.debug('Generating uranio trx schema...');
    uranio_api_1.default.util.generate();
    const atom_book = book.get_all_definitions();
    let txt = '';
    txt += _generate_default_response();
    txt += _generate_custom_response(atom_book);
    txt += _generate_response();
    let output_path = '.';
    let base_schema = './schema/index.d.ts';
    for (const argv of process.argv) {
        const splitted = argv.split('=');
        if (splitted[0] === 'urn_generate_output'
            && typeof splitted[1] === 'string'
            && splitted[1] !== '') {
            output_path = splitted[1];
        }
        else if (splitted[0] === 'urn_generate_base_schema'
            && typeof splitted[1] === 'string'
            && splitted[1] !== '') {
            base_schema = splitted[1];
        }
    }
    // const caller_path = caller();
    _replace_text(base_schema, output_path, txt);
    urn_lib_1.urn_log.debug(`TRX Schema generated.`);
}
exports.generate = generate;
function _generate_response() {
    let text = '';
    text += `\texport type Response<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> =\n`;
    text += `\t\tR extends RouteDefaultName ? DefaultResponse<A,R,D> :\n`;
    text += `\t\tCustomResponse<A,R,D>\n`;
    text += `\n`;
    return text;
}
function _generate_custom_response(atom_book) {
    let text = '';
    text += `\ttype CustomResponse<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> =\n`;
    for (const [atom_name, atom_def] of Object.entries(atom_book)) {
        text += `\t\tA extends '${atom_name}' ?\n`;
        if (!atom_def.dock || !atom_def.dock.routes) {
            text += `\t\t\tnever :\n`;
        }
        else {
            const routes = atom_def.dock.routes;
            for (const [route_name, route_def] of Object.entries(routes)) {
                text += `\t\t\tR extends '${route_name}' ? ${route_def.return} :\n`;
            }
            text += `\t\t\tnever :\n`;
        }
    }
    text += `\t\t\tnever\n`;
    text += `\n`;
    return text;
}
function _generate_default_response() {
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
function _replace_text(base_schema_path, output_path, txt) {
    if (!fs_1.default.existsSync(output_path)) {
        fs_1.default.writeFileSync(output_path, '');
    }
    const data = fs_1.default.readFileSync(base_schema_path, { encoding: 'utf8' });
    const split_text = '\texport {};/** --uranio-generate-end */';
    const data_splitted = data.split(split_text);
    let new_data = '';
    new_data += data_splitted[0];
    new_data += txt;
    +'\n\n\t';
    new_data += split_text;
    new_data += data_splitted[1];
    fs_1.default.writeFileSync(output_path, new_data);
}
//# sourceMappingURL=generate.js.map