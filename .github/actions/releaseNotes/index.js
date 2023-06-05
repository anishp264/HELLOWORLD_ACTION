const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/rest");

try{

    const { owner, repo, sha } = process.env.GITHUB_CONTEXT;

    core.setOutput("owner", owner.toString());
    core.setOutput("repo", repo.toString());
    core.setOutput("sha", sha.toString());
}
catch(error){
    core.setFailed(error.message);
}