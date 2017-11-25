import * as step from "./steps";

export const givenStepMappings = {
  "I enter my name only": step.i_enter_my_name_only,
  "I navigate to the testcafe sample page": step.i_navigate_to_the_testcafe_sample_page,
  "I send my feedback on testcafe": step.i_send_my_feedback_on_testcafe,
};

export const thenStepMappings = {
  "I can submit my feedback on testcafe": step.i_can_submit_my_feedback_on_testcafe,
  "I cannot submit my feedback on testcafe": step.i_cannot_submit_my_feedback_on_testcafe,
  "a 'Thank you' message should appear with my name": step.a_xxx_message_should_appear_with_my_name,
  "no name should be populated": step.no_name_should_be_populated,
};
