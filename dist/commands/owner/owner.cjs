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
var owner_exports = {};
__export(owner_exports, {
  default: () => owner_default
});
module.exports = __toCommonJS(owner_exports);
var import_plugin_subcommands = require("@sapphire/plugin-subcommands");
var import_eval = __toESM(require("src/commands/owner/_eval"), 1);
var import_test = __toESM(require("src/commands/owner/_test"), 1);
const _OwnerCommand = class _OwnerCommand extends import_plugin_subcommands.Subcommand {
  constructor(context, options) {
    super(context, {
      ...options,
      preconditions: ["OwnerOnly"],
      subcommands: [
        {
          name: "test",
          chatInputRun: import_test.default,
          default: true
        },
        {
          name: "eval",
          chatInputRun: import_eval.default
        }
      ]
    });
  }
  registerApplicationCommands(registry) {
    registry.registerChatInputCommand((builder) => {
      return builder.setName("owner").setDescription("Commands only the bot owner can run").addSubcommand((command) => {
        return command.setName("test").setDescription("Respond with a special message if run by the bot owner");
      }).addSubcommand((command) => {
        return command.setName("eval").setDescription("Evaluate some JavaScript code");
      });
    });
  }
};
__name(_OwnerCommand, "OwnerCommand");
let OwnerCommand = _OwnerCommand;
var owner_default = OwnerCommand;
//# sourceMappingURL=owner.cjs.map