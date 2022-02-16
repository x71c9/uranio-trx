"use strict";
/**
 * Module for default configuration object
 *
 * @packageDocumentation
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trx_config = void 0;
// import {api_config} from 'uranio-api/conf/defaults';
const uranio_api_1 = __importDefault(require("uranio-api"));
exports.trx_config = {
    ...uranio_api_1.default.conf.defaults,
    // These are needed because when developing the client
    // ts linter for uranio is pointing on the server
    // so the server conf should have all the client conf as well
    protocol: 'http',
    domain: 'localhost',
    port: 4444,
    client_protocol: 'http',
    client_domain: 'localhost',
    client_port: 4444,
    service_url: 'http://localhost:7777/uranio/api'
};
//# sourceMappingURL=defaults.js.map