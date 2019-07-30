export const environments: EnvInfo[] = [
  { name: 'local', url: 'http://devexpress.github.io/testcafe/example' },
  { name: 'devci', url: 'http://devci.my-company.com' },
  { name: 'uat1', url: 'http://uat1.my-company.com' },
  { name: 'uat2', url: 'http://uat2.my-company.com' },
  { name: 'prod', url: 'http://prod.my-company.com' },
];

const envNames: string[] = environments.map((e: EnvInfo): string => e.name);

export function env(name: TargetEnvironnement | undefined): EnvInfo | undefined {
  if (name === undefined) {
    // eslint-disable-next-line no-console
    console.warn(`Environment name is undefined. Available environments are: ${envNames}.
      (You can optionnaly add to the testcafe command-line the option: --env=${envNames[0]})`);
    return undefined;
  }
  const foundEnvironment = environments.filter((e: EnvInfo): boolean => e.name === name)[0];
  if (foundEnvironment) {
    return foundEnvironment;
  }

  // eslint-disable-next-line no-console
  console.warn(`Environment "${name}" is not found. Available environments are: ${envNames}`);
  return undefined;
}

export interface EnvInfo {
  name: TargetEnvironnement;
  url: string;
}
export type TargetEnvironnement = 'any' | 'local' | 'devci' | 'uat1' | 'uat2' | 'prod';
