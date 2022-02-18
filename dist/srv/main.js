"use strict";
/**
 * Main module for server
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.types = exports.schema = exports.util = exports.conf = exports.book = exports.hooks = exports.media = exports.auth = exports.base = exports.api = void 0;
// import core from 'uranio-core';
const uranio_api_1 = __importDefault(require("uranio-api"));
exports.api = uranio_api_1.default;
const base = __importStar(require("../base/index"));
exports.base = base;
const auth = __importStar(require("../auth/index"));
exports.auth = auth;
const media = __importStar(require("../media/index"));
exports.media = media;
const index_1 = require("../hooks/index");
Object.defineProperty(exports, "hooks", { enumerable: true, get: function () { return index_1.hooks; } });
// import * as hooks from '../hooks/index';
const book = __importStar(require("../book/index"));
exports.book = book;
const conf = __importStar(require("../conf/index"));
exports.conf = conf;
const types = __importStar(require("./types"));
exports.types = types;
const index_2 = require("../sch/index");
Object.defineProperty(exports, "schema", { enumerable: true, get: function () { return index_2.schema; } });
const util = __importStar(require("../util/index"));
exports.util = util;
/*
 * First level methods.
 * If other methods are added, urn-cli must be updated.
 * Go to urn-cli/src/cmd/transpose.ts and
 * add the new method names.
 */
__exportStar(require("../init/index"), exports);
__exportStar(require("../reg/index"), exports);
//# sourceMappingURL=main.js.map