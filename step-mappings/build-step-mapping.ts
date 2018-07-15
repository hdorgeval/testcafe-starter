import { config } from "./config";
import { getDirectoriesRecursivelyIn } from "./utils/fs/get-directories-recursively-in";
import { ignoreDirThatIsIn } from "./utils/fs/ignore-dir-that-is-in";
import { ignoreDotDir } from "./utils/fs/ignore-dot-dir";
import { ignoreNodeModules } from "./utils/fs/ignore-node-modules";

const folders = getDirectoriesRecursivelyIn(config.rootDirectory)
  .withFilter(ignoreDotDir)
  .withFilter(ignoreNodeModules)
  .withFilter(ignoreDirThatIsIn(config.excludedFolders))
  .takeFiltered();

// tslint:disable-next-line:no-console
console.log(`[build-step-mappings] found folders: \n${folders.join("\n")}`);
