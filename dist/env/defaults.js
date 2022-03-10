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
exports.trx_env = void 0;
const uranio_api_1 = __importDefault(require("uranio-api"));
exports.trx_env = {
    ...uranio_api_1.default.env.get_all(),
};
//# sourceMappingURL=defaults.js.map