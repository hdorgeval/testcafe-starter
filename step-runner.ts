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
  if (testExecutionWasCanceledByPreviousStep()) {
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
export async function when(stepName: WhenStep) {
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

  if (givenStepMappings[stepName as GivenStep]) {
    return await given(stepName as GivenStep);
  }

  if (whenStepMappings[stepName as WhenStep]) {
    return await when(stepName as WhenStep);
  }

  if (thenStepMappings[stepName as ThenStep]) {
    return await then(stepName as ThenStep);
  }

  if (butStepMappings[stepName as ButStep]) {
    return await but(stepName as ButStep);
  }

  throw new Error(`Step "${stepName}" is not mapped to an executable code.`);

}

function ensureThat(stepName: GivenStep | WhenStep | ThenStep | ButStep ) {
  return {
    isNotAmbiguous: () => {
      if (givenStepMappings[stepName as GivenStep] && thenStepMappings[stepName as ThenStep] ) {
        throw new Error(`Step "${stepName}" is defined as both a 'Given' and a 'Then' step.`);
      }
      if (whenStepMappings[stepName as WhenStep] && thenStepMappings[stepName as ThenStep] ) {
        throw new Error(`Step "${stepName}" is defined as both a 'When' and a 'Then' step.`);
      }
      if (butStepMappings[stepName as ButStep] && thenStepMappings[stepName as ThenStep] ) {
        throw new Error(`Step "${stepName}" is defined as both a 'But' and a 'Then' step.`);
      }
    },
  };
}

function testExecutionWasCanceledByPreviousStep(): boolean {
  const canExecute: boolean | undefined = t.ctx.canExecute;
  return canExecute === false
    ? true
    : false;
}
