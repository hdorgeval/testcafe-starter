import { PathLike } from 'fs';
import { FluentSyntaxForDirectoryFiltering, getDirectoriesIn } from './get-directories-in';

export const getDirectoriesRecursivelyIn = (path: PathLike) => {
  const result = getAllDirectoriesRecursivelyIn(path);
  return new FluentSyntaxForDirectoryFiltering(result);
};

function getAllDirectoriesRecursivelyIn(path: PathLike): string[] {
  const subDirs = getDirectoriesIn(path).takeAll();
  const result: string[] = [...subDirs];
  subDirs.map((dir) => {
    result.push(...getAllDirectoriesRecursivelyIn(dir));
  });

  return result;
}
