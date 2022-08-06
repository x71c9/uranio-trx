"use strict";
/**
 * Module for Base
 *
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const urn_lib_1 = require("urn-lib");
const class_cln_1 = require("./class_cln");
function create(atom_name, token) {
    urn_lib_1.urn_log.trace(`Create Base [${atom_name}]`);
    return new class_cln_1.Base(atom_name, token);
}
exports.create = create;
//# sourceMappingURL=client.js.map