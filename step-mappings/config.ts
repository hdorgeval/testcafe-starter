import { join } from "path";

export const config: IStepMappingConfig = {
  excludedFolders: ["config", "build", "step-mappings", "reports", "step-snippets", "step-templates", "tools"],
  quoteMark: "\"",
  rootDirectory: process.cwd(),
  stepsBarrelFile: join("step-mappings", "steps.ts"),
};

export interface IStepMappingConfig {
  excludedFolders: string[];
  rootDirectory: string;
  stepsBarrelFile: string;
  quoteMark: string;
}
