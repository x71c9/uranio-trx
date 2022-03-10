"use strict";
/**
 * Init module
 *
 * @packageDocumentation
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.init = void 0;
const urn_lib_1 = require("urn-lib");
const uranio_api_1 = __importDefault(require("uranio-api"));
const register = __importStar(require("../reg/server"));
const required = __importStar(require("../req/server"));
const conf = __importStar(require("../conf/server"));
const log = __importStar(require("../log/server"));
// import {raw_config} from '../raw/defaults';
function init(config, register_required = true) {
    uranio_api_1.default.init(config, false);
    if (config) {
        conf.set(config);
    }
    if (register_required) {
        _register_required_atoms();
    }
    // _set_raw();
    _validate_trx_variables();
    _validate_trx_book();
    log.init(urn_lib_1.urn_log);
    urn_lib_1.urn_log.debug(`Uranio trx initialization completed.`);
}
exports.init = init;
// function _add_default_routes(){
//   const core_atom_book = book.get_all_definitions();
//   for(const [atom_name, atom_def] of Object.entries(core_atom_book)){
//     (atom_def.dock as any).routes = api.routes.return_default_routes(atom_name as schema.AtomName);
//   }
// }
function _register_required_atoms() {
    const required_atoms = required.get();
    for (const [atom_name, atom_def] of Object.entries(required_atoms)) {
        register.atom(atom_def, atom_name);
    }
}
// function _set_raw(){
//   raw_config.service_url = ``;
//   raw_config.service_url += `${trx_config.service_protocol}://`;
//   raw_config.service_url += `${trx_config.service_domain}:`;
//   raw_config.service_url += `${trx_config.service_port}/uranio/api`;
// }
/**
 * NOTE:
 * Maybe this should be before compilation and not at runtime?
 */
function _validate_trx_book() {
    // NOTHING TO DO YET
}
function _validate_trx_variables() {
    // const service_domain = trx_config.service_domain;
    // const service_port = trx_config.service_port;
    // const client_domain = trx_config.client_domain;
    // const client_port = trx_config.client_port;
    // if(service_domain === client_domain && service_port === client_port){
    //   throw urn_exc.create_not_initialized(
    //     `INVALID_DOMAINS_AND_PORTS`,
    //     `Cannot use same domain and port for server and client.`
    //   );
    // }
}
//# sourceMappingURL=server.js.map