"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var hooks_exports = {};
__export(hooks_exports, {
  hooks: () => hooks
});
module.exports = __toCommonJS(hooks_exports);
var auth = __toESM(require("../auth/server"));
var base = __toESM(require("../base/server"));
let hook_token;
const hooks = {
  set_token: (token) => {
    hook_token = token;
  },
  get_token: () => {
    return hook_token;
  },
  _superusers: {
    authenticate: async (email, password) => {
      return await auth.create("_superuser").authenticate(email, password);
    },
    count: async (parameters, token) => {
      const args = {
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_superuser", current_token).hook("count")(args);
    },
    find_one: async (parameters, token) => {
      const args = {
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_superuser", current_token).hook("find_one")(args);
    },
    find: async (parameters, token) => {
      const args = {
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_superuser", current_token).hook("find")(args);
    },
    find_id: async (id, parameters, token) => {
      const args = {
        params: {
          id
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_superuser", current_token).hook("find_id")(args);
    },
    insert: async (body, parameters, token) => {
      const args = {
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_superuser", current_token).hook("insert")(args);
    },
    update: async (id, body, parameters, token) => {
      const args = {
        params: {
          id
        },
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_superuser", current_token).hook("update")(args);
    },
    delete: async (id, parameters, token) => {
      const args = {
        params: {
          id
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_superuser", current_token).hook("delete")(args);
    },
    insert_multiple: async (body, parameters, token) => {
      const args = {
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_superuser", current_token).hook("insert_multiple")(args);
    },
    update_multiple: async (ids, body, parameters, token) => {
      const args = {
        params: {
          ids
        },
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_superuser", current_token).hook("update_multiple")(args);
    },
    delete_multiple: async (ids, parameters, token) => {
      const args = {
        params: {
          ids
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_superuser", current_token).hook("delete_multiple")(args);
    },
    search_count: async (q, parameters, token) => {
      const args = {
        params: {
          q
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_superuser", current_token).hook("search_count")(args);
    },
    search: async (q, parameters, token) => {
      const args = {
        params: {
          q
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_superuser", current_token).hook("search")(args);
    }
  },
  _groups: {
    count: async (parameters, token) => {
      const args = {
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_group", current_token).hook("count")(args);
    },
    find_one: async (parameters, token) => {
      const args = {
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_group", current_token).hook("find_one")(args);
    },
    find: async (parameters, token) => {
      const args = {
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_group", current_token).hook("find")(args);
    },
    find_id: async (id, parameters, token) => {
      const args = {
        params: {
          id
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_group", current_token).hook("find_id")(args);
    },
    insert: async (body, parameters, token) => {
      const args = {
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_group", current_token).hook("insert")(args);
    },
    update: async (id, body, parameters, token) => {
      const args = {
        params: {
          id
        },
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_group", current_token).hook("update")(args);
    },
    delete: async (id, parameters, token) => {
      const args = {
        params: {
          id
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_group", current_token).hook("delete")(args);
    },
    insert_multiple: async (body, parameters, token) => {
      const args = {
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_group", current_token).hook("insert_multiple")(args);
    },
    update_multiple: async (ids, body, parameters, token) => {
      const args = {
        params: {
          ids
        },
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_group", current_token).hook("update_multiple")(args);
    },
    delete_multiple: async (ids, parameters, token) => {
      const args = {
        params: {
          ids
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_group", current_token).hook("delete_multiple")(args);
    },
    search_count: async (q, parameters, token) => {
      const args = {
        params: {
          q
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_group", current_token).hook("search_count")(args);
    },
    search: async (q, parameters, token) => {
      const args = {
        params: {
          q
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_group", current_token).hook("search")(args);
    }
  },
  _users: {
    authenticate: async (email, password) => {
      return await auth.create("_user").authenticate(email, password);
    },
    count: async (parameters, token) => {
      const args = {
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_user", current_token).hook("count")(args);
    },
    find_one: async (parameters, token) => {
      const args = {
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_user", current_token).hook("find_one")(args);
    },
    find: async (parameters, token) => {
      const args = {
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_user", current_token).hook("find")(args);
    },
    find_id: async (id, parameters, token) => {
      const args = {
        params: {
          id
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_user", current_token).hook("find_id")(args);
    },
    insert: async (body, parameters, token) => {
      const args = {
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_user", current_token).hook("insert")(args);
    },
    update: async (id, body, parameters, token) => {
      const args = {
        params: {
          id
        },
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_user", current_token).hook("update")(args);
    },
    delete: async (id, parameters, token) => {
      const args = {
        params: {
          id
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_user", current_token).hook("delete")(args);
    },
    insert_multiple: async (body, parameters, token) => {
      const args = {
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_user", current_token).hook("insert_multiple")(args);
    },
    update_multiple: async (ids, body, parameters, token) => {
      const args = {
        params: {
          ids
        },
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_user", current_token).hook("update_multiple")(args);
    },
    delete_multiple: async (ids, parameters, token) => {
      const args = {
        params: {
          ids
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_user", current_token).hook("delete_multiple")(args);
    },
    search_count: async (q, parameters, token) => {
      const args = {
        params: {
          q
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_user", current_token).hook("search_count")(args);
    },
    search: async (q, parameters, token) => {
      const args = {
        params: {
          q
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_user", current_token).hook("search")(args);
    }
  },
  _media: {
    upload: async (body, parameters, token) => {
      const args = {
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_media", current_token).hook("upload")(args);
    },
    count: async (parameters, token) => {
      const args = {
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_media", current_token).hook("count")(args);
    },
    find_one: async (parameters, token) => {
      const args = {
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_media", current_token).hook("find_one")(args);
    },
    find: async (parameters, token) => {
      const args = {
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_media", current_token).hook("find")(args);
    },
    find_id: async (id, parameters, token) => {
      const args = {
        params: {
          id
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_media", current_token).hook("find_id")(args);
    },
    insert: async (body, parameters, token) => {
      const args = {
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_media", current_token).hook("insert")(args);
    },
    update: async (id, body, parameters, token) => {
      const args = {
        params: {
          id
        },
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_media", current_token).hook("update")(args);
    },
    delete: async (id, parameters, token) => {
      const args = {
        params: {
          id
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_media", current_token).hook("delete")(args);
    },
    insert_multiple: async (body, parameters, token) => {
      const args = {
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_media", current_token).hook("insert_multiple")(args);
    },
    update_multiple: async (ids, body, parameters, token) => {
      const args = {
        params: {
          ids
        },
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_media", current_token).hook("update_multiple")(args);
    },
    delete_multiple: async (ids, parameters, token) => {
      const args = {
        params: {
          ids
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_media", current_token).hook("delete_multiple")(args);
    },
    search_count: async (q, parameters, token) => {
      const args = {
        params: {
          q
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_media", current_token).hook("search_count")(args);
    },
    search: async (q, parameters, token) => {
      const args = {
        params: {
          q
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_media", current_token).hook("search")(args);
    }
  },
  _errors: {
    count: async (parameters, token) => {
      const args = {
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_error", current_token).hook("count")(args);
    },
    find_one: async (parameters, token) => {
      const args = {
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_error", current_token).hook("find_one")(args);
    },
    find: async (parameters, token) => {
      const args = {
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_error", current_token).hook("find")(args);
    },
    find_id: async (id, parameters, token) => {
      const args = {
        params: {
          id
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_error", current_token).hook("find_id")(args);
    },
    insert: async (body, parameters, token) => {
      const args = {
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_error", current_token).hook("insert")(args);
    },
    update: async (id, body, parameters, token) => {
      const args = {
        params: {
          id
        },
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_error", current_token).hook("update")(args);
    },
    delete: async (id, parameters, token) => {
      const args = {
        params: {
          id
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_error", current_token).hook("delete")(args);
    },
    insert_multiple: async (body, parameters, token) => {
      const args = {
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_error", current_token).hook("insert_multiple")(args);
    },
    update_multiple: async (ids, body, parameters, token) => {
      const args = {
        params: {
          ids
        },
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_error", current_token).hook("update_multiple")(args);
    },
    delete_multiple: async (ids, parameters, token) => {
      const args = {
        params: {
          ids
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_error", current_token).hook("delete_multiple")(args);
    },
    search_count: async (q, parameters, token) => {
      const args = {
        params: {
          q
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_error", current_token).hook("search_count")(args);
    },
    search: async (q, parameters, token) => {
      const args = {
        params: {
          q
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_error", current_token).hook("search")(args);
    }
  },
  _requests: {
    count: async (parameters, token) => {
      const args = {
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_request", current_token).hook("count")(args);
    },
    find_one: async (parameters, token) => {
      const args = {
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_request", current_token).hook("find_one")(args);
    },
    find: async (parameters, token) => {
      const args = {
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_request", current_token).hook("find")(args);
    },
    find_id: async (id, parameters, token) => {
      const args = {
        params: {
          id
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_request", current_token).hook("find_id")(args);
    },
    insert: async (body, parameters, token) => {
      const args = {
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_request", current_token).hook("insert")(args);
    },
    update: async (id, body, parameters, token) => {
      const args = {
        params: {
          id
        },
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_request", current_token).hook("update")(args);
    },
    delete: async (id, parameters, token) => {
      const args = {
        params: {
          id
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_request", current_token).hook("delete")(args);
    },
    insert_multiple: async (body, parameters, token) => {
      const args = {
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_request", current_token).hook("insert_multiple")(args);
    },
    update_multiple: async (ids, body, parameters, token) => {
      const args = {
        params: {
          ids
        },
        body,
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_request", current_token).hook("update_multiple")(args);
    },
    delete_multiple: async (ids, parameters, token) => {
      const args = {
        params: {
          ids
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_request", current_token).hook("delete_multiple")(args);
    },
    search_count: async (q, parameters, token) => {
      const args = {
        params: {
          q
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_request", current_token).hook("search_count")(args);
    },
    search: async (q, parameters, token) => {
      const args = {
        params: {
          q
        },
        ...parameters
      };
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("_request", current_token).hook("search")(args);
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  hooks
});
