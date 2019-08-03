import { getFileName } from './get-filename';
import { isFile } from './is-file';
import { dirname, relative, sep } from 'path';

export const getRelativePathOf = (
  fileOrFolderPath: string
): { from: (originFileOrFolderPath: string) => string } => {
  /* prettier-ignore */
  const toFolder: string = isFile(fileOrFolderPath) 
    ? dirname(fileOrFolderPath) 
    : fileOrFolderPath;

  /* prettier-ignore */
  const toFilename = isFile(fileOrFolderPath) 
    ? getFileName(fileOrFolderPath) 
    : undefined;

  return {
    from: (originFileOrFolderPath: string): string => {
      const fromFolder: string = isFile(originFileOrFolderPath)
        ? dirname(originFileOrFolderPath)
        : originFileOrFolderPath;

      const relativeFolderPath = relative(fromFolder, toFolder) || '.';

      /* prettier-ignore */
      const result = toFilename 
        ? `${relativeFolderPath}${sep}${toFilename}` 
        : relativeFolderPath;

      return result;
    },
  };
};
