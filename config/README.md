# TestCafe Config

This folder is, by convention, the place for all configuration files used at runtime by every steps.

## Environment configuration
You can target the tests execution for any kind of environment. All available environments should be declared in the [environments.ts](environments.ts) file.

## Persona configuration
You can target the tests execution for any kind of users. All available users should be declared in the [personas.ts](personas.ts) file.

## Custom command-line options
You can add any custom command-line options to the existing TestCafe command-line options. To do this, customize the content of [parsed-config.ts](parsed-config.ts).

## Usage

The configuration object is injected in tests via the before hook of the fixture statement:

```js
fixture("Feature: TestCafe Example")
  .before(async (ctx) => {
    // inject global configuration in the fixture context
    ctx.config = getCurrentConfig();
  });
```

The configuration object is then retrieved by each step with the following statements:

```js
import {t} from "testcafe";

// code omitted for brevity

// get the config that was injected into the fixture/test context by the feature
const config = getCurrentConfig(t);
await t
  .expect(selector.submitButton.hasAttribute("disabled"))
    .notOk({timeout: config.timeout.longTimeout});
```
