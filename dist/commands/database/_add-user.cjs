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
var add_user_exports = {};
__export(add_user_exports, {
  default: () => add_user_default
});
module.exports = __toCommonJS(add_user_exports);
var import_add_user_to_database = __toESM(require("src/database-helpers/add-user-to-database"), 1);
async function addUserCommand(interaction) {
  const userToAdd = interaction.options.getUser("user", true);
  try {
    await (0, import_add_user_to_database.default)(userToAdd);
    await interaction.reply(`${userToAdd.globalName} has been added to the database.`);
  } catch {
    await interaction.reply(`Could not add ${userToAdd.globalName} to database.`);
  }
}
__name(addUserCommand, "addUserCommand");
var add_user_default = addUserCommand;
//# sourceMappingURL=_add-user.cjs.map