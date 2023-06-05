const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/rest");

try{

    const { owner, repo, sha } = process.env.GITHUB_CONTEXT;

    core.setOutput("owner", owner);
    core.setOutput("repo", repo);
    core.setOutput("sha", sha);
}
catch(error){
    core.setFailed(error.message);
}