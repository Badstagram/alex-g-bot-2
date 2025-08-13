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
var query_exports = {};
__export(query_exports, {
  default: () => query_default
});
module.exports = __toCommonJS(query_exports);
var import_discord = require("discord.js");
var import_execute_query = __toESM(require("src/commands/database/helpers/_execute-query"), 1);
var import_format_query_response = __toESM(require("src/commands/database/helpers/_format-query-response"), 1);
async function query(interaction) {
  const queryString = interaction.options.getString("query", true);
  const { queryResult, success } = await (0, import_execute_query.default)(queryString);
  const outputContainer = await (0, import_format_query_response.default)(queryString, queryResult, { success });
  await interaction.reply({ components: [outputContainer], flags: [import_discord.MessageFlags.IsComponentsV2] });
}
__name(query, "query");
var query_default = query;
//# sourceMappingURL=_query.cjs.map