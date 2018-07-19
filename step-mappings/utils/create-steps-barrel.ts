import { PathLike, writeFileSync } from "fs";
import { EOL } from "os";
import { config } from "../config";
import { ensureDirectoryStructureExists } from "./fs/ensure-directory-structure-exists";
import { getFileName } from "./fs/get-filename";
import { getFilePathWithoutExtension } from "./fs/get-filepath-without-extension";
import { getFuncNameFrom } from "./fs/get-func-name-from-file-name";
import { getRelativePathOf } from "./fs/get-relative-path-from";

let exportIndex: number = -1;
function nextIndex() {
  exportIndex += 1;
  return exportIndex;
}
export const createStepsBarrel = (barrelFilePath: PathLike) => {
  ensureDirectoryStructureExists(barrelFilePath.toString());
  writeFileSync(barrelFilePath, "searching steps ...");
  return {
    from: (stepFiles: string[]): void => {
      const lines: string[] = [];
      lines.push("// tslint:disable:max-line-length");
      stepFiles
        .map((filePath) => {
          const fileName = getFileName(filePath) || `defaultStep${nextIndex()}` ;
          const relativePath = getRelativePathOf(filePath).from(barrelFilePath.toString());

          const defaultExportName = getFuncNameFrom(fileName);
          const module = require(filePath);

          module.default
          ? lines.push(
            // tslint:disable-next-line:max-line-length
            `export { default as ${defaultExportName} } from ${config.quoteMark}${getFilePathWithoutExtension(relativePath)}${config.quoteMark};`,
          )
          : lines.push(
            `export * from ${config.quoteMark}${getFilePathWithoutExtension(relativePath)}${config.quoteMark};`,
          );
        });
      lines.push("");

      writeFileSync(barrelFilePath, lines.join(EOL));
    },
  };
};
