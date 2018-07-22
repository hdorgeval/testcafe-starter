import { Selector } from 'testcafe';
export const firstInputBox = Selector('input[type=text]').nth(0);
export const secondInputBox = Selector('input[type=text]').nth(1);
export const userNameInputBox = Selector('input#developer-name[type=text]');
export const submitButton = Selector('button[type=submit]');
export const resultContent = Selector('div.result-content');
