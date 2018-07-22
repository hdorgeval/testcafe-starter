import * as minimist from 'minimist';
import { IParsedConfig } from './config.interface';
import { env } from './environments';
import { user } from './personas';

const args = minimist(process.argv.slice(2));

// get the options --env=xxx --user=yyy from the command line
const config: IParsedConfig = {
  env: env(args.env),
  user: user(args.user),
};

// get the option --testSpeed=xxx from the command line
if (args && args.testSpeed) {
  config.testSpeed = Number(args.testSpeed);
}
config.timeout = {};

// get the option --longTimeout=xxx from the command line
if (args && args.longTimeout) {
  config.timeout = {
    longTimeout: args.longTimeout,
  };
}

// get the option --shortTimeout=xxx from the command line
if (args && args.shortTimeout) {
  config.timeout = {
    ...config.timeout,
    shortTimeout: args.shortTimeout,
  };
}

export const parsedConfig = config;
