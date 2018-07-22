import { IConfig } from './config.interface';
import { env } from './environments';
import { user } from './personas';

export const defaultConfig: IConfig = {
  env: env('local'),
  showConfig: true,
  testSpeed: 1.0,
  timeout: {
    longTimeout: 30000,
    shortTimeout: 5000,
    // insert your custom timeouts here
    ...{ 'on-waiting-remote-server-response': 180000 },
    ...{ 'on-waiting-custom-event': 4000 },
  },
  user: user('user1@example.com'),
};
