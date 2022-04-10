"use strict";
/**
 * Module for Base
 *
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const urn_lib_1 = require("urn-lib");
const class_1 = require("./class");
function create(atom_name, token) {
    urn_lib_1.urn_log.fn_debug(`Create Base [${atom_name}]`);
    return new class_1.Base(atom_name, token);
}
exports.create = create;
//# sourceMappingURL=server.js.map