# TestCafe Config

This folder is, by convention, the place for all configuration files used at runtime by every steps.

## Environment configuration
You can target the tests execution for any kind of environment. All available environments should be declared in the [environments.ts](environments.ts) file.

## Persona configuration
You can target the tests execution for any kind of users. All available users should be declared in the [personas.ts](personas.ts) file.

## Custom command-line options
You can add any custom command-line options to the existing TestCafe command-line options. To do this, customize the content of [parsed-config.ts](parsed-config.ts).
