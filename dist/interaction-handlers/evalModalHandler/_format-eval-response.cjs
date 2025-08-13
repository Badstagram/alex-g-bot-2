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
var format_eval_response_exports = {};
__export(format_eval_response_exports, {
  default: () => format_eval_response_default
});
module.exports = __toCommonJS(format_eval_response_exports);
var import_type = __toESM(require("@sapphire/type"), 1);
var import_discord = require("discord.js");
function formatEvalResponse(code, output, { lineSpacing, success, showEnvironmentVariables }) {
  return new import_discord.ContainerBuilder().addTextDisplayComponents((builder) => {
    return builder.setContent(`## Eval`);
  }).addSeparatorComponents((builder) => {
    return builder.setSpacing(import_discord.SeparatorSpacingSize.Large);
  }).addTextDisplayComponents((builder) => {
    return builder.setContent("## Input");
  }).addTextDisplayComponents((builder) => {
    return builder.setContent("```js\n" + code + "```");
  }).addSeparatorComponents((builder) => {
    return builder.setSpacing(import_discord.SeparatorSpacingSize.Small);
  }).addTextDisplayComponents((builder) => {
    return builder.setContent("## Output");
  }).addTextDisplayComponents((builder) => {
    return builder.setContent("```js\n" + JSON.stringify(output, null, lineSpacing) + "```");
  }).addSeparatorComponents((builder) => {
    return builder.setSpacing(import_discord.SeparatorSpacingSize.Small);
  }).addTextDisplayComponents((builder) => {
    return builder.setContent(
      `-# Output type: ${code.includes("process.env") && !showEnvironmentVariables ? "Rickroll" : new import_type.default(output)} | Line spacing: ${lineSpacing} | Show environment variables: ${showEnvironmentVariables}`
    );
  }).setAccentColor(success ? [0, 255, 0] : [255, 0, 0]);
}
__name(formatEvalResponse, "formatEvalResponse");
var format_eval_response_default = formatEvalResponse;
//# sourceMappingURL=_format-eval-response.cjs.map