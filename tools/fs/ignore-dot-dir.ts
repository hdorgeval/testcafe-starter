import { sep } from 'path';

export const ignoreDotDir = (path: string) => {
  return path.split(sep).filter((folderName) => folderName.startsWith('.')).length === 0;
};
