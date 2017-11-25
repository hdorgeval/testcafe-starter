import {t} from "testcafe";
import * as selector from "../selectors";

export default async (stepName: string) => {
  await t
    .expect(selector.userNameInputBox.value).eql("");
};
