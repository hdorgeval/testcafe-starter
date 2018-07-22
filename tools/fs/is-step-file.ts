import { PathLike } from 'fs';
import { readAllLinesInFile } from './read-all-lines-in-file';

export const isStepFile = (path: PathLike): boolean => {
  try {
    /* prettier-ignore */
    return readAllLinesInFile(path)
      .filter((line) => line.endsWith(' * @step'))
      .length > 0;
  } catch (error) {
    return false;
  }
};
