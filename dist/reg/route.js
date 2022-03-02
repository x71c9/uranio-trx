"use strict";
/**
 * Register module
 *
 * @packageDocumentation
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const uranio_api_1 = __importDefault(require("uranio-api"));
function route(route, atom_name, route_name) {
    return uranio_api_1.default.register.route(route, atom_name, route_name);
}
exports.route = route;
//# sourceMappingURL=route.js.map