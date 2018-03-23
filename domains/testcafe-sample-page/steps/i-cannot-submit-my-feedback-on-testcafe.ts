import {t} from "testcafe";
import { getCurrentConfig } from "../../../config/testcafe-config";
import * as selector from "../selectors";

export default async (_: string) => {
  // get the config that was injected into the fixture/test context by the feature
  const config = getCurrentConfig(t);
  await t
    .expect(selector.submitButton.hasAttribute("disabled"))
      .ok({timeout: config.testcafe.timeout.longTimeout});
};
