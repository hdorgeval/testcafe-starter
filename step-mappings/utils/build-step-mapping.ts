import { config } from "../config";
import { createStepsBarrel } from "./create-steps-barrel";
import { getDirectoriesRecursivelyIn } from "./fs/get-directories-recursively-in";
import { getFilesInDirectory } from "./fs/get-files-in-directory";
import { ignoreDirThatIsIn } from "./fs/ignore-dir-that-is-in";
import { ignoreDotDir } from "./fs/ignore-dot-dir";
import { ignoreNodeModules } from "./fs/ignore-node-modules";
import { isStepFile } from "./fs/is-step-file";

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

createStepsBarrel(config.stepsBarrelFile)
  .from(stepFiles);
