import { PathLike, readFileSync } from 'fs';

export const readAllLinesInFile = (filePath: PathLike): string[] => {
  const lines = readFileSync(filePath, 'utf8').split(/\n|\r/);
  return lines;
};
