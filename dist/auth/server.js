"use strict";
/**
 * Module for Auth
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const urn_lib_1 = require("urn-lib");
const urn_exc = urn_lib_1.urn_exception.init(`AUTH_MODULE`, `Auth module.`);
const book = __importStar(require("../book/client"));
const server_1 = require("../raw/server");
let AuthBase = class AuthBase {
    constructor(auth_name) {
        this.auth_name = auth_name;
        _check_auth_name(auth_name);
        this.raw = (0, server_1.create)(undefined, true);
    }
    async authenticate(email, password) {
        const auth_url = _get_auth_url(this.auth_name);
        return await this.raw.post(auth_url, { email, password });
    }
};
AuthBase = __decorate([
    urn_lib_1.urn_log.util.decorators.debug_constructor,
    urn_lib_1.urn_log.util.decorators.debug_methods
], AuthBase);
function _get_auth_url(auth_name) {
    const dock_def = book.get_definition(auth_name).dock;
    if (!dock_def || typeof dock_def.auth_url !== 'string') {
        throw urn_exc.create(`INVALID_AUTH_DEFINITION`, `Invalid auth_def for \`${auth_name}\`. auth_def is missing \`auth\` property.`);
    }
    return dock_def.auth_url;
}
function _check_auth_name(auth_name) {
    if (book.validate_auth_name(auth_name)) {
        return true;
    }
    throw urn_exc.create(`INVALID_AUTH_NAME`, `Invalid AuthName \`${auth_name}\`.`);
}
function create(auth_name) {
    urn_lib_1.urn_log.fn_debug(`Create AuthBase [${auth_name}]`);
    return new AuthBase(auth_name);
}
exports.create = create;
//# sourceMappingURL=server.js.map