import { existsSync, mkdirSync } from 'fs';
import { sep } from 'path';

const ensureDirectoryExists = (directoryPath: string): void => {
  if (existsSync(directoryPath)) {
    return;
  }
  mkdirSync(directoryPath);
};
export const ensureDirectoryStructureExists = (filePath: string): void => {
  const dirs = filePath.split(sep);
  dirs.pop();

  let partialPath = '.';
  dirs.forEach((dir: string): void => {
    partialPath = [partialPath, dir].join(sep);
    ensureDirectoryExists(partialPath);
  });
};
