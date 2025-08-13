"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var OwnerOnly_exports = {};
__export(OwnerOnly_exports, {
  default: () => OwnerOnly_default
});
module.exports = __toCommonJS(OwnerOnly_exports);
var import_framework = require("@sapphire/framework");
const _OwnerOnly = class _OwnerOnly extends import_framework.AllFlowsPrecondition {
  doOwnerCheck(userId) {
    return process.env.OWNER_ID === userId ? this.ok() : this.error({
      message: "This command can only be used by the owner",
      context: { ephemeral: true }
    });
  }
  chatInputRun(interaction) {
    return this.doOwnerCheck(interaction.user.id);
  }
  contextMenuRun(interaction) {
    return this.doOwnerCheck(interaction.user.id);
  }
  messageRun(message) {
    return this.doOwnerCheck(message.author.id);
  }
};
__name(_OwnerOnly, "OwnerOnly");
let OwnerOnly = _OwnerOnly;
var OwnerOnly_default = OwnerOnly;
//# sourceMappingURL=OwnerOnly.cjs.map