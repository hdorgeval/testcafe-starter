import {IConfig} from "./config.interface";
import {env} from "./environments";
import { user } from "./personas";

export const defaultConfig = {
  env: env("local"),
  testcafe: {
    testSpeed: 0.7,
  },
  user: user("user1@example.com"),
} as IConfig;
