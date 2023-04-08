const core = require('@actions/core');
const github = require('@actions/github');


try{
    //If an error, then the below lines of code will not execute. But the github action still shows as success
    //Add the core.SetFailed to mark the github action as a failure
    //throw(new Error("some error msg"));

    const name = core.getInput("who-to-greet");
    console.log(`Hello ${name}`);

    const time = new Date();
    core.setOutput("time", time.toTimeString());

    //console.log(JSON.stringify(github, null, '\t'));
}
catch(error){
    core.setFailed(error.message);
}