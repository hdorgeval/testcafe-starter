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

// tslint:disable-next-line:no-console
console.log("Tests will run with the following global configuration: ");
jsome(config);

export default config;

export function currentConfig(t?: TestController): IConfig {
  if (t && t.ctx && t.ctx.config) {
    return t.ctx.config;
  }

  if (t && t.fixtureCtx &&  t.fixtureCtx.config) {
    return t.fixtureCtx.config;
  }

  return {...config};
}
