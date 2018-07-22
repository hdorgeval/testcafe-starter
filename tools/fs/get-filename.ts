import { sep } from 'path';
export const getFileName = (path: string): string | undefined => {
  /* prettier-ignore */
  return path
    .split(sep)
    .pop();
};
