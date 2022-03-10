"use strict";
/**
 * Module for default client configuration object
 *
 * @packageDocumentation
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trx_client_config = void 0;
// import {urn_log} from 'urn-lib';
const client_1 = __importDefault(require("uranio-api/client"));
/**
 * IMPORTANT: if new variable are added here they must be added on
 * uranio-trx/conf/client.ts
 *
 * Unfortunately the browser doesn't allow to dynamically access process.env
 * variable, like process.env[var_name] where `var_name` is a variable.
 */
exports.trx_client_config = {
    ...client_1.default.conf.get_all(),
    fetch: 'axios',
    service_url: 'http://localhost:7777/uranio/api',
    dev_service_url: 'http://localhost:7777/uranio/api'
};
//# sourceMappingURL=default_conf.js.map