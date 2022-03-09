"use strict";
/**
 * Module for Media
 *
 * @packageDocumentation
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const urn_lib_1 = require("urn-lib");
const class_cln_1 = require("../base/class_cln");
let MediaBase = class MediaBase extends class_cln_1.Base {
    constructor(token) {
        super('media', token);
        this.token = token;
    }
    async upload(file, token) {
        const headers = {};
        if (typeof this.token === 'string') {
            headers['urn-auth-token'] = this.token;
        }
        if (typeof token === 'string') {
            headers['urn-auth-token'] = token;
        }
        const url = `/media/upload`;
        return await this.raw.post(url, file, undefined, headers);
    }
    async presigned(filename, size, type, token) {
        const headers = {};
        if (typeof this.token === 'string') {
            headers['urn-auth-token'] = this.token;
        }
        if (typeof token === 'string') {
            headers['urn-auth-token'] = token;
        }
        const query = {
            filename: filename,
        };
        if (typeof size === 'number') {
            query.size = size;
        }
        if (typeof type === 'string' && type !== '') {
            query.type = type;
        }
        const url = `/media/presigned`;
        return await this.raw.get(url, query, headers);
    }
};
MediaBase = __decorate([
    urn_lib_1.urn_log.util.decorators.debug_constructor,
    urn_lib_1.urn_log.util.decorators.debug_methods
], MediaBase);
function create(token) {
    urn_lib_1.urn_log.fn_debug(`Create MediaBase`);
    return new MediaBase(token);
}
exports.create = create;
//# sourceMappingURL=class_cln.js.map