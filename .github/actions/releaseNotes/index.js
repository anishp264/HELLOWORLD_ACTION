const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/rest");

const token = core.getInput("token");
const repoOwner = core.getInput("repoOwner").toString();
const ref = core.getInput("sha");
const repo = "HELLOWORLD_ACION";
//repoOwner.split("/")[1];
//repo = "HELLOWORLD_ACION";
const owner = repoOwner.split("/")[0];
core.setOutput("owner", owner);
core.setOutput("repo", repo);
core.setOutput("sha", ref);
async function getCommitMessage() {
    const octokit = new Octokit({
        auth: token
      })
    
    try {
      const commit = await octokit.repos.getCommit({
        owner,
        repo,
        ref
      });
  
      const commitMSG = commit.data.commit.message;
      return commitMSG;
    } catch (error) {
        core.setFailed(error.message);
      return null;
    }
}



/*const msg = getCommitMessage();

core.setOutput("commitMessage", msg);*/