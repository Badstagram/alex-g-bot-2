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
var evaluate_code_exports = {};
__export(evaluate_code_exports, {
  default: () => evaluate_code_default
});
module.exports = __toCommonJS(evaluate_code_exports);
function evaluateCode(code) {
  try {
    return { evaluatedCode: eval(code), success: true };
  } catch (error) {
    return { evaluatedCode: error, success: false };
  }
}
__name(evaluateCode, "evaluateCode");
var evaluate_code_default = evaluateCode;
//# sourceMappingURL=_evaluate-code.cjs.map