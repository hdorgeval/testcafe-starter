import { PathLike, statSync } from 'fs';

export const isDirectory = (path: PathLike): boolean => statSync(path).isDirectory();
