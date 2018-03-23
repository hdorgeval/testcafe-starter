import {t} from "testcafe";
import {IConfig} from "../../../config/config.interface";
import { getCurrentConfig } from "../../../config/testcafe-config";

export default async (_: string) => {
  // get the config that was injected into the fixture/test context by the feature
  const config: IConfig = getCurrentConfig(t);

  await t
    .navigateTo(config.env.url);

};
