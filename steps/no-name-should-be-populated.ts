import { t } from 'testcafe';
import * as selector from '../selectors';

/**
 * @step
 * @then("no name should be populated")
 */
export default async (): Promise<void> => {
  await t.expect(selector.userNameInputBox.value).eql('');
};
