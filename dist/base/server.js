"use strict";
/**
 * Module for Base
 *
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const uranio_utils_1 = require("uranio-utils");
const class_1 = require("./class");
function create(atom_name, token) {
    uranio_utils_1.urn_log.trace(`Create Base [${atom_name}]`);
    return new class_1.Base(atom_name, token);
}
exports.create = create;
//# sourceMappingURL=server.js.map