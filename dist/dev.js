"use strict";
/**
 * TRX run module
 *
 * @packageDocumentation
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const urn_lib_1 = require("urn-lib");
urn_lib_1.urn_log.init({
    log_level: urn_lib_1.urn_log.LogLevel.FUNCTION_DEBUG,
    color: true,
    debug_info: false,
    prefix_type: false
});
const server_1 = __importDefault(require("./server"));
server_1.default.init();
// const service = uranio.api.service.create();
// service.listen(() => {
//   const reqs = uranio.base.create('request');
//   reqs.hook('count')({}).then((r) => {
//     console.log(r);
//   });
// });
//# sourceMappingURL=dev.js.map