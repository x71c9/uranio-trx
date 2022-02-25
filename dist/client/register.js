"use strict";
/**
 * Register module for URANIO Api
 *
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
const atoms_1 = require("../atoms");
for (const [atom_name, atom_def] of Object.entries(atoms_1.atom_book)) {
    register(atom_def, atom_name);
}
//# sourceMappingURL=register.js.map