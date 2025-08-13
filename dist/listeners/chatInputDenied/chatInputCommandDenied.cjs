"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chatInputCommandDenied_exports = {};
__export(chatInputCommandDenied_exports, {
  default: () => chatInputCommandDenied_default
});
module.exports = __toCommonJS(chatInputCommandDenied_exports);
var import_framework = require("@sapphire/framework");
var import_deny_chat_input_command = __toESM(require("src/listeners/chatInputDenied/_deny-chat-input-command"), 1);
const _ChatInputCommandDeniedListener = class _ChatInputCommandDeniedListener extends import_framework.Listener {
  constructor(context, options) {
    super(context, {
      ...options,
      event: "chatInputCommandDenied"
    });
  }
  async run(error, { interaction }) {
    return await (0, import_deny_chat_input_command.default)(error, interaction);
  }
};
__name(_ChatInputCommandDeniedListener, "ChatInputCommandDeniedListener");
let ChatInputCommandDeniedListener = _ChatInputCommandDeniedListener;
var chatInputCommandDenied_default = ChatInputCommandDeniedListener;
//# sourceMappingURL=chatInputCommandDenied.cjs.map