import { getFileName } from "./get-filename";

export const ignoreDotDir = (path: string) => {
  const folderName = getFileName(path);
  return folderName
    ? folderName.startsWith(".") === false
    : true;
};
