const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/rest");

try{

    const owner = process.env.GITHUB_REPOSITORY.split("/")[0];
    const repo = process.env.GITHUB_REPOSITORY.split("/")[1];
    const sha = process.env.GITHUB_SHA;

    core.setOutput("owner", owner.toString());
    core.setOutput("repo", repo.toString());
    core.setOutput("sha", sha.toString());
}
catch(error){
    core.setFailed(error.message);
}