import {t} from "testcafe";
import {IConfig} from "../../../config/config.interface";
import { currentConfig } from "../../../config/testcafe-config";
import * as selector from "../selectors";

export default async (_: string) => {
  // get the config that was injected into the fixture context by the feature
  const config: IConfig = currentConfig(t);

  await t
    .setTestSpeed(config.testcafe.testSpeed)
    .hover(selector.submitButton)
    .click(selector.submitButton);
};
