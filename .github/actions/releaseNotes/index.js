const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/rest");

try{

    const owner = process.env.GITHUB_REPOSITORY.split("/")[0];
    const repo = process.env.GITHUB_REPOSITORY.split("/")[1];
    const sha = process.env.GITHUB_SHA;

    core.setOutput("owner", owner.toTimeString());
    core.setOutput("repo", repo.toTimeString());
    core.setOutput("sha", sha.toTimeString());
}
catch(error){
    core.setFailed(error.message);
}