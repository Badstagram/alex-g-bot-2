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
var packages_exports = {};
__export(packages_exports, {
  default: () => packages_default
});
module.exports = __toCommonJS(packages_exports);
var import_plugin_subcommands = require("@sapphire/plugin-subcommands");
var import_github_links = __toESM(require("src/commands/packages/_github-links"), 1);
const _PackagesCommand = class _PackagesCommand extends import_plugin_subcommands.Subcommand {
  constructor(context, options) {
    super(context, {
      ...options,
      subcommands: [
        {
          name: "github-links",
          chatInputRun: import_github_links.default,
          default: true
        }
      ]
    });
  }
  registerApplicationCommands(registry) {
    registry.registerChatInputCommand((builder) => {
      return builder.setName("packages").setDescription("Get links to NPM packages created by Alex").addSubcommand((command) => {
        return command.setName("github-links").setDescription("GitHub links to Alex's NPM packages");
      });
    });
  }
};
__name(_PackagesCommand, "PackagesCommand");
let PackagesCommand = _PackagesCommand;
var packages_default = PackagesCommand;
//# sourceMappingURL=packages.cjs.map