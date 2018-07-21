import * as minimist from "minimist";
import { IConfig, ITimeout } from "./config.interface";
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
  config.testSpeed = Number(args.testSpeed);
}
config.timeout = {} as ITimeout;

// get the option --longTimeout=xxx from the command line
if (args && args.longTimeout) {
  config.timeout = {
    longTimeout: args.longTimeout,
  } as ITimeout;
}

// get the option --shortTimeout=xxx from the command line
if (args && args.shortTimeout) {
  config.timeout = {
    ...config.timeout,
    shortTimeout: args.shortTimeout,
  } as ITimeout;
}

export const parsedConfig = config;
