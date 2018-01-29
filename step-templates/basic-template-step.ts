import {t} from "testcafe";
import {IConfig} from "../config/config.interface";
import { currentConfig } from "../config/testcafe-config";
import { IPageModel } from "../domains/testcafe-sample-page/models";
import * as selector from "../domains/testcafe-sample-page/selectors";
import {firstMatch} from "../tools/regex-match";

export default async (stepName: string) => {
  // get the config that was injected into the fixture context by the feature
  const config: IConfig = currentConfig(t);

  // get the page object model that was injected in the test context
  const inputData = t.ctx.inputData as IPageModel;

  // extract the value embedded in the step name
  // by convention this value is prefixed and postfixed by a single quote
  const value = firstMatch(/'.*'/g, stepName);
  if (value === null) {
    throw new Error(`Cannot extract value from the step name "${stepName}"`);
  }

  await t
    .setTestSpeed(config.testcafe.testSpeed)
    .expect(selector.firstInputBox.hasAttribute("disabled")).notOk()
    .typeText(selector.firstInputBox, value, {replace: true});

  if (inputData.name) {
    await t
    .expect(selector.secondInputBox.hasAttribute("disabled")).notOk()
    .typeText(selector.secondInputBox, inputData.name, {replace: true});
  }

};
