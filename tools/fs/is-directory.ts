import { PathLike, statSync } from 'fs';

export const isDirectory = (path: PathLike) => statSync(path).isDirectory();
