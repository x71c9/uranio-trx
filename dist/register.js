"use strict";
/**
 * Register module for URANIO Api
 *
 * @packageDocumentation
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uranio_api_1 = __importDefault(require("uranio-api"));
const atoms_1 = require("./atoms");
for (const [atom_name, atom_def] of Object.entries(atoms_1.atom_book)) {
    uranio_api_1.default.register(atom_def, atom_name);
}
//# sourceMappingURL=register.js.map