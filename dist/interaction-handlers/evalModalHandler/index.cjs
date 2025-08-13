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
var evalModalHandler_exports = {};
__export(evalModalHandler_exports, {
  default: () => evalModalHandler_default
});
module.exports = __toCommonJS(evalModalHandler_exports);
var import_framework = require("@sapphire/framework");
var import_discord = require("discord.js");
var import_evaluate_code = __toESM(require("src/interaction-handlers/evalModalHandler/_evaluate-code"), 1);
var import_format_eval_response = __toESM(require("src/interaction-handlers/evalModalHandler/_format-eval-response"), 1);
const _EvalModalHandler = class _EvalModalHandler extends import_framework.InteractionHandler {
  constructor(context, options) {
    super(context, {
      ...options,
      interactionHandlerType: import_framework.InteractionHandlerTypes.ModalSubmit
    });
  }
  parse(interaction) {
    if (interaction.customId === "eval") {
      return this.some();
    }
    return this.none();
  }
  async run(interaction) {
    const code = interaction.fields.getTextInputValue("code");
    const lineSpacing = interaction.fields.getTextInputValue("lineSpacing");
    const parsedLineSpacing = lineSpacing !== "" ? parseInt(lineSpacing) : 2;
    const showEnvironmentVariables = interaction.fields.getTextInputValue(
      "showEnvironmentVariables"
    );
    if (code.includes("process.env") && !showEnvironmentVariables) {
      const attemptedToAccess = code.split(".")[2];
      const container2 = (0, import_format_eval_response.default)(
        code,
        attemptedToAccess ? "https://www.youtube.com/watch?v=dQw4w9WgXcQ" : { BOT_TOKEN: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
        {
          lineSpacing: parsedLineSpacing,
          success: false,
          showEnvironmentVariables: !!showEnvironmentVariables
        }
      );
      await interaction.reply({ components: [container2], flags: import_discord.MessageFlags.IsComponentsV2 });
      return;
    }
    const { evaluatedCode, success } = (0, import_evaluate_code.default)(code);
    const container = (0, import_format_eval_response.default)(code, evaluatedCode, {
      lineSpacing: parsedLineSpacing,
      success,
      showEnvironmentVariables: !!showEnvironmentVariables
    });
    await interaction.reply({ components: [container], flags: import_discord.MessageFlags.IsComponentsV2 });
  }
};
__name(_EvalModalHandler, "EvalModalHandler");
let EvalModalHandler = _EvalModalHandler;
var evalModalHandler_default = EvalModalHandler;
//# sourceMappingURL=index.cjs.map