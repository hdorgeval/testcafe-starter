import {t} from "testcafe";
import { IConfig } from "../../../config/config.interface";
import { currentConfig } from "../../../config/testcafe-config";
import { IPageModel } from "../models";
import * as selector from "../selectors";

export default async (_: string) => {
  // get the config that was injected into the fixture context by the feature
  const config: IConfig = currentConfig(t);

  // get the page object model that was injected in the context
  const inputData = t.ctx.inputData as IPageModel;

  const value = inputData.name || "";

  await t
    .setTestSpeed(config.testcafe.testSpeed)
    .hover(selector.userNameInputBox)
    .expect(selector.userNameInputBox.hasAttribute("disabled")).notOk()
    .typeText(selector.userNameInputBox, value, {replace: true});
};
