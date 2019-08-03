import { Config } from '../config/config.interface';
import { getCurrentConfig } from '../config/testcafe-config';
import { t } from 'testcafe';

/**
 * @step
 * @given,@when("I navigate to the testcafe sample page")
 */
export default async (): Promise<void> => {
  // get the config that was injected into the fixture/test context by the feature
  const config: Config = getCurrentConfig(t);

  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  ensureEnvIsSetupInConfigurationFile(config);
  if (config && config.env) {
    await t.navigateTo(config.env.url);
  }
};

function ensureEnvIsSetupInConfigurationFile(config: Config): void {
  if (config && config.env && config.env.url) {
    return;
  }
  throw new Error(
    'env.url is not setup in the configuration file. Check testcafe-config.ts file is correctly setup'
  );
}
