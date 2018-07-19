import { join } from "path";

export const config: IStepMappingConfig = {
  excludedFolders: ["config", "build", "step-mappings", "reports", "step-snippets", "step-templates", "tools"],
  quoteMark: "\"",
  rootDirectory: process.cwd(),
  stepsBarrelFile: join("step-mappings", "steps.ts"), // absolute path from rootDirectory
  stepsMappingFile: join("step-mappings", "index.ts"), // absolute path from rootDirectory
  tab: "  ",
};

export interface IStepMappingConfig {
  excludedFolders: string[];
  rootDirectory: string;
  stepsBarrelFile: string;
  quoteMark: string;
  stepsMappingFile: string;
  tab: string;
}
