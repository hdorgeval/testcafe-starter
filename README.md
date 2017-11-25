# TestCafe Starter
## A lightweight and extensible framework to write e2e tests in a gherkin-like syntax.


```typescript
fixture(`Feature: TestCafe Example`);

test("Scenario: cannot submit my feedback when I did not enter my name", async () => {
  await given("I navigate to the testcafe sample page");
  await  then("no name should be populated");
  await   and("I cannot submit my feedback on testcafe");
});

test("Scenario: can send feedback with my name only", async () => {
  await given("I navigate to the testcafe sample page");
  await  when("I enter my name");
  await  then("I can submit my feedback on testcafe");
});

test("Scenario: send feedback", async () => {
  await given("I navigate to the testcafe sample page");
  await   and("I enter my name");
  await  when("I send my feedback on testcafe");
  await  then("a 'Thank you' message should appear with my name");
});
```

## After cloning the repo

* run the command `npm install`

## To execute the tests

* run the command `npm test`

## To debug a test in Visual Studio Code

* set one or more breakpoints in your code
* Start debugging

## Visual Studio Code requirements

* the VS Code version must be >= 1.18.0




