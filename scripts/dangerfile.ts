import { danger, message, warn } from 'danger';
import { fromJS } from 'immutable';

function runCheckModified() {
  const modifiedMD = danger.git.modified_files.join('\n - ');
  const addedMD = danger.git.created_files.join('\n - ');
  const deletedMD = danger.git.deleted_files.join('\n - ');
  let changeMessage = '';
  if (danger.git.modified_files.length) {
    changeMessage += `### Changed Files in this PR: \n - ${modifiedMD}\n\n`;
  }
  if (danger.git.created_files.length) {
    changeMessage += `### Added Files in this PR: \n - ${addedMD}\n\n`;
  }
  if (danger.git.deleted_files.length) {
    changeMessage += `### Deleted Files in this PR: \n - ${deletedMD}\n\n`;
  }
  message(changeMessage);
}

function runPackageJsonCheck() {
  const packageChanged = fromJS(danger.git.modified_files).contains('package.json');
  const lockfileChanged = fromJS(danger.git.modified_files).contains('package-lock.json');
  if (packageChanged && !lockfileChanged) {
    const packageJsonMessage = 'Changes were made to package.json, but not to package-lock.json';
    const packageJsonIdea = 'Perhaps you need to run `npm install`?';
    warn(`${packageJsonMessage} - <i>${packageJsonIdea}</i>`);
  }
}

function runEnvComment() {
  const env = process.env.CIRCLE_BRANCH;
  message(`## Environment Link\n (https://traffic.hmm.dev/?env=${env})`);
}

[runCheckModified, runPackageJsonCheck, runEnvComment].forEach(task => task());
