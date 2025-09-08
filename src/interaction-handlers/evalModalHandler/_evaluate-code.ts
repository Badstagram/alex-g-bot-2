export interface EvaluateCodeReturnType {
  evaluatedCode: string | unknown;
  success: boolean;
}

function evaluateCode(code: string): EvaluateCodeReturnType {
  try {
    // eslint-disable-next-line no-eval
    return { evaluatedCode: eval(code), success: true };
  } catch (error: unknown) {
    return { evaluatedCode: error, success: false };
  }
}

export default evaluateCode;
