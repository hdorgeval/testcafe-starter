import {t} from "testcafe";
import {IConfig} from "../../../config/config.interface";
import * as selector from "../selectors";

export default async (_: string) => {
  // get the config that was injected into the fixture context by the feature
  const config = t.fixtureCtx.config as IConfig;

  await t
    .setTestSpeed(config.testcafe.testSpeed)
    .click(selector.submitButton);
};
