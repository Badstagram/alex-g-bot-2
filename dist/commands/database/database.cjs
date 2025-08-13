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
var database_exports = {};
__export(database_exports, {
  default: () => database_default
});
module.exports = __toCommonJS(database_exports);
var import_plugin_subcommands = require("@sapphire/plugin-subcommands");
var import_add_user = __toESM(require("src/commands/database/_add-user"), 1);
var import_query = __toESM(require("src/commands/database/_query"), 1);
const _DatabaseCommand = class _DatabaseCommand extends import_plugin_subcommands.Subcommand {
  constructor(context, options) {
    super(context, {
      ...options,
      preconditions: ["OwnerOnly"],
      subcommands: [
        {
          name: "query",
          chatInputRun: import_query.default
        },
        {
          name: "add-user",
          chatInputRun: import_add_user.default
        }
      ]
    });
  }
  registerApplicationCommands(registry) {
    registry.registerChatInputCommand((builder) => {
      return builder.setName("database").setDescription("Interact with the bot's database").addSubcommand((command) => {
        return command.setName("query").setDescription("Query the bot's database").addStringOption((option) => {
          return option.setName("query").setDescription("The SQL query to run").setRequired(true);
        });
      }).addSubcommand((command) => {
        return command.setName("add-user").setDescription("Add a user to the bot's database").addUserOption((option) => {
          return option.setName("user").setDescription("The user to add").setRequired(true);
        });
      });
    });
  }
};
__name(_DatabaseCommand, "DatabaseCommand");
let DatabaseCommand = _DatabaseCommand;
var database_default = DatabaseCommand;
//# sourceMappingURL=database.cjs.map