import { getFileName } from "./get-filename";

export const ignoreDirThatStartsWith = (searchStrings: string[]) =>
  (path: string) => {
    const folderName = getFileName(path);
    return folderName
    ? searchStrings
      .filter((searchString) => folderName.startsWith(searchString))
      .length === 0
    : true;
  };
