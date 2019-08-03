import { readAllLinesInFile } from './read-all-lines-in-file';
import { PathLike } from 'fs';

export const getExportedFunctionsIn = (filePath: PathLike): FuncInfo[] => {
  try {
    const results: FuncInfo[] = [];
    const lines = readAllLinesInFile(filePath);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const module = require(filePath.toString());
    for (const key in module) {
      if (Object.prototype.hasOwnProperty.call(module, key) && typeof module[key] === 'function') {
        const lineNumber =
          1 +
          lines.findIndex(
            (line: string): boolean => line.includes('export ') && line.includes(key)
          );
        const functionName = key;
        results.push({ functionName, lineNumber, filePath });
      }
    }
    return results;
  } catch (error) {
    return [];
  }
};

export interface FuncInfo {
  functionName: string;
  lineNumber: number;
  filePath: PathLike;
}
