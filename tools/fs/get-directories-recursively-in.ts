import { FluentSyntaxForDirectoryFiltering, getDirectoriesIn } from './get-directories-in';
import { PathLike } from 'fs';

function getAllDirectoriesRecursivelyIn(path: PathLike): string[] {
  const subDirs = getDirectoriesIn(path).takeAll();
  const result: string[] = [...subDirs];
  subDirs.map((dir: string): void => {
    result.push(...getAllDirectoriesRecursivelyIn(dir));
  });

  return result;
}

export const getDirectoriesRecursivelyIn = (path: PathLike): FluentSyntaxForDirectoryFiltering => {
  const result = getAllDirectoriesRecursivelyIn(path);
  return new FluentSyntaxForDirectoryFiltering(result);
};
