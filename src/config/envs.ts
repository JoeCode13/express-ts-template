import 'dotenv/config';
// Import the `get` method from the `env-var` package to access environment variables.
import { get } from 'env-var';

/**
 * An object containing the application's environment variables.
 * @type {Object}
 * @property {number} PORT - The port number on which the application will listen. It is a required variable and must be a valid port number. If `PORT` is not found in the environment variables, the application will throw an exception, indicating its requirement.
 */
export const envs = {
  PORT: get('PORT').required().asPortNumber(),
};
