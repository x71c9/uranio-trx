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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var hooks_cln_exports = {};
__export(hooks_cln_exports, {
  hooks: () => hooks
});
module.exports = __toCommonJS(hooks_cln_exports);
var auth = __toESM(require("../auth/client"));
var base = __toESM(require("../base/client"));
var media = __toESM(require("../media/client"));
let hook_token;
const hooks = {
  set_token: (token) => {
    hook_token = token;
  },
  get_token: () => {
    return hook_token;
  },
  superusers: {
    authenticate: async (email, password) => {
      return await auth.create("superuser").authenticate(email, password);
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
      return await base.create("superuser", current_token).hook("count")(args);
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
      return await base.create("superuser", current_token).hook("find_one")(args);
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
      return await base.create("superuser", current_token).hook("find")(args);
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
      return await base.create("superuser", current_token).hook("find_id")(args);
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
      return await base.create("superuser", current_token).hook("insert")(args);
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
      return await base.create("superuser", current_token).hook("update")(args);
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
      return await base.create("superuser", current_token).hook("delete")(args);
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
      return await base.create("superuser", current_token).hook("insert_multiple")(args);
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
      return await base.create("superuser", current_token).hook("update_multiple")(args);
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
      return await base.create("superuser", current_token).hook("delete_multiple")(args);
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
      return await base.create("superuser", current_token).hook("search_count")(args);
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
      return await base.create("superuser", current_token).hook("search")(args);
    }
  },
  users: {
    authenticate: async (email, password) => {
      return await auth.create("user").authenticate(email, password);
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
      return await base.create("user", current_token).hook("count")(args);
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
      return await base.create("user", current_token).hook("find_one")(args);
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
      return await base.create("user", current_token).hook("find")(args);
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
      return await base.create("user", current_token).hook("find_id")(args);
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
      return await base.create("user", current_token).hook("insert")(args);
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
      return await base.create("user", current_token).hook("update")(args);
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
      return await base.create("user", current_token).hook("delete")(args);
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
      return await base.create("user", current_token).hook("insert_multiple")(args);
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
      return await base.create("user", current_token).hook("update_multiple")(args);
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
      return await base.create("user", current_token).hook("delete_multiple")(args);
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
      return await base.create("user", current_token).hook("search_count")(args);
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
      return await base.create("user", current_token).hook("search")(args);
    }
  },
  groups: {
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
      return await base.create("group", current_token).hook("count")(args);
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
      return await base.create("group", current_token).hook("find_one")(args);
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
      return await base.create("group", current_token).hook("find")(args);
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
      return await base.create("group", current_token).hook("find_id")(args);
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
      return await base.create("group", current_token).hook("insert")(args);
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
      return await base.create("group", current_token).hook("update")(args);
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
      return await base.create("group", current_token).hook("delete")(args);
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
      return await base.create("group", current_token).hook("insert_multiple")(args);
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
      return await base.create("group", current_token).hook("update_multiple")(args);
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
      return await base.create("group", current_token).hook("delete_multiple")(args);
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
      return await base.create("group", current_token).hook("search_count")(args);
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
      return await base.create("group", current_token).hook("search")(args);
    }
  },
  media: {
    upload: async (file, token) => {
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await media.create(current_token).upload(file, current_token);
    },
    presigned: async (filename, size, type, token) => {
      let current_token;
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
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
      const hook_token2 = hooks.get_token();
      if (typeof hook_token2 === "string" && hook_token2 !== "") {
        current_token = hook_token2;
      }
      if (typeof token === "string" && token !== "") {
        current_token = token;
      }
      return await base.create("media", current_token).hook("count")(args);
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
      return await base.create("media", current_token).hook("find_one")(args);
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
      return await base.create("media", current_token).hook("find")(args);
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
      return await base.create("media", current_token).hook("find_id")(args);
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
      return await base.create("media", current_token).hook("insert")(args);
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
      return await base.create("media", current_token).hook("update")(args);
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
      return await base.create("media", current_token).hook("delete")(args);
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
      return await base.create("media", current_token).hook("insert_multiple")(args);
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
      return await base.create("media", current_token).hook("update_multiple")(args);
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
      return await base.create("media", current_token).hook("delete_multiple")(args);
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
      return await base.create("media", current_token).hook("search_count")(args);
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
      return await base.create("media", current_token).hook("search")(args);
    }
  },
  errors: {
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
      return await base.create("error", current_token).hook("count")(args);
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
      return await base.create("error", current_token).hook("find_one")(args);
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
      return await base.create("error", current_token).hook("find")(args);
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
      return await base.create("error", current_token).hook("find_id")(args);
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
      return await base.create("error", current_token).hook("insert")(args);
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
      return await base.create("error", current_token).hook("update")(args);
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
      return await base.create("error", current_token).hook("delete")(args);
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
      return await base.create("error", current_token).hook("insert_multiple")(args);
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
      return await base.create("error", current_token).hook("update_multiple")(args);
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
      return await base.create("error", current_token).hook("delete_multiple")(args);
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
      return await base.create("error", current_token).hook("search_count")(args);
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
      return await base.create("error", current_token).hook("search")(args);
    }
  },
  requests: {
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
      return await base.create("request", current_token).hook("count")(args);
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
      return await base.create("request", current_token).hook("find_one")(args);
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
      return await base.create("request", current_token).hook("find")(args);
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
      return await base.create("request", current_token).hook("find_id")(args);
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
      return await base.create("request", current_token).hook("insert")(args);
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
      return await base.create("request", current_token).hook("update")(args);
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
      return await base.create("request", current_token).hook("delete")(args);
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
      return await base.create("request", current_token).hook("insert_multiple")(args);
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
      return await base.create("request", current_token).hook("update_multiple")(args);
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
      return await base.create("request", current_token).hook("delete_multiple")(args);
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
      return await base.create("request", current_token).hook("search_count")(args);
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
      return await base.create("request", current_token).hook("search")(args);
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  hooks
});
