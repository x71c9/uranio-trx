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
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const defaults_1 = require("../cln/defaults");
const conf = __importStar(require("../conf/client"));
const defaults_2 = require("../raw/defaults");
function init(config) {
    if (!config) {
        conf.set_from_env(defaults_1.trx_client_config);
    }
    else {
        conf.set(defaults_1.trx_client_config, config);
    }
    _set_raw();
    _validate_trx_client_variables();
    _validate_trx_client_book();
    conf.set_initialize(true);
}
exports.init = init;
function _set_raw() {
    defaults_2.raw_config.service_url = ``;
    defaults_2.raw_config.service_url += `${defaults_1.trx_client_config.protocol}://`;
    defaults_2.raw_config.service_url += `${defaults_1.trx_client_config.domain}:`;
    defaults_2.raw_config.service_url += `${defaults_1.trx_client_config.port}/uranio/api`;
}
/**
 * NOTE:
 * Maybe this should be before compilation and not at runtime?
 */
function _validate_trx_client_book() {
    // example function
    // _validate_dock_url_uniqueness();
    // _validate_dock_route_url_uniqueness();
    // _validate_route_name();
}
/**
 * NOTE:
 * Maybe there is no need for this, it is already valid?
 * It depends if the client books have different properties of the server one.
 */
function _validate_trx_client_variables() {
    // example function
}
//# sourceMappingURL=client.js.map