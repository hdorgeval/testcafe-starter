import { PathLike } from 'fs';
import { readAllLinesInFile } from './read-all-lines-in-file';

export const getExportedFunctionsIn = (filePath: PathLike): IFuncInfo[] => {
  try {
    const results: IFuncInfo[] = [];
    const lines = readAllLinesInFile(filePath);
    const module = require(filePath.toString());
    for (const key in module) {
      if (module.hasOwnProperty(key) && typeof module[key] === 'function') {
        const lineNumber = 1 + lines.findIndex((line) => line.includes('export ') && line.includes(key));
        const functionName = key;
        results.push({ functionName, lineNumber, filePath });
      }
    }
    return results;
  } catch (error) {
    return [];
  }
};

export interface IFuncInfo {
  functionName: string;
  lineNumber: number;
  filePath: PathLike;
}
