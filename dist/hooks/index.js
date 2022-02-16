"use strict";
/**
 * Export module for Hook
 *
 * @packageDocumentation
 */
// export * from './hooks';
Object.defineProperty(exports, "__esModule", { value: true });
exports.hooks = void 0;
const index_1 = require("../auth/index");
const index_2 = require("../base/index");
const index_3 = require("../media/index");
let hook_token;
exports.hooks = {
    set_token: (token) => {
        hook_token = token;
    },
    get_token: () => {
        return hook_token;
    },
    superusers: {
        upload: async (file, token) => {
            let current_token;
            if (typeof hook_token === "string" && hook_token !== "") {
                current_token = hook_token;
            }
            if (typeof token === "string" && token !== "") {
                current_token = token;
            }
            return await (0, index_3.create)(current_token).upload(file, current_token);
        },
        presigned: async (filename, size, type, token) => {
            let current_token;
            if (typeof hook_token === "string" && hook_token !== "") {
                current_token = hook_token;
            }
            if (typeof token === "string" && token !== "") {
                current_token = token;
            }
            return await (0, index_3.create)(current_token).presigned(filename, size, type, current_token);
        },
        authenticate: async (email, password) => {
            return await (0, index_1.create)('superuser').authenticate(email, password);
        },
        count: async (options, token) => {
            const args = {
                ...options
            };
            let current_token;
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await (0, index_2.create)('superuser', current_token).hook('count')(args);
        },
        find: async (options, token) => {
            const args = {
                ...options
            };
            let current_token;
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await (0, index_2.create)('superuser', current_token).hook('find')(args);
        },
        find_id: async (id, options, token) => {
            const args = {
                params: {
                    id: id,
                },
                ...options
            };
            let current_token;
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await (0, index_2.create)('superuser', current_token).hook('find_id')(args);
        },
    }
};
//# sourceMappingURL=index.js.map