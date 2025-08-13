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
var format_query_response_exports = {};
__export(format_query_response_exports, {
  default: () => format_query_response_default
});
module.exports = __toCommonJS(format_query_response_exports);
var import_discord = require("discord.js");
function formatQueryResponse(queryString, queryResponse, { success }) {
  return new import_discord.ContainerBuilder().addTextDisplayComponents((builder) => {
    return builder.setContent(`## Database Query`);
  }).addSeparatorComponents((builder) => {
    return builder.setSpacing(import_discord.SeparatorSpacingSize.Large);
  }).addTextDisplayComponents((builder) => {
    return builder.setContent("## Input");
  }).addTextDisplayComponents((builder) => {
    return builder.setContent("```js\n" + queryString + "```");
  }).addSeparatorComponents((builder) => {
    return builder.setSpacing(import_discord.SeparatorSpacingSize.Small);
  }).addTextDisplayComponents((builder) => {
    return builder.setContent("## Output");
  }).addTextDisplayComponents((builder) => {
    return builder.setContent("```js\n" + JSON.stringify(queryResponse, null, 2) + "```");
  }).setAccentColor(success ? [0, 255, 0] : [255, 0, 0]);
}
__name(formatQueryResponse, "formatQueryResponse");
var format_query_response_default = formatQueryResponse;
//# sourceMappingURL=_format-query-response.cjs.map