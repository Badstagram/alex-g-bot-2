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
var ping_exports = {};
__export(ping_exports, {
  default: () => ping_default
});
module.exports = __toCommonJS(ping_exports);
var import_framework = require("@sapphire/framework");
const _PingCommand = class _PingCommand extends import_framework.Command {
  constructor(context, options) {
    super(context, { ...options });
  }
  registerApplicationCommands(registry) {
    registry.registerChatInputCommand((builder) => {
      return builder.setName("ping").setDescription("Replies with pong");
    });
  }
  async chatInputRun(interaction) {
    await interaction.reply("Pong!");
  }
};
__name(_PingCommand, "PingCommand");
let PingCommand = _PingCommand;
var ping_default = PingCommand;
//# sourceMappingURL=ping.cjs.map