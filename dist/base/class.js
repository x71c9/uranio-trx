"use strict";
/**
 * Module for Base
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
exports.Base = void 0;
// import {urn_util, urn_log, urn_exception} from 'urn-lib';
const urn_lib_1 = require("urn-lib");
// import {create as create_raw} from '../raw/server';
const class_cln_1 = require("./class_cln");
let Base = class Base {
    constructor(atom_name, token) {
        this.atom_name = atom_name;
        this.token = token;
        this.base = new class_cln_1.Base(atom_name, token);
    }
    hook(route_name) {
        return this.base.hook(route_name);
    }
};
Base = __decorate([
    urn_lib_1.urn_log.util.decorators.debug_constructor,
    urn_lib_1.urn_log.util.decorators.debug_methods
], Base);
exports.Base = Base;
//# sourceMappingURL=class.js.map