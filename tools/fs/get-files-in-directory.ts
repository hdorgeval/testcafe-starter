import { PathLike, readdirSync } from 'fs';
import { join } from 'path';
import { isFile } from './is-file';

const defaultFileFilter = (): boolean => true;

export const getFilesInDirectory = (
  path: PathLike,
  fileFilter?: (path: string) => boolean
): string[] =>
  readdirSync(path)
    .map((name: string): string => join(path.toString(), name))
    .filter(isFile)
    .filter(fileFilter || defaultFileFilter);
