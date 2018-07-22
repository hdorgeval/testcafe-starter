import { join } from 'path';

export const config: IStepMappingConfig = {
  excludedFolders: [
    // list of folders that should be excluded while searching all step files
    'config',
    'build',
    'step-mappings',
    'reports',
    'step-snippets',
    'step-templates',
    'tools',
  ],
  quoteMark: "'", // quote character that should be used to generate import/export statements
  rootDirectory: process.cwd(),
  stepsBarrelFile: join('step-mappings', 'steps.ts'), // absolute path from rootDirectory
  stepsMappingFile: join('step-mappings', 'index.ts'), // absolute path from rootDirectory
  tab: '  ', // tab character that should be used to generate indented statements
};

export interface IStepMappingConfig {
  excludedFolders: string[];
  rootDirectory: string;
  stepsBarrelFile: string;
  quoteMark: string;
  stepsMappingFile: string;
  tab: string;
}
