/* eslint-env es6,commonjs */
const prettier = 'prettier --list-different';
const eslint = 'eslint --max-warnings 0';
const add = 'git add';

/**
 * Return array of passed commands
 *
 * @param  {...string} commands commands to run
 * @returns {string[]} array of commands
 */
const run = (...commands) => commands;

module.exports = {
  '*.{json,md}': run(prettier, add),
  '*.js': run(prettier, eslint, add),
};
