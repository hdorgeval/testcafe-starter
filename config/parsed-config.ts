import * as minimist from "minimist";
import { IConfig } from "./config.interface";
import { env } from "./environments";
import { user } from "./personas";

const args = minimist(process.argv.slice(2));

export const parsedConfig = {
  env: env(args.env),
  user: user(args.user),
} as IConfig;
