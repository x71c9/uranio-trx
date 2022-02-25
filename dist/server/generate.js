"use strict";
/**
 * TRX generate module
 *
 * @packageDocumentation
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const urn_lib_1 = require("urn-lib");
urn_lib_1.urn_log.init({
    log_level: urn_lib_1.urn_log.LogLevel.FUNCTION_DEBUG,
    debug_info: false
});
const server_1 = __importDefault(require("../server"));
server_1.default.init();
const util = __importStar(require("../util/server"));
let urn_command = 'all';
for (const argv of process.argv) {
    const splitted = argv.split('=');
    if (splitted[0] === 'urn_command'
        && typeof splitted[1] === 'string'
        && splitted[1] !== '') {
        urn_command = splitted[1];
    }
}
switch (urn_command) {
    case 'schema': {
        util.generate.schema_and_save();
        break;
    }
    case 'hooks': {
        util.generate.hooks_and_save('trx');
        break;
    }
    case 'hook-types': {
        util.generate.hook_types_and_save();
        break;
    }
    default: {
        util.generate.schema_and_save();
        util.generate.hooks_and_save('trx');
        util.generate.hook_types_and_save();
        break;
    }
}
//# sourceMappingURL=generate.js.map