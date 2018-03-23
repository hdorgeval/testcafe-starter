import "testcafe";
import {IConfig} from "./config.interface";
import {defaultConfig} from "./default-config";
import {parsedConfig} from "./parsed-config";

// tslint:disable-next-line:no-var-requires
const jsome = require("jsome");

const config: IConfig = {
  ...defaultConfig,
};

if (parsedConfig && parsedConfig.env) {
  config.env = parsedConfig.env;
}

if (parsedConfig && parsedConfig.user) {
  config.user = parsedConfig.user;
}
if (parsedConfig && parsedConfig.testcafe && parsedConfig.testcafe.testSpeed) {
  config.testcafe.testSpeed = parsedConfig.testcafe.testSpeed;
}

if (parsedConfig && parsedConfig.testcafe && parsedConfig.testcafe.timeout) {
  config.testcafe.timeout = {
    ...config.testcafe.timeout,
    ...parsedConfig.testcafe.timeout,
  };
}

// tslint:disable-next-line:no-console
console.log("Tests will run with the following global configuration: ");
jsome(config);

export default config;

export function getCurrentConfig(t?: TestController): IConfig {
  if (t && t.ctx && t.ctx.config) {
    return t.ctx.config;
  }

  if (t && t.fixtureCtx &&  t.fixtureCtx.config) {
    return t.fixtureCtx.config;
  }

  return JSON.parse(JSON.stringify(config));
}
