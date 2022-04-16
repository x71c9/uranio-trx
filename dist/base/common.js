"use strict";
/**
 * Module for common methods client/server class
 *
 * @packageDocumentation
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.hook = void 0;
const urn_lib_1 = require("urn-lib");
const urn_exc = urn_lib_1.urn_exception.init(`BASE`, `Base module`);
const client_1 = __importDefault(require("uranio-api/client"));
const book = __importStar(require("../book/client"));
const conf = __importStar(require("../conf/client"));
function hook(route_name, atom_name, raw, parent_token) {
    _check_atom_name(atom_name);
    const route = book.get_route_definition(atom_name, route_name);
    const splitted_url = route.url.split('/');
    const params = [];
    for (const split of splitted_url) {
        if (split.includes(':')) {
            const splitted_split = split.split(':');
            if (splitted_split.length !== 2) {
                throw urn_exc.create(`INVALID_ROUTE_URL`, `Invalid Route URL format \`${route.url}\``);
            }
            const param_name = splitted_split[1];
            params.push(param_name);
        }
    }
    return async (args, token) => {
        var _a;
        const dock_def = book.get_dock_definition(atom_name);
        const atom_api_url = dock_def.url || `/${book.get_plural(atom_name)}`;
        const atom_def = book.get_definition(atom_name);
        const connection_url = (atom_def.connection && atom_def.connection === 'log') ? conf.get('prefix_log') : '';
        let url = `${connection_url}${atom_api_url}${route.url}`;
        for (const param of params) {
            if (urn_lib_1.urn_util.object.has_key(args, 'params') &&
                typeof ((_a = args.params) === null || _a === void 0 ? void 0 : _a[param]) === 'string') {
                url = url.replace(`:${param}`, args.params[param]);
            }
        }
        const headers = {};
        if (typeof parent_token === 'string') {
            headers['urn-auth-token'] = parent_token;
        }
        if (typeof token === 'string') {
            headers['urn-auth-token'] = token;
        }
        switch (route.method) {
            case client_1.default.types.RouteMethod.GET: {
                return await raw.get(url, args.query, headers);
            }
            case client_1.default.types.RouteMethod.POST: {
                return await raw.post(url, args.body, args.query, headers);
            }
            case client_1.default.types.RouteMethod.DELETE: {
                return await raw.delete(url, args.query, headers);
            }
        }
    };
}
exports.hook = hook;
function _check_atom_name(atom_name) {
    if (book.validate_name(atom_name)) {
        return true;
    }
    throw urn_exc.create_not_found(`BASEATOM_UNDEFINED`, `Base Atom not found for atom \`${atom_name}\`.`);
}
//# sourceMappingURL=common.js.map