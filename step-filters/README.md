# Step Filters

This folder is, by convention, the place for step-filter files.

A step-filter is a mechanism that enables to dynamically stop the execution of the current test.

A test might be stopped because it is not running in the right environment, or because the persona setup in the configuration file must not run this test.

This project offers you a filter mechanism for handling execution environment: see [env.ts](env.ts) and [this](../README.md#how-to-run-a-test-only-in-specific-environments).

## How it works

A step-filter is technically the same as a given/when/then step.

When a step-filter executes it should finish it's execution with either:

```js
import {t} from "testcafe";

// code omitted for brevity

t.ctx.canExecute = true;
```
or 

```js
import {t} from "testcafe";

// code omitted for brevity

t.ctx.canExecute = false; // => all steps executed after this line are skipped
```
