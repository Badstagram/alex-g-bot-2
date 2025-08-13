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
var github_links_exports = {};
__export(github_links_exports, {
  default: () => github_links_default
});
module.exports = __toCommonJS(github_links_exports);
var import_discord = require("discord.js");
async function gitHubLinks(interaction) {
  const embed = new import_discord.EmbedBuilder().setTitle("GitHub Links to Alex's Packages").setColor("Green").addFields(
    { name: "@alextheman/components", value: "https://github.com/AlexMan123456/components" },
    { name: "@alextheman/utility", value: "https://github.com/AlexMan123456/utility" },
    {
      name: "@alextheman/eslint-plugin",
      value: "https://github.com/AlexMan123456/eslint-plugin"
    },
    { name: "AlexCLine", value: "https://github.com/AlexMan123456/alex-c-line" },
    { name: "Gitmock", value: "https://github.com/AlexMan123456/gitmock" },
    { name: "Dropcore", value: "https://github.com/AlexMan123456/dropcore" }
  );
  await interaction.reply({ embeds: [embed] });
}
__name(gitHubLinks, "gitHubLinks");
var github_links_default = gitHubLinks;
//# sourceMappingURL=_github-links.cjs.map