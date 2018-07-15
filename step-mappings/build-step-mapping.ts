import { config } from "./config";
import { getDirectoriesRecursivelyIn } from "./utils/fs/get-directories-recursively-in";
import { getFilesInDirectory } from "./utils/fs/get-files-in-directory";
import { ignoreDirThatIsIn } from "./utils/fs/ignore-dir-that-is-in";
import { ignoreDotDir } from "./utils/fs/ignore-dot-dir";
import { ignoreNodeModules } from "./utils/fs/ignore-node-modules";
import { isStepFile } from "./utils/fs/is-step-file";

const stepFiles: string[] = [];
const folders = getDirectoriesRecursivelyIn(config.rootDirectory)
  .withFilter(ignoreDotDir)
  .withFilter(ignoreNodeModules)
  .withFilter(ignoreDirThatIsIn(config.excludedFolders))
  .takeFiltered();

folders
  .map((path) => stepFiles.push(...getFilesInDirectory(path, (p) => p.endsWith(".ts") && isStepFile(p))));

// tslint:disable-next-line:no-console
console.log(`[build-step-mappings] found step files: \n${stepFiles.join("\n")}`);
