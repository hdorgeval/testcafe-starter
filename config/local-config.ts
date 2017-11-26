import {IConfig} from "./config.interface";

export default {
  env: "any",
  testcafe: {
    testSpeed: 0.7,
  },
  url: "http://devexpress.github.io/testcafe/example",
  user : {
    name: "john doe",
  },
} as IConfig;
