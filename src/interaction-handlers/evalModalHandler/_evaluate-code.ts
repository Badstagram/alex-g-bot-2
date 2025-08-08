export interface EvaluateCodeReturnType {
  evaluatedCode: string | unknown;
  success: boolean;
}

function evaluateCode(code: string): EvaluateCodeReturnType {
  try {
    return { evaluatedCode: eval(code), success: true };
  } catch (error: unknown) {
    return { evaluatedCode: error, success: false };
  }
}

export default evaluateCode;
