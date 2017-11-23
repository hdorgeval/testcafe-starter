import "testcafe";
import config from "../config/testcafe-config";
import {defaultPageModel} from "../domains/testcafe-sample-page";
import {given} from "../step-runner";

fixture(`Feature: TestCafe Example`)
  .before(async (ctx) => {
    // global config is passed to the fixture context
    ctx.config = config;
  })
  .beforeEach(async (t) => {
    // page model is initialized with a default page model
    t.ctx.pageModel = defaultPageModel;
  });

test("Scenario: cannot submit the page if I did not enter a name", async () => {
  await given("I navigate to the testcafe sample page");
});
