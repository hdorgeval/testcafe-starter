import { parse, sep } from 'path';
import { getFileName } from './get-filename';

export const getFilePathWithoutExtension = (path: string): string => {
  const fileName = getFileName(path);
  const filenameWithoutExtension = fileName ? parse(fileName).name : undefined;
  const foldersHierarchy = path.split(sep);
  foldersHierarchy.pop();
  if (filenameWithoutExtension) {
    foldersHierarchy.push(filenameWithoutExtension);
  }
  return foldersHierarchy.join(sep);
};
