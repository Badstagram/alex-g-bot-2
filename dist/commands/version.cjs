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
var version_exports = {};
__export(version_exports, {
  default: () => version_default
});
module.exports = __toCommonJS(version_exports);
var import_framework = require("@sapphire/framework");
var import_common_tags = require("common-tags");
var import_package = require("package.json");
const _VersionCommand = class _VersionCommand extends import_framework.Command {
  constructor(context, options) {
    super(context, { ...options });
  }
  registerApplicationCommands(registry) {
    registry.registerChatInputCommand((builder) => {
      return builder.setName("version").setDescription("Get the current version number of the bot");
    });
  }
  async chatInputRun(interaction) {
    await interaction.reply(import_common_tags.stripIndent`
      Current version: ${import_package.version}
      Last updated: ${process.env.LAST_UPDATED ? `<t:${new Date(process.env.LAST_UPDATED).getTime() / 1e3}:f>` : "Unknown"}
      `);
  }
};
__name(_VersionCommand, "VersionCommand");
let VersionCommand = _VersionCommand;
var version_default = VersionCommand;
//# sourceMappingURL=version.cjs.map