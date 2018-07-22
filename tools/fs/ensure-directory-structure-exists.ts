import { existsSync, mkdirSync } from 'fs';
import { sep } from 'path';

export const ensureDirectoryStructureExists = (filePath: string) => {
  const dirs = filePath.split(sep);
  dirs.pop();

  let partialPath: string = '.';
  dirs.map((dir) => {
    partialPath = [partialPath, dir].join(sep);
    ensureDirectoryExists(partialPath);
  });
};

const ensureDirectoryExists = (directoryPath: string) => {
  if (existsSync(directoryPath)) {
    return;
  }
  mkdirSync(directoryPath);
};
