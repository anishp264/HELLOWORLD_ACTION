const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/rest");

const token = core.getInput("token");
const owner = core.getInput("owner");
const repo = core.getInput("repo");
const ref = core.getInput("sha");

async function getCommitMessage() {
    const octokit = new Octokit(token);
  
    try {
      const commit = await octokit.repos.getCommit({
        owner,
        repo,
        ref
      });
  
      const commitMSG = "FUCK";
      //commit.data.commit.message;
      return commitMSG;
    } catch (error) {
        core.setFailed(error.message);
      return null;
    }
}

const msg = getCommitMessage();

core.setOutput("commitMessage", msg);
core.setOutput("owner", owner);
core.setOutput("repo", repo);
core.setOutput("sha", ref);