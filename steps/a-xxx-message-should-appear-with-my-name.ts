import { t } from 'testcafe';
import { getCurrentConfig } from '..//config/testcafe-config';
import { IPageModel } from '../models';
import * as selector from '../selectors';
import { firstMatch } from '../tools/regex-match';

/**
 * @step
 * @then("a 'Thank you' message should appear with my name")
 */
export default async (stepName: string) => {
  // get the page object model that was injected in the context
  const inputData = t.ctx.inputData as IPageModel;
  const config = getCurrentConfig(t);

  // extract the message embedded in the step name
  // by convention this value is prefixed and postfixed by a single quote
  const message = firstMatch(/'.*'/g, stepName);
  if (message === null) {
    throw new Error(`Cannot extract message from the step name "${stepName}"`);
  }

  const myName = inputData.name || '';
  await t
    .expect(selector.resultContent.exists)
    .ok({ timeout: config.timeout.longTimeout })
    .expect(selector.resultContent.innerText)
    .contains(message)
    .expect(selector.resultContent.innerText)
    .contains(myName);
};
