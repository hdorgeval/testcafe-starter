/**
 * @step
 * @given("I do something")
 */
export default async (stepName: string): Promise<void> => {
  throw new Error(`Step "${stepName}" is not yet implemented.`);
};
