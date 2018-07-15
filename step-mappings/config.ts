export const config: IStepMappingConfig = {
  excludedFolders: ["config", "build", "step-mappings", "reports", "step-snippets", "step-templates", "tools"],
  rootDirectory: process.cwd(),
};

export interface IStepMappingConfig {
  excludedFolders: string[];
  rootDirectory: string;
}
