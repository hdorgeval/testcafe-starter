import {t} from "testcafe";
import {
  ButStep, butStepMappings,
  GivenStep, givenStepMappings,
  IStepMappings,
  ThenStep, thenStepMappings,
  WhenStep, whenStepMappings,
} from "./step-mappings";

async function executeStep(
    stepName: GivenStep | WhenStep | ThenStep | ButStep,
    stepMappings: IStepMappings,
  ) {
  const canExecute: boolean | undefined = t.ctx.canExecute;
  if (canExecute === false) {
    return;
  }
  const foundStep = stepMappings[stepName];
  if (typeof foundStep === "function" ) {
    await foundStep(stepName as string);
    return;
  }
  throw new Error(`Step "${stepName}" is not mapped to an executable code.`);
}
export async function given(stepName: GivenStep) {
  await executeStep(stepName, givenStepMappings );
}
export async function when(stepName: GivenStep) {
  await executeStep(stepName, whenStepMappings);
}
export async function then(stepName: ThenStep) {
  await executeStep(stepName, thenStepMappings);
}
export async function but(stepName: ButStep) {
  await executeStep(stepName, butStepMappings);
}
export async function and(stepName: GivenStep | WhenStep | ThenStep | ButStep ) {
  ensureThat(stepName).isNotAmbiguous();

  if (givenStepMappings[stepName]) {
    return await given(stepName as GivenStep);
  }

  if (whenStepMappings[stepName]) {
    return await when(stepName as WhenStep);
  }

  if (thenStepMappings[stepName]) {
    return await then(stepName as ThenStep);
  }

  if (butStepMappings[stepName]) {
    return await but(stepName as ThenStep);
  }

  throw new Error(`Step "${stepName}" is not mapped to an executable code.`);

}

function ensureThat(stepName: GivenStep | WhenStep | ThenStep | ButStep ) {
  return {
    isNotAmbiguous: () => {
      if (givenStepMappings[stepName] && thenStepMappings[stepName] ) {
        throw new Error(`Step "${stepName}" is defined as both a 'Given' and a 'Then' step.`);
      }
      if (whenStepMappings[stepName] && thenStepMappings[stepName] ) {
        throw new Error(`Step "${stepName}" is defined as both a 'When' and a 'Then' step.`);
      }
      if (butStepMappings[stepName] && thenStepMappings[stepName] ) {
        throw new Error(`Step "${stepName}" is defined as both a 'But' and a 'Then' step.`);
      }
    },
  };
}
