# Features
### This documentation is still in progress

This folder is, by convention, the place for the TestCafe test files.

# Creating a new test

* Create an empty TypeScript file and give it a name like `my-new-feature.spec.ts`

* Paste the following code in this new file:

```typescript
import "testcafe";
import config from "../config/testcafe-config";
import {defaultPageModel as inputData} from "../domains/testcafe-sample-page";
import {and, given, then, when} from "../step-runner";

fixture(`Feature: my new feature`)
  .before(async (ctx) => {
    // global config is injected in the fixture context
    ctx.config = config;
  })
  .beforeEach(async (t) => {
    // inject your page model in the test context
    t.ctx.inputData = inputData;
  });

test("Scenario: my new scenario", async () => {
  await given("I start my App");
  await   and("I input the given data");
  await  when("I send my form");
  await  then("I should receive a specific response");
});

```