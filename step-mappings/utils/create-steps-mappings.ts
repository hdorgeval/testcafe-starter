import { PathLike, writeFileSync } from "fs";
import { EOL } from "os";
import { sep } from "path";
import { config } from "../config";
import { getFilePathWithoutExtension } from "./fs/get-filepath-without-extension";

export const createStepsMapping = (path: PathLike) => {
  return {
    from: (stepFiles: string[]): void => {
      // tslint:disable-next-line:no-console
      console.log(stepFiles);
      const lines: string[] = [];
      lines.push(...getImports());
      lines.push("");
      writeFileSync(path, lines.join(EOL));
    },
  };
};

function getImports(): string[] {
  const stepsBarrelRelativePath = config.stepsBarrelFile.replace(`${config.rootDirectory}${sep}`, "");
  const lines: string[] = [];
  lines.push("// tslint:disable:max-line-length");
  lines.push(
    // tslint:disable-next-line:max-line-length
    `import * as step from ${config.quoteMark}${getFilePathWithoutExtension(stepsBarrelRelativePath)}${config.quoteMark};`,
  );
  return lines;
}
