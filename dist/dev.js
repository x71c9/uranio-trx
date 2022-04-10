"use strict";
/**
 * TRX dev module
 *
 * @packageDocumentation
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
server_1.default.init();
console.log(server_1.default.env.get_all());
console.log(server_1.default.conf.get_all());
const service = server_1.default.api.service.create();
service.listen(async () => {
    const res = await server_1.default.hooks.media.count();
    console.log(res);
});
//# sourceMappingURL=dev.js.map