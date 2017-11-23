import * as testcafe_sample_page from "./testcafe-sample-page";

export type GivenStep =
| testcafe_sample_page.GivenStep;

export type ThenStep =
| testcafe_sample_page.ThenStep;

export const stepMappings = {
  ...testcafe_sample_page.stepMappings,
};
