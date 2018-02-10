# TestCafe Starter
<a href="https://github.com/DevExpress/testcafe">
    <img alt="Gherkin with TestCafe" src="https://img.shields.io/badge/gherkin%20with-TestCafe-2fa4cf.svg">
</a>

## A lightweight and extensible framework to write e2e tests in a gherkin-like syntax.

```typescript
fixture(`Feature: TestCafe Example`);

test("Scenario: cannot submit my feedback when I did not enter my name", async () => {
  await  when("I navigate to the testcafe sample page");
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

* run the command `npm install`.

## To execute the tests locally

* run the command `npm test`.

## To execute the tests on TeamCity
* run the command `npm run test:teamcity`.

## To configure the target environment and the target persona
* add the following options to the TestCafe command-line `--env=xxx --user=yyy`
* you can create any type of option on the command-line: see the [readme](config) in the [config](config) folder.

## To check for typescript and linting errors

* run the command `npm run build`.

## To debug a test in Visual Studio Code

* set one or more breakpoints in your code
* setup the TestCafe configuration used by the debug session in the [default-config.ts](config/default-config.ts) file
* Start debugging

## To use Live mode

[TestCafe Live](https://github.com/DevExpress/testcafe-live) provides a service that keeps the TestCafe process and browsers opened the whole time you are working on tests. Changes you make in code immediately restart the tests. That is, TestCafe Live allows you to see test results instantly.

* rename the feature file into a name that ends with live.ts
* add .only to the test(s) on which you want to work live
* run the command `npm run test:live`


## Visual Studio Code requirements

* the VS Code version must be >= 1.18.0

## Recommended Visual Studio Code Extensions

* Move TS (will automatically chage all imports when you rename or move a step file)
* TSLint
* Git Lens
* Regex Previewer by Christof Marti
* TestCafe Snippets

## How to create a new test

* see the [readme](features/README.md)

## How to run a test only in specific environment(s)

* The environment is the host that will execute the TestCafe tests. 
* The environment is set in the config object injected at runtime in the Fixture Context.
* All possible values are, by convention,  defined in the [environments.ts](config/environments.ts) file

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
