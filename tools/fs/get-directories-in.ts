import { PathLike, readdirSync } from 'fs';
import { join } from 'path';
import { isDirectory } from './is-directory';

export const getDirectoriesIn = (path: PathLike) => {
  const result = readdirSync(path)
    .map((name) => join(path.toString(), name))
    .filter(isDirectory);

  return new FluentSyntaxForDirectoryFiltering(result);
};
export class FluentSyntaxForDirectoryFiltering {
  private allResults: string[] = [];
  private filteredResults: string[] = [];

  constructor(paths: string[]) {
    this.allResults = [...paths];
    this.filteredResults = [...paths];
  }
  public takeAll() {
    return this.allResults;
  }
  public takeFiltered() {
    return this.filteredResults;
  }
  public withFilter(filter: (path: string) => boolean) {
    this.filteredResults = [...this.filteredResults].filter(filter);
    return this;
  }
}
