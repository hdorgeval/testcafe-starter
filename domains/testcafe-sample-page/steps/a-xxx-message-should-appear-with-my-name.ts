import {t} from "testcafe";
import {firstMatch} from "../../../tools/regex-match";
import { IPageModel } from "../models";
import * as selector from "../selectors";

export default async (stepName: string) => {
  // get the page object model that was injected in the context
  const inputData = t.ctx.inputData as IPageModel;

  // extract the message embedded in the step name
  // by convention this value is prefixed and postfixed by a single quote
  const message = firstMatch(/'.*'/g, stepName);
  if (message === null) {
    throw new Error(`Cannot extract message from the step name "${stepName}"`);
  }

  const myName = inputData.name || "";
  await t
    .expect(selector.resultContent.exists).ok()
    .expect(selector.resultContent.innerText).contains(message)
    .expect(selector.resultContent.innerText).contains(myName);

};
