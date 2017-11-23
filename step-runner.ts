import {GivenStep, stepMappings, ThenStep} from "./domains";

async function executeStep(stepName: GivenStep | ThenStep) {
  const foundStep = stepMappings[stepName];
  if (typeof foundStep === "function" ) {
    await foundStep(stepName);
    return;
  }
  throw new Error(`Step "${stepName}" is not mapped to executable code.`);
}
export async function given(stepName: GivenStep) {
  await executeStep(stepName);
}
export async function when(stepName: GivenStep) {
  await executeStep(stepName);
}
export async function then(stepName: ThenStep) {
  await executeStep(stepName);
}
export async function and(stepName: GivenStep | ThenStep) {
  await executeStep(stepName);
}
export async function but(stepName: GivenStep | ThenStep) {
  await executeStep(stepName);
}
