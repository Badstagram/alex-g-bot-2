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
var github_exports = {};
__export(github_exports, {
  default: () => github_default
});
module.exports = __toCommonJS(github_exports);
var import_framework = require("@sapphire/framework");
const _GitHubLinkCommand = class _GitHubLinkCommand extends import_framework.Command {
  constructor(context, options) {
    super(context, { ...options });
  }
  registerApplicationCommands(registry) {
    registry.registerChatInputCommand((builder) => {
      return builder.setName("github").setDescription("Respond with GitHub repository link to bot source code");
    });
  }
  async chatInputRun(interaction) {
    await interaction.reply(
      "Here's the GitHub repository link to my source code: https://github.com/AlexMan123456/alex-g-bot-2"
    );
  }
};
__name(_GitHubLinkCommand, "GitHubLinkCommand");
let GitHubLinkCommand = _GitHubLinkCommand;
var github_default = GitHubLinkCommand;
//# sourceMappingURL=github.cjs.map