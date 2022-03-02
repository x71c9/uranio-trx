"use strict";
/**
 * Init module
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
exports.init = void 0;
const urn_lib_1 = require("urn-lib");
const urn_exc = urn_lib_1.urn_exception.init('INIT_TRX_MODULE', `TRX init module`);
const uranio_api_1 = __importDefault(require("uranio-api"));
const defaults_1 = require("../conf/defaults");
const register = __importStar(require("../reg/server"));
const atoms_1 = require("../atoms");
const conf = __importStar(require("../conf/server"));
const log = __importStar(require("../log/server"));
// import * as book from '../book/server';
const defaults_2 = require("../raw/defaults");
function init(config) {
    log.init(urn_lib_1.urn_log.defaults);
    // _add_default_routes();
    /**
     * Register required atoms must go before api.init
     * so that api.init can add the routes also to trx required
     * atoms.
     */
    _register_required_atoms();
    uranio_api_1.default.init(config);
    if (typeof config === 'undefined') {
        uranio_api_1.default.conf.set_from_env(defaults_1.trx_config);
    }
    else {
        uranio_api_1.default.conf.set(defaults_1.trx_config, config);
    }
    _set_raw();
    _validate_trx_variables();
    // _validate_trx_book();
    if (config && typeof config.log_level === 'number') {
        urn_lib_1.urn_log.defaults.log_level = config.log_level;
    }
    conf.set_initialize(true);
}
exports.init = init;
// function _add_default_routes(){
//   const core_atom_book = book.get_all_definitions();
//   for(const [atom_name, atom_def] of Object.entries(core_atom_book)){
//     (atom_def.dock as any).routes = api.routes.return_default_routes(atom_name as schema.AtomName);
//   }
// }
function _register_required_atoms() {
    for (const [atom_name, atom_def] of Object.entries(atoms_1.atom_book)) {
        register.atom(atom_def, atom_name);
    }
}
function _set_raw() {
    defaults_2.raw_config.service_url = ``;
    defaults_2.raw_config.service_url += `${defaults_1.trx_config.service_protocol}://`;
    defaults_2.raw_config.service_url += `${defaults_1.trx_config.service_domain}:`;
    defaults_2.raw_config.service_url += `${defaults_1.trx_config.service_port}/uranio/api`;
}
/**
 * NOTE:
 * Maybe this should be before compilation and not at runtime?
 */
// function _validate_trx_book(){
// }
function _validate_trx_variables() {
    const service_domain = defaults_1.trx_config.service_domain;
    const service_port = defaults_1.trx_config.service_port;
    const client_domain = defaults_1.trx_config.client_domain;
    const client_port = defaults_1.trx_config.client_port;
    if (service_domain === client_domain && service_port === client_port) {
        throw urn_exc.create_not_initialized(`INVALID_DOMAINS_AND_PORTS`, `Cannot use same domain and port for server and client.`);
    }
}
//# sourceMappingURL=server.js.map