# TestCafe Starter
<a href="https://github.com/DevExpress/testcafe">
    <img alt="Gherkin with TestCafe" src="https://img.shields.io/badge/gherkin%20with-TestCafe-2fa4cf.svg">
</a>

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

## To check for typescript and linting errors

* run the command `npm run build`

## To debug a test in Visual Studio Code

* set one or more breakpoints in your code
* Start debugging

## Visual Studio Code requirements

* the VS Code version must be >= 1.18.0

## Recommended Visual Studio Code Extensions

* Move TS (will automatically chage all imports when you rename or move a step file)
* TSLint
* Git Lens
* Regex Previewer by Christof Marti

## How to create a new test

* see the [readme](features/README.md)

## How to run a test only in specific environment(s)

* The environment is the host that will execute the TestCafe tests. 
* The environment is set in the config file injected at runtime in the Fixture Context.
* All possible values are, by convention,  defined in the [config.interface.ts](./config/config.interface.ts) file

* Add this line as a first step in the test:
```typescript
test("Scenario: send feedback", async () => {
  await env.only( "devci");
  //
  await given("I enter my name");
  await  when("I send my feedback on testcafe");
  await  then("a 'Thank you' message should appear with my name");
});
```

* to select another environment, just use the VS Code IntelliSense:
  ![available environments](./.media/screenshot04.png)

* to target multiple environments:
```typescript
test("Scenario: send feedback", async () => {
  await env.only( "uat", "devci");
  //
  await given("I enter my name");
  await  when("I send my feedback on testcafe");
  await  then("a 'Thank you' message should appear with my name");
});
```



