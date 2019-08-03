import { readAllLinesInFile } from './read-all-lines-in-file';
import { PathLike } from 'fs';

export const isStepFile = (path: PathLike): boolean => {
  try {
    /* prettier-ignore */
    return readAllLinesInFile(path)
      .filter((line: string): boolean => line.endsWith(' * @step'))
      .length > 0;
  } catch (error) {
    return false;
  }
};
