import { t } from 'testcafe';
import { IConfig } from '../config/config.interface';
import { getCurrentConfig } from '../config/testcafe-config';

/**
 * @step
 * @given,@when("I navigate to the testcafe sample page")
 */
export default async (_: string) => {
  // get the config that was injected into the fixture/test context by the feature
  const config: IConfig = getCurrentConfig(t);

  ensureEnvIsSetupInConfigurationFile(config);
  if (config && config.env) {
    await t.navigateTo(config.env.url);
  }
};

function ensureEnvIsSetupInConfigurationFile(config: IConfig) {
  if (config && config.env && config.env.url) {
    return;
  }
  throw new Error('env.url is not setup in the configuration file. Check testcafe-config.ts file is correctly setup');
}
