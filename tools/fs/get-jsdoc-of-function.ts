import { IFuncInfo } from './get-exported-functions-in';
import { readAllLinesInFile } from './read-all-lines-in-file';

const LAST_LINE_OF_JSDOC = '*/';
const FIRST_LINE_OF_JSODC = '/**';
export const getJsDocCommentsOf = (funcInfo: IFuncInfo): string[] => {
  const lineNumberOfFunctionDeclaration = funcInfo.lineNumber - 1;
  if (lineNumberOfFunctionDeclaration <= 0) {
    return [];
  }
  const allLines = readAllLinesInFile(funcInfo.filePath);
  if (lineNumberOfFunctionDeclaration > allLines.length - 1) {
    return [];
  }
  const functionDaclarationLine = allLines[lineNumberOfFunctionDeclaration];
  if (
    (functionDaclarationLine.includes('export') && functionDaclarationLine.includes(funcInfo.functionName)) === false
  ) {
    return [];
  }

  const lines = allLines
    .filter((_, index) => index < lineNumberOfFunctionDeclaration)
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .filter((line) => line.startsWith('//') === false);

  const firstLineAboveFunctionDeclaration = lines.pop();
  if (firstLineAboveFunctionDeclaration !== LAST_LINE_OF_JSDOC) {
    return [];
  }

  const jsDocComments: string[] = [];
  for (let index = lines.length - 1; index >= 0; index--) {
    const line = lines[index];
    if (line === FIRST_LINE_OF_JSODC) {
      break;
    }
    jsDocComments.unshift(line);
  }

  return jsDocComments;
};
