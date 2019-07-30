import { sep } from 'path';

export const ignoreDirThatIsIn = (folders: string[]): ((path: string) => boolean) => (
  path: string
): boolean => {
  return (
    path
      .split(sep)
      .filter(
        (folderName: string): boolean =>
          folders.filter((folderToIgnore: string): boolean => folderToIgnore === folderName)
            .length > 0
      ).length === 0
  );
};
