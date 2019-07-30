import { sep } from 'path';

export const ignoreDotDir = (path: string): boolean => {
  return (
    path.split(sep).filter((folderName: string): boolean => folderName.startsWith('.')).length === 0
  );
};
