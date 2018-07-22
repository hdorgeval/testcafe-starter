import { PathLike, readFileSync } from 'fs';
import { EOL } from 'os';

export const readAllLinesInFile = (filePath: PathLike): string[] => {
  const lines = readFileSync(filePath, 'utf8').split(EOL);
  return lines;
};
