const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/rest");

const token = core.getInput("token");
const owner = core.getInput("owner");
const repo = core.getInput("repo");
const sha = core.getInput("sha");

core.setOutput("owner", owner);
core.setOutput("repo", repo);
core.setOutput("sha", sha);

async function getCommitMessage() {
    const octokit = new Octokit();
  
    try {
      const commit = await octokit.repos.getCommit({
        owner,
        repo,
        ref: sha
      });
  
      const commitMessage = commit.data.commit.message;
      return commitMessage;
    } catch (error) {
        core.setFailed(error.message);
      return null;
    }
}

const msg = getCommitMessage();

core.setOutput("commitMessage", msg);