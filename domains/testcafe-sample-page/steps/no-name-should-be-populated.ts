import { t } from 'testcafe';
import * as selector from '../selectors';

/**
 * @step
 * @then("no name should be populated")
 */
export default async (_: string) => {
  await t.expect(selector.userNameInputBox.value).eql('');
};
