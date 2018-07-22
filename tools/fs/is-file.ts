import { PathLike, statSync } from 'fs';

export const isFile = (path: PathLike) => statSync(path).isFile();
