import { sep } from "path";

export const ignoreDirThatIsIn = (folders: string[]) =>
  (path: string) => {
    return path
      .split(sep)
      .filter((folderName) =>
        folders.filter((folderToIgnore) => folderToIgnore === folderName )
        .length > 0,
      )
      .length === 0;
  };
