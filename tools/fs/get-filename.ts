import { sep } from "path";
export const getFileName = (path: string): string | undefined => {
  return path
    .split(sep)
    .pop();
};
