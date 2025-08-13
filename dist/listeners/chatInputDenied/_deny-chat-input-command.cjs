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
var deny_chat_input_command_exports = {};
__export(deny_chat_input_command_exports, {
  default: () => deny_chat_input_command_default
});
module.exports = __toCommonJS(deny_chat_input_command_exports);
async function denyChatInputCommand(error, interaction) {
  const reply = { content: error.message };
  if (interaction.deferred || interaction.replied) {
    return await interaction.editReply(reply);
  }
  return await interaction.reply(reply);
}
__name(denyChatInputCommand, "denyChatInputCommand");
var deny_chat_input_command_default = denyChatInputCommand;
//# sourceMappingURL=_deny-chat-input-command.cjs.map