import {t} from "testcafe";
import { IConfig } from "../../../config/config.interface";
import { IPageModel } from "../models";
import * as selector from "../selectors";

export default async (_: string) => {
  // get the config that was injected into the fixture context by the feature
  const config = t.fixtureCtx.config as IConfig;

  // get the page object model that was injected in the context
  const inputData = t.ctx.inputData as IPageModel;

  const value = inputData.name || "";

  await t
    .setTestSpeed(config.testcafe.testSpeed)
    .expect(selector.userNameInputBox.hasAttribute("disabled")).notOk()
    .typeText(selector.userNameInputBox, value, {replace: true});
};
