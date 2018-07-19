import { PathLike, writeFileSync } from "fs";
import { EOL } from "os";
import { config } from "../config";
import { ensureDirectoryStructureExists } from "./fs/ensure-directory-structure-exists";
import { getExportedFunctionsIn } from "./fs/get-exported-functions-in";
import { getFileName } from "./fs/get-filename";
import { getFilePathWithoutExtension } from "./fs/get-filepath-without-extension";
import { getFuncNameFrom } from "./fs/get-func-name-from-file-name";
import { getJsDocCommentsOf } from "./fs/get-jsdoc-of-function";
import { getRelativePathOf } from "./fs/get-relative-path-from";

let exportIndex: number = -1;
function nextIndex() {
  exportIndex += 1;
  return exportIndex;
}
export const createStepsMapping = (path: PathLike) => {
  ensureDirectoryStructureExists(path.toString());
  writeFileSync(path, "importing steps and creating given/when/then mappings...");
  return {
    from: (stepFiles: string[]): void => {
      // tslint:disable-next-line:no-console
      console.log(stepFiles);
      const lines: string[] = [];
      lines.push(...createImports());
      lines.push("");
      lines.push(...createGivenStepMappingsFrom(stepFiles));
      lines.push("");
      writeFileSync(path, lines.join(EOL));
    },
  };
};

function createImports(): string[] {
  const stepsBarrelRelativePath = getRelativePathOf(
    config.stepsBarrelFile,
  ).from(config.stepsMappingFile);
  const lines: string[] = [];
  lines.push("// tslint:disable:max-line-length");
  lines.push(
    // tslint:disable-next-line:max-line-length
    `import * as step from ${config.quoteMark}${getFilePathWithoutExtension(
      stepsBarrelRelativePath,
    )}${config.quoteMark};`,
  );
  return lines;
}

export interface IStepMapping {
  stepSentence: string;
  stepFunc: string;
}

function createGivenStepMappingsFrom(stepFiles: string[]) {
  const lines: string[] = [];
  lines.push("export const givenStepMappings = {");
  getGivenStepMappingsFrom(stepFiles).map((stepMapping) => {
    lines.push(
      `${config.tab}${config.quoteMark}${stepMapping.stepSentence}${
        config.quoteMark
      }: step.${stepMapping.stepFunc},`,
    );
  });
  lines.push("};");
  return lines;
}

function getGivenStepMappingsFrom(stepFiles: string[]): IStepMapping[] {
  const results: IStepMapping[] = [];
  stepFiles.map((filePath) => {
    const fileName = getFileName(filePath) || `defaultStep${nextIndex()}`;
    const defaultExportName = getFuncNameFrom(fileName);
    getExportedFunctionsIn(filePath).map((funcInfo) => {
      return getJsDocCommentsOf(funcInfo)
        .filter((comment) => comment.includes("@given"))
        .map((comment: string) => {
          const firstIndex = comment.indexOf("(") + 2;
          const lastIndex = comment.lastIndexOf(")") - 1;
          const stepSentence = comment.substring(firstIndex, lastIndex);
          const stepFunc =
            funcInfo.functionName === "default"
              ? defaultExportName
              : funcInfo.functionName;
          return { stepSentence, stepFunc };
        })
        .map((stepMapping: IStepMapping) => results.push(stepMapping));
    });
  });
  return results;
}
