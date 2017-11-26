import { IConfig } from "./config.interface";

export default {
  env: "devci",
  testcafe: {
    testSpeed: 1.0,
  },
  url: "http://devexpress.github.io/testcafe/example",
  user: {
    name: "john doe",
  },
} as IConfig;
