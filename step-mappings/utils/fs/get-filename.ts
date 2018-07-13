import { sep } from "path";
export const getFileName = (path: string) => {
  return path
    .split(sep)
    .pop();
};
