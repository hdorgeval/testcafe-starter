import { PathLike, writeFileSync } from "fs";
import { EOL } from "os";
import { sep } from "path";
import { config } from "../config";
import { getFilePathWithoutExtension } from "./fs/get-filepath-without-extension";

export const createStepsBarrel = (path: PathLike) => {
  return {
    from: (stepFiles: string[]): void => {
      const lines: string[] = [];
      stepFiles
        .map((filePath) => {
          const relativePath = filePath.replace(`${config.rootDirectory}${sep}`, "");
          lines.push(
            `export * from ${config.quoteMark}${getFilePathWithoutExtension(relativePath)}${config.quoteMark};`,
          );
        });
      lines.push("");
      writeFileSync(path, lines.join(EOL));
    },
  };
};
