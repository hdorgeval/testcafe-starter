import { getDirectoriesRecursivelyIn } from '../../tools/fs/get-directories-recursively-in';
import { getFilesInDirectory } from '../../tools/fs/get-files-in-directory';
import { ignoreDirThatIsIn } from '../../tools/fs/ignore-dir-that-is-in';
import { ignoreDotDir } from '../../tools/fs/ignore-dot-dir';
import { ignoreNodeModules } from '../../tools/fs/ignore-node-modules';
import { isStepFile } from '../../tools/fs/is-step-file';
import { config } from '../config';
import { createStepsBarrel } from './create-steps-barrel';
import { createStepsMapping } from './create-steps-mappings';

const stepFiles: string[] = [];
const folders = getDirectoriesRecursivelyIn(config.rootDirectory)
  .withFilter(ignoreDotDir)
  .withFilter(ignoreNodeModules)
  .withFilter(ignoreDirThatIsIn(config.excludedFolders))
  .takeFiltered();

folders.map((path) => stepFiles.push(...getFilesInDirectory(path, (p) => p.endsWith('.ts') && isStepFile(p))));

stepFiles.length > 0
  ? // tslint:disable-next-line:no-console
    console.log(`[build-step-mappings] found step files: \n${stepFiles.join('\n')}`)
  : // tslint:disable-next-line:no-console
    console.log('[build-step-mappings] no step found');

createStepsBarrel(config.stepsBarrelFile).from(stepFiles);

createStepsMapping(config.stepsMappingFile).from(stepFiles);
