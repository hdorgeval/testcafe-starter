import {t} from "testcafe";
import { IConfig, TargetEnvironnement } from "../config/config.interface";

export const env = {
  only: async (...targets: TargetEnvironnement[]) => {
    const config = t.fixtureCtx.config as IConfig;
    if (config.env === undefined) {
      throw new Error("The env property in the configuration file is not defined.");
    }
    if (config.env === "any") {
      // filters are bypassed if the environment in the configuration file is any
      t.ctx.canExecute = true;
      return;
    }
    if (targets.length === 0) {
      return;
    }
    t.ctx.canExecute = false;
    for (const target of targets) {
      if (config.env === target) {
        t.ctx.canExecute = true;
      }
      if (target === "any") {
        t.ctx.canExecute = true;
      }
    }
  },
};
