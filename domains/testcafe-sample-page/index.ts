import { givenStepMappings, thenStepMappings} from "./given-when-then-mappings";
import {pageModel} from "./page-model";
export type GivenStep = keyof typeof givenStepMappings;
export type ThenStep = keyof typeof thenStepMappings;

export const stepMappings = {
  ...givenStepMappings,
  ...thenStepMappings,
};

export const defaultPageModel = pageModel;
