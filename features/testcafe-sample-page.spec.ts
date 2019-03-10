import 'testcafe';
import { getCurrentConfig } from '../config/testcafe-config';
import { pageModel } from '../models';
import { env } from '../step-filters/env';
import { and, given, then, when } from '../step-runner';

/**
 * @feature
 */
fixture('Feature: TestCafe Example')
  .before(async (ctx) => {
    // inject global configuration in the fixture context
    ctx.config = getCurrentConfig();
  })
  .beforeEach(async (t) => {
    // inject page model in the test context
    t.ctx.inputData = pageModel;
    await given('I navigate to the testcafe sample page');
  });

test('Scenario: cannot submit my feedback when I did not enter my name', async () => {
  await then('no name should be populated');
  await and('I cannot submit my feedback on testcafe');
});

test('Scenario: can send feedback with my name only', async () => {
  await when('I enter my name');
  await then('I can submit my feedback on testcafe');
});

test('Scenario: send feedback', async () => {
  await env.only('devci');
  await given('I enter my name');
  await when('I send my feedback on testcafe');
  await then("a 'Thank you' message should appear with my name");
});
