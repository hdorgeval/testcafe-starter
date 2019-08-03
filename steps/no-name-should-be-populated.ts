import * as selector from '../selectors';
import { t } from 'testcafe';

/**
 * @step
 * @then("no name should be populated")
 */
export default async (): Promise<void> => {
  await t.expect(selector.userNameInputBox.value).eql('');
};
