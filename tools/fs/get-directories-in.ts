import { isDirectory } from './is-directory';
import { PathLike, readdirSync } from 'fs';
import { join } from 'path';
export class FluentSyntaxForDirectoryFiltering {
  private allResults: string[] = [];
  private filteredResults: string[] = [];

  public constructor(paths: string[]) {
    this.allResults = [...paths];
    this.filteredResults = [...paths];
  }
  public takeAll(): string[] {
    return this.allResults;
  }
  public takeFiltered(): string[] {
    return this.filteredResults;
  }
  public withFilter(filter: (path: string) => boolean): FluentSyntaxForDirectoryFiltering {
    this.filteredResults = [...this.filteredResults].filter(filter);
    return this;
  }
}

export const getDirectoriesIn = (path: PathLike): FluentSyntaxForDirectoryFiltering => {
  const result = readdirSync(path)
    .map((name: string): string => join(path.toString(), name))
    .filter(isDirectory);

  return new FluentSyntaxForDirectoryFiltering(result);
};
