import { Config } from '../config/config.interface';
import { getCurrentConfig } from '../config/testcafe-config';
import { PageModel } from '../models';
import * as selector from '../selectors';
import { t } from 'testcafe';

/**
 * @step
 * @given,@when("I enter my name")
 */
export default async (): Promise<void> => {
  // get the config that was injected into the fixture/test context by the feature
  const config: Config = getCurrentConfig(t);

  // get the page object model that was injected in the context
  const inputData = t.ctx.inputData as PageModel;

  const value = inputData.name || '';

  await t
    .setTestSpeed(config.testSpeed)
    .hover(selector.userNameInputBox)
    .expect(selector.userNameInputBox.hasAttribute('disabled'))
    .notOk()
    .click(selector.userNameInputBox)
    .typeText(selector.userNameInputBox, value, { replace: true })
    .pressKey('tab');
};
