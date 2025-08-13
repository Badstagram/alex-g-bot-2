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
var eval_exports = {};
__export(eval_exports, {
  default: () => eval_default
});
module.exports = __toCommonJS(eval_exports);
var import_discord = require("discord.js");
async function evalCommand(interaction) {
  const modal = new import_discord.ModalBuilder().setCustomId("eval").setTitle("Eval");
  const codeInput = new import_discord.TextInputBuilder().setCustomId("code").setLabel("Enter your code here").setStyle(import_discord.TextInputStyle.Paragraph);
  const lineSpacing = new import_discord.TextInputBuilder().setCustomId("lineSpacing").setLabel("Set line spacing of output").setStyle(import_discord.TextInputStyle.Short).setRequired(false);
  const showEnvironmentVariables = new import_discord.TextInputBuilder().setCustomId("showEnvironmentVariables").setLabel("Show Environment Variables").setStyle(import_discord.TextInputStyle.Short).setRequired(false);
  modal.addComponents(
    new import_discord.ActionRowBuilder().addComponents(codeInput),
    new import_discord.ActionRowBuilder().addComponents(lineSpacing),
    new import_discord.ActionRowBuilder().addComponents(showEnvironmentVariables)
  );
  await interaction.showModal(modal);
}
__name(evalCommand, "evalCommand");
var eval_default = evalCommand;
//# sourceMappingURL=_eval.cjs.map