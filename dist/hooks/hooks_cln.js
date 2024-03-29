"use strict";
/**
 * Auto generate hooks file
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.hooks = void 0;
const auth = __importStar(require("../auth/client"));
const base = __importStar(require("../base/client"));
const media = __importStar(require("../media/client"));
let hook_token;
exports.hooks = {
    set_token: (token) => {
        hook_token = token;
    },
    get_token: () => {
        return hook_token;
    },
    _superusers: {
        authenticate: async (email, password) => {
            return await auth.create('_superuser').authenticate(email, password);
        },
        count: async (parameters, token) => {
            const args = {
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_superuser', current_token).hook('count')(args);
        },
        find_one: async (parameters, token) => {
            const args = {
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_superuser', current_token).hook('find_one')(args);
        },
        find: async (parameters, token) => {
            const args = {
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_superuser', current_token).hook('find')(args);
        },
        find_id: async (id, parameters, token) => {
            const args = {
                params: {
                    id: id,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_superuser', current_token).hook('find_id')(args);
        },
        insert: async (body, parameters, token) => {
            const args = {
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_superuser', current_token).hook('insert')(args);
        },
        update: async (id, body, parameters, token) => {
            const args = {
                params: {
                    id: id,
                },
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_superuser', current_token).hook('update')(args);
        },
        delete: async (id, parameters, token) => {
            const args = {
                params: {
                    id: id,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_superuser', current_token).hook('delete')(args);
        },
        insert_multiple: async (body, parameters, token) => {
            const args = {
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_superuser', current_token).hook('insert_multiple')(args);
        },
        update_multiple: async (ids, body, parameters, token) => {
            const args = {
                params: {
                    ids: ids,
                },
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_superuser', current_token).hook('update_multiple')(args);
        },
        delete_multiple: async (ids, parameters, token) => {
            const args = {
                params: {
                    ids: ids,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_superuser', current_token).hook('delete_multiple')(args);
        },
        search_count: async (q, parameters, token) => {
            const args = {
                params: {
                    q: q,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_superuser', current_token).hook('search_count')(args);
        },
        search: async (q, parameters, token) => {
            const args = {
                params: {
                    q: q,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_superuser', current_token).hook('search')(args);
        },
    },
    _groups: {
        count: async (parameters, token) => {
            const args = {
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_group', current_token).hook('count')(args);
        },
        find_one: async (parameters, token) => {
            const args = {
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_group', current_token).hook('find_one')(args);
        },
        find: async (parameters, token) => {
            const args = {
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_group', current_token).hook('find')(args);
        },
        find_id: async (id, parameters, token) => {
            const args = {
                params: {
                    id: id,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_group', current_token).hook('find_id')(args);
        },
        insert: async (body, parameters, token) => {
            const args = {
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_group', current_token).hook('insert')(args);
        },
        update: async (id, body, parameters, token) => {
            const args = {
                params: {
                    id: id,
                },
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_group', current_token).hook('update')(args);
        },
        delete: async (id, parameters, token) => {
            const args = {
                params: {
                    id: id,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_group', current_token).hook('delete')(args);
        },
        insert_multiple: async (body, parameters, token) => {
            const args = {
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_group', current_token).hook('insert_multiple')(args);
        },
        update_multiple: async (ids, body, parameters, token) => {
            const args = {
                params: {
                    ids: ids,
                },
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_group', current_token).hook('update_multiple')(args);
        },
        delete_multiple: async (ids, parameters, token) => {
            const args = {
                params: {
                    ids: ids,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_group', current_token).hook('delete_multiple')(args);
        },
        search_count: async (q, parameters, token) => {
            const args = {
                params: {
                    q: q,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_group', current_token).hook('search_count')(args);
        },
        search: async (q, parameters, token) => {
            const args = {
                params: {
                    q: q,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_group', current_token).hook('search')(args);
        },
    },
    _users: {
        authenticate: async (email, password) => {
            return await auth.create('_user').authenticate(email, password);
        },
        count: async (parameters, token) => {
            const args = {
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_user', current_token).hook('count')(args);
        },
        find_one: async (parameters, token) => {
            const args = {
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_user', current_token).hook('find_one')(args);
        },
        find: async (parameters, token) => {
            const args = {
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_user', current_token).hook('find')(args);
        },
        find_id: async (id, parameters, token) => {
            const args = {
                params: {
                    id: id,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_user', current_token).hook('find_id')(args);
        },
        insert: async (body, parameters, token) => {
            const args = {
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_user', current_token).hook('insert')(args);
        },
        update: async (id, body, parameters, token) => {
            const args = {
                params: {
                    id: id,
                },
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_user', current_token).hook('update')(args);
        },
        delete: async (id, parameters, token) => {
            const args = {
                params: {
                    id: id,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_user', current_token).hook('delete')(args);
        },
        insert_multiple: async (body, parameters, token) => {
            const args = {
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_user', current_token).hook('insert_multiple')(args);
        },
        update_multiple: async (ids, body, parameters, token) => {
            const args = {
                params: {
                    ids: ids,
                },
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_user', current_token).hook('update_multiple')(args);
        },
        delete_multiple: async (ids, parameters, token) => {
            const args = {
                params: {
                    ids: ids,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_user', current_token).hook('delete_multiple')(args);
        },
        search_count: async (q, parameters, token) => {
            const args = {
                params: {
                    q: q,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_user', current_token).hook('search_count')(args);
        },
        search: async (q, parameters, token) => {
            const args = {
                params: {
                    q: q,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_user', current_token).hook('search')(args);
        },
    },
    _media: {
        upload: async (file, token) => {
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === "string" && hook_token !== "") {
                current_token = hook_token;
            }
            if (typeof token === "string" && token !== "") {
                current_token = token;
            }
            return await media.create(current_token).upload(file, current_token);
        },
        presigned: async (filename, size, type, token) => {
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === "string" && hook_token !== "") {
                current_token = hook_token;
            }
            if (typeof token === "string" && token !== "") {
                current_token = token;
            }
            return await media.create(current_token).presigned(filename, size, type, current_token);
        },
        count: async (parameters, token) => {
            const args = {
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_media', current_token).hook('count')(args);
        },
        find_one: async (parameters, token) => {
            const args = {
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_media', current_token).hook('find_one')(args);
        },
        find: async (parameters, token) => {
            const args = {
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_media', current_token).hook('find')(args);
        },
        find_id: async (id, parameters, token) => {
            const args = {
                params: {
                    id: id,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_media', current_token).hook('find_id')(args);
        },
        insert: async (body, parameters, token) => {
            const args = {
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_media', current_token).hook('insert')(args);
        },
        update: async (id, body, parameters, token) => {
            const args = {
                params: {
                    id: id,
                },
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_media', current_token).hook('update')(args);
        },
        delete: async (id, parameters, token) => {
            const args = {
                params: {
                    id: id,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_media', current_token).hook('delete')(args);
        },
        insert_multiple: async (body, parameters, token) => {
            const args = {
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_media', current_token).hook('insert_multiple')(args);
        },
        update_multiple: async (ids, body, parameters, token) => {
            const args = {
                params: {
                    ids: ids,
                },
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_media', current_token).hook('update_multiple')(args);
        },
        delete_multiple: async (ids, parameters, token) => {
            const args = {
                params: {
                    ids: ids,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_media', current_token).hook('delete_multiple')(args);
        },
        search_count: async (q, parameters, token) => {
            const args = {
                params: {
                    q: q,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_media', current_token).hook('search_count')(args);
        },
        search: async (q, parameters, token) => {
            const args = {
                params: {
                    q: q,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_media', current_token).hook('search')(args);
        },
    },
    _errors: {
        count: async (parameters, token) => {
            const args = {
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_error', current_token).hook('count')(args);
        },
        find_one: async (parameters, token) => {
            const args = {
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_error', current_token).hook('find_one')(args);
        },
        find: async (parameters, token) => {
            const args = {
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_error', current_token).hook('find')(args);
        },
        find_id: async (id, parameters, token) => {
            const args = {
                params: {
                    id: id,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_error', current_token).hook('find_id')(args);
        },
        insert: async (body, parameters, token) => {
            const args = {
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_error', current_token).hook('insert')(args);
        },
        update: async (id, body, parameters, token) => {
            const args = {
                params: {
                    id: id,
                },
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_error', current_token).hook('update')(args);
        },
        delete: async (id, parameters, token) => {
            const args = {
                params: {
                    id: id,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_error', current_token).hook('delete')(args);
        },
        insert_multiple: async (body, parameters, token) => {
            const args = {
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_error', current_token).hook('insert_multiple')(args);
        },
        update_multiple: async (ids, body, parameters, token) => {
            const args = {
                params: {
                    ids: ids,
                },
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_error', current_token).hook('update_multiple')(args);
        },
        delete_multiple: async (ids, parameters, token) => {
            const args = {
                params: {
                    ids: ids,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_error', current_token).hook('delete_multiple')(args);
        },
        search_count: async (q, parameters, token) => {
            const args = {
                params: {
                    q: q,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_error', current_token).hook('search_count')(args);
        },
        search: async (q, parameters, token) => {
            const args = {
                params: {
                    q: q,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_error', current_token).hook('search')(args);
        },
    },
    _requests: {
        count: async (parameters, token) => {
            const args = {
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_request', current_token).hook('count')(args);
        },
        find_one: async (parameters, token) => {
            const args = {
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_request', current_token).hook('find_one')(args);
        },
        find: async (parameters, token) => {
            const args = {
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_request', current_token).hook('find')(args);
        },
        find_id: async (id, parameters, token) => {
            const args = {
                params: {
                    id: id,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_request', current_token).hook('find_id')(args);
        },
        insert: async (body, parameters, token) => {
            const args = {
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_request', current_token).hook('insert')(args);
        },
        update: async (id, body, parameters, token) => {
            const args = {
                params: {
                    id: id,
                },
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_request', current_token).hook('update')(args);
        },
        delete: async (id, parameters, token) => {
            const args = {
                params: {
                    id: id,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_request', current_token).hook('delete')(args);
        },
        insert_multiple: async (body, parameters, token) => {
            const args = {
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_request', current_token).hook('insert_multiple')(args);
        },
        update_multiple: async (ids, body, parameters, token) => {
            const args = {
                params: {
                    ids: ids,
                },
                body: body,
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_request', current_token).hook('update_multiple')(args);
        },
        delete_multiple: async (ids, parameters, token) => {
            const args = {
                params: {
                    ids: ids,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_request', current_token).hook('delete_multiple')(args);
        },
        search_count: async (q, parameters, token) => {
            const args = {
                params: {
                    q: q,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_request', current_token).hook('search_count')(args);
        },
        search: async (q, parameters, token) => {
            const args = {
                params: {
                    q: q,
                },
                ...parameters
            };
            let current_token;
            const hook_token = exports.hooks.get_token();
            if (typeof hook_token === 'string' && hook_token !== '') {
                current_token = hook_token;
            }
            if (typeof token === 'string' && token !== '') {
                current_token = token;
            }
            return await base.create('_request', current_token).hook('search')(args);
        },
    },
};
//# sourceMappingURL=hooks_cln.js.map