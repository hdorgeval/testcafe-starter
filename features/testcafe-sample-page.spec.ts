import "testcafe";
import config from "../config/testcafe-config";
import {defaultPageModel as inputData} from "../domains/testcafe-sample-page";
import {and, given, then, when} from "../step-runner";

fixture(`Feature: TestCafe Example`)
  .before(async (ctx) => {
    // global config is injected in the fixture context
    ctx.config = config;
  })
  .beforeEach(async (t) => {
    // page model is initialized with a default page model
    t.ctx.inputData = inputData;
    await given("I navigate to the testcafe sample page");
  });

test("Scenario: cannot submit my feedback when I did not enter my name", async () => {
  await  then("no name should be populated");
  await   and("I cannot submit my feedback on testcafe");
});

test("Scenario: can send feedback with my name only", async () => {
  await  when("I enter my name");
  await  then("I can submit my feedback on testcafe");
});

test("Scenario: send feedback", async () => {
  await given("I enter my name");
  await  when("I send my feedback on testcafe");
  await  then("a 'Thank you' message should appear with my name");
});
