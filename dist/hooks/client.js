"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hooks = void 0;
let hook_token;
exports.hooks = {
    set_token: (token) => {
        hook_token = token;
    },
    get_token: () => {
        return hook_token;
    },
};
//# sourceMappingURL=client.js.map