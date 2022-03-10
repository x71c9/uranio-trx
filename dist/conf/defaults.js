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
const uranio_api_1 = __importDefault(require("uranio-api"));
exports.trx_config = {
    ...uranio_api_1.default.conf.get_all(),
    fetch: 'axios',
    service_url: 'http://localhost:7777/uranio/api',
    dev_service_url: 'http://localhost:7777/uranio/api',
};
//# sourceMappingURL=defaults.js.map