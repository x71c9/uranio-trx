"use strict";
/**
 * Module for default client configuration object
 *
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.trx_client_config = void 0;
/**
 * IMPORTANT: if new variable are added here they must be added on
 * uranio-trx/conf/client.ts
 *
 * Unfortunately the browser doesn't allow to dynamically access process.env
 * variable, like process.env[var_name] where `var_name` is a variable.
 */
exports.trx_client_config = {
    fetch: 'axios',
    protocol: 'http',
    domain: 'localhost',
    port: 4444,
    service_url: 'http://localhost:7777/uranio/api'
};
//# sourceMappingURL=defaults.js.map