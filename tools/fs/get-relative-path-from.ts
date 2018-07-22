import { dirname, relative, sep } from 'path';
import { getFileName } from './get-filename';
import { isFile } from './is-file';

export const getRelativePathOf = (fileOrFolderPath: string) => {
  /* prettier-ignore */
  const toFolder: string = isFile(fileOrFolderPath) 
    ? dirname(fileOrFolderPath) 
    : fileOrFolderPath;

  /* prettier-ignore */
  const toFilename = isFile(fileOrFolderPath) 
    ? getFileName(fileOrFolderPath) 
    : undefined;

  return {
    from: (originFileOrFolderPath: string) => {
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
