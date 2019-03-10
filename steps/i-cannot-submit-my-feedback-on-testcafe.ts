import { t } from 'testcafe';
import { getCurrentConfig } from '../config/testcafe-config';
import * as selector from '../selectors';

/**
 * @step
 * @then("I cannot submit my feedback on testcafe")
 */
export default async (_: string) => {
  // get the config that was injected into the fixture/test context by the feature
  const config = getCurrentConfig(t);
  await t.expect(selector.submitButton.hasAttribute('disabled')).ok({ timeout: config.timeout.longTimeout });
};
