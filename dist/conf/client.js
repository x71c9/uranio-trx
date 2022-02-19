"use strict";
/**
 * Conf module
 *
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = exports.set_from_env = exports.set_initialize = exports.is_initialized = exports.get = void 0;
const urn_lib_1 = require("urn-lib");
const urn_exc = urn_lib_1.urn_exception.init('CONF_TRX_CLIENT_MODULE', `TRX client configuration module`);
const defaults_1 = require("../cln/defaults");
let _is_client_trx_initialized = false;
function get(param_name) {
    _check_if_uranio_was_initialized();
    _check_if_param_exists(param_name);
    return defaults_1.trx_client_config[param_name];
}
exports.get = get;
function is_initialized() {
    return _is_client_trx_initialized;
}
exports.is_initialized = is_initialized;
function set_initialize(is_initialized) {
    _is_client_trx_initialized = is_initialized;
}
exports.set_initialize = set_initialize;
function set_from_env(repo_config) {
    const config = _get_env_vars(repo_config);
    set(repo_config, config);
}
exports.set_from_env = set_from_env;
function set(repo_config, config) {
    _validate_config_types(repo_config, config);
    Object.assign(repo_config, config);
}
exports.set = set;
function _check_if_param_exists(param_name) {
    return urn_lib_1.urn_util.object.has_key(defaults_1.trx_client_config, param_name);
}
function _check_if_uranio_was_initialized() {
    if (is_initialized() === false) {
        throw urn_exc.create_not_initialized(`NOT_INITIALIZED`, `Uranio was not initialized. Please run \`uranio.init()\` in your main file.`);
    }
}
function _validate_config_types(repo_config, config) {
    for (const [config_key, config_value] of Object.entries(config)) {
        const key = config_key;
        if (typeof config_value !== typeof repo_config[key]) {
            throw urn_exc.create_not_initialized(`INVALID_CLIENT_CONFIG_VALUE`, `Invalid client config value for \`${config_key}\`. \`${config_key}\` value ` +
                ` must be of type \`${typeof repo_config[key]}\`,` +
                `\`${typeof config_value}\` given.`);
        }
    }
}
function _get_env_vars(repo_config) {
    if (typeof process.env.URN_CLIENT_FETCH === 'string' && process.env.URN_CLIENT_FETCH !== '') {
        repo_config.fetch = process.env.URN_CLIENT_FETCH;
    }
    if (typeof process.env.URN_CLIENT_PROTOCOL === 'string' && process.env.URN_CLIENT_PROTOCOL !== '') {
        repo_config.protocol = process.env.URN_CLIENT_PROTOCOL;
    }
    if (typeof process.env.URN_CLIENT_DOMAIN === 'string' && process.env.URN_CLIENT_DOMAIN !== '') {
        repo_config.domain = process.env.URN_CLIENT_DOMAIN;
    }
    if (typeof process.env.URN_CLIENT_PORT === 'number' || typeof process.env.URN_CLIENT_PORT === 'string' && process.env.URN_CLIENT_PORT !== '') {
        repo_config.port = Number(process.env.URN_CLIENT_PORT);
    }
    if (typeof process.env.URN_CLIENT_SERVICE_URL === 'string' && process.env.URN_CLIENT_SERVICE_URL !== '') {
        repo_config.service_url = process.env.URN_CLIENT_SERVICE_URL;
    }
    if (typeof process.env.URN_LOG_LEVEL === 'number' || typeof process.env.URN_LOG_LEVEL === 'string' && process.env.URN_LOG_LEVEL !== '') {
        repo_config.log_level = Number(process.env.URN_LOG_LEVEL);
    }
    return repo_config;
}
// function _get_env_vars(repo_config:types.ClientConfiguration):types.ClientConfiguration{
//   const config:types.ClientConfiguration = {} as types.ClientConfiguration;
//   for(const [conf_key, conf_value] of Object.entries(repo_config)){
//     const env_var_name = `URN_CLIENT_${conf_key.toUpperCase()}`;
//     switch(typeof conf_value){
//       case 'number':{
//         if(
//           typeof process.env[env_var_name] === 'number'
//           || typeof process.env[env_var_name] === 'string'
//           && process.env[env_var_name] !== ''
//         ){
//           (config as any)[conf_key] = Number(process.env[env_var_name]);
//         }
//         break;
//       }
//       case 'boolean':{
//         if(
//           typeof process.env[env_var_name] === 'boolean'
//           || typeof process.env[env_var_name] === 'string'
//           && process.env[env_var_name] !== ''
//         ){
//           (config as any)[conf_key] =
//             (process.env[env_var_name] === 'true') || (process.env[env_var_name] as any === true);
//         }
//         break;
//       }
//       case 'string':{
//         console.log('typeof', typeof process.env[env_var_name]);
//         console.log('value', process.env[env_var_name]);
//         if(
//           typeof process.env[env_var_name] === 'string'
//           && process.env[env_var_name] !== ''
//         ){
//           (config as any)[conf_key] = process.env[env_var_name];
//         }
//         break;
//       }
//     }
//   }
//   return config;
// }
//# sourceMappingURL=client.js.map