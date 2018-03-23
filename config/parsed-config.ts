import * as minimist from "minimist";
import { IConfig, ITestcafeOptions } from "./config.interface";
import { env } from "./environments";
import { user } from "./personas";

const args = minimist(process.argv.slice(2));

// get the options --env=xxx --user=yyy from the command line
const config = {
  env: env(args.env),
  user: user(args.user),
} as Partial<IConfig>;

// get the option --testSpeed=xxx from the command line
if (args && args.testSpeed) {
  config.testcafe = {
    testSpeed: Number(args.testSpeed),
  } as ITestcafeOptions;
}

// get the option --longTimeout=xxx from the command line
if (args && args.longTimeout) {
  config.testcafe = {
    ...config.testcafe,
    timeout: {
      ...(config.testcafe
        ? config.testcafe.timeout
        : {}
      ),
      longTimeout: Number(args.longTimeout),
    },
  } as ITestcafeOptions;
}

// get the option --shortTimeout=xxx from the command line
if (args && args.shortTimeout) {
  config.testcafe = {
    ...config.testcafe,
    timeout: {
      ...(config.testcafe
        ? config.testcafe.timeout
        : {}
      ),
      shortTimeout: Number(args.shortTimeout),
    },
  } as ITestcafeOptions;
}

export const parsedConfig = config;
