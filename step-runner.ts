import chalk from 'chalk';
import { t } from 'testcafe';
import {
  ButStep,
  butStepMappings,
  GivenStep,
  givenStepMappings,
  IStepMappings,
  ThenStep,
  thenStepMappings,
  WhenStep,
  whenStepMappings,
} from './step-mappings';
import { symbols } from './tools/string/symbols';
enum StepLabel {
  Given = 'Given',
  When = 'When ',
  Then = 'Then ',
  And = 'And  ',
  But = 'But  ',
}

async function executeStep(
  stepName: GivenStep | WhenStep | ThenStep | ButStep,
  stepMappings: IStepMappings,
  stepLabel: StepLabel
) {
  if (executionOfCurrentTestWasCanceledByPreviousStep()) {
    return;
  }

  const foundStep = stepMappings[stepName];
  if (typeof foundStep === 'function') {
    await foundStep(stepName as string);
    showSuccess(stepName, stepLabel);
    return;
  }

  throw new Error(`Step "${stepName}" is not mapped to an executable code.`);
}
export async function given(stepName: GivenStep) {
  await executeStep(stepName, givenStepMappings, StepLabel.Given);
}
export async function when(stepName: WhenStep) {
  await executeStep(stepName, whenStepMappings, StepLabel.When);
}
export async function then(stepName: ThenStep) {
  await executeStep(stepName, thenStepMappings, StepLabel.Then);
}
export async function but(stepName: ButStep) {
  await executeStep(stepName, butStepMappings, StepLabel.But);
}
export async function and(stepName: GivenStep | WhenStep | ThenStep | ButStep) {
  ensureThat(stepName).isNotAmbiguous();

  if (givenStepMappings[stepName as GivenStep]) {
    return executeStep(stepName, givenStepMappings, StepLabel.And);
  }

  if (whenStepMappings[stepName as WhenStep]) {
    return executeStep(stepName, whenStepMappings, StepLabel.And);
  }

  if (thenStepMappings[stepName as ThenStep]) {
    return executeStep(stepName, thenStepMappings, StepLabel.And);
  }

  if (butStepMappings[stepName as ButStep]) {
    return executeStep(stepName, butStepMappings, StepLabel.And);
  }

  throw new Error(`Step "${stepName}" is not mapped to an executable code.`);
}

function ensureThat(stepName: GivenStep | WhenStep | ThenStep | ButStep) {
  return {
    isNotAmbiguous: () => {
      if (givenStepMappings[stepName as GivenStep] && thenStepMappings[stepName as ThenStep]) {
        throw new Error(`Step "${stepName}" is defined as both a 'Given' and a 'Then' step.`);
      }
      if (whenStepMappings[stepName as WhenStep] && thenStepMappings[stepName as ThenStep]) {
        throw new Error(`Step "${stepName}" is defined as both a 'When' and a 'Then' step.`);
      }
      if (butStepMappings[stepName as ButStep] && thenStepMappings[stepName as ThenStep]) {
        throw new Error(`Step "${stepName}" is defined as both a 'But' and a 'Then' step.`);
      }
    },
  };
}

function executionOfCurrentTestWasCanceledByPreviousStep(): boolean {
  const canExecute: boolean | undefined = t.ctx.canExecute;
  return canExecute === false ? true : false;
}

function showSuccess(stepName: string, stepLabel: StepLabel) {
  if (!t.ctx.stepRunnerContext) {
    t.ctx.stepRunnerContext = {};
    // tslint:disable-next-line:no-console
    console.log('');
  }
  // tslint:disable-next-line:no-console
  console.log(`  ${chalk.green(symbols.ok)} ${stepLabel} ${stepName}`);
}
