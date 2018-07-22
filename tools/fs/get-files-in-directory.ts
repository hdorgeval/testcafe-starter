import { PathLike, readdirSync } from 'fs';
import { join } from 'path';
import { isFile } from './is-file';

const defaultFileFilter = () => true;

export const getFilesInDirectory = (path: PathLike, fileFilter?: (path: string) => boolean) =>
  readdirSync(path)
    .map((name) => join(path.toString(), name))
    .filter(isFile)
    .filter(fileFilter || defaultFileFilter);
