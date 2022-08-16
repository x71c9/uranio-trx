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
// console.log(uranio.env.get_all());
// console.log(uranio.conf.get_all());
const service = server_1.default.api.service.create();
service.listen(async () => {
    // const res = await uranio.hooks.users.find_id('61e9980a5bea5d4f9044f19b', {query: {options: {depth: 1}}});
    // console.log(res);
});
// import uranio_client from './client';
// uranio_client.init();
// // console.log(uranio_client.conf.get_all());
// uranio_client.hooks.superusers.find({}).then((data) => {console.log(data.payload?.[0])}).catch((data) => console.error(data));
//# sourceMappingURL=dev.js.map