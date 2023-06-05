const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/rest");

try{

    const owner = core.getInput("owner");
    const repo = core.getInput("repo");
    const sha = core.getInput("sha");

    core.setOutput("owner", owner);
    core.setOutput("repo", repo);
    core.setOutput("sha", sha);

}
catch(error){
    core.setFailed(error.message);
}