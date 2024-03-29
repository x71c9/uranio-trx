"use strict";
/**
 * Client Conf module
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_service_url = exports.set_service_url = exports.get_all = exports.set = exports.get = void 0;
const uranio_utils_1 = require("uranio-utils");
const default_conf_1 = require("../cln/default_conf");
const env = __importStar(require("../env/client"));
const urn_ctx = uranio_utils_1.urn_context.create(default_conf_1.trx_client_config, env.is_production(), 'TRX:CONF:CLIENT');
let service_url = _build_service_url();
function get(param_name) {
    return urn_ctx.get(param_name);
}
exports.get = get;
function set(config) {
    urn_ctx.set(config);
    set_service_url(_build_service_url());
}
exports.set = set;
function get_all() {
    return urn_ctx.get_all();
}
exports.get_all = get_all;
function set_service_url(url) {
    service_url = url;
}
exports.set_service_url = set_service_url;
function get_service_url() {
    return service_url;
}
exports.get_service_url = get_service_url;
function _build_service_url() {
    const prefix = get(`prefix_api`);
    const service_proxy = get(`service_proxy`);
    if (typeof service_proxy === 'string' && service_proxy) {
        return (service_proxy + prefix)
            .replace(/([^:]\/)\/+/g, "$1"); // remove double slash
    }
    const protocol = get(`service_protocol`);
    const domain = get(`service_domain`);
    const port = get(`service_port`);
    return `${protocol}://${domain}:${port}${prefix}`
        .replace(/([^:]\/)\/+/g, "$1"); // remove double slash
}
// export function get_service_url(repo_ctx?:ReturnType<typeof urn_context.create>):string{
// 	const prefix = get(`prefix_api`);
// 	// If the configuraion cotains `panel_protocol`
// 	// it means the repo is uranio-adm, therefore the service url
// 	// is proxied by the panel
// 	const ctx = (typeof repo_ctx !== 'undefined') ? repo_ctx : urn_ctx;
// 	if(typeof ctx.get_any(`panel_protocol`) === 'string'){
// 		const panel_protocol = ctx.get_any(`panel_protocol`);
// 		const panel_domain = ctx.get_any(`panel_domain`);
// 		const panel_port = ctx.get_any(`panel_port`);
// 		return `${panel_protocol}://${panel_domain}:${panel_port}${prefix}`;
// 	}
// 	const protocol = get(`service_protocol`);
// 	const domain = get(`service_domain`);
// 	const port = get(`service_port`);
// 	return `${protocol}://${domain}:${port}${prefix}`;
// }
//# sourceMappingURL=client.js.map