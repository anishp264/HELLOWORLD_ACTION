const core = require('@actions/core');
const github = require('@actions/github');

try{
    const token = core.getInput('token');
    const title = core.getInput('title');
    const body = core.getInput('body');
    const assignees = core.getInput('assignees');

    const octokit = new github.GitHub(token);
    const response = octokit.issues.create({
        /*owner: github.context.repo.owner,
        repo: github.context.repo.repo,*/
        //below same as above two lines => javascript es6 spreading the github.context.repo
        ...github.context.repo,
        title,
        body,
        assignees: assignees ? assignees.split('\n') : undefined
    });
}catch(error){
    core.setFailed(error.message);
}
