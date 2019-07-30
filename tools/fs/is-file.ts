import { PathLike, statSync } from 'fs';

export const isFile = (path: PathLike): boolean => statSync(path).isFile();
