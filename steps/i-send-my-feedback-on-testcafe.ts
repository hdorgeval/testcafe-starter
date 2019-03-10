import { t } from 'testcafe';
import { IConfig } from '../config/config.interface';
import { getCurrentConfig } from '../config/testcafe-config';
import * as selector from '../selectors';

/**
 * @step
 * @when("I send my feedback on testcafe")
 */
export default async (_: string) => {
  // get the config that was injected into the fixture/test context by the feature
  const config: IConfig = getCurrentConfig(t);

  await t
    .setTestSpeed(config.testSpeed)
    .hover(selector.submitButton)
    .expect(selector.submitButton.hasAttribute('disabled'))
    .notOk({ timeout: config.timeout.longTimeout })
    .click(selector.submitButton);
};
