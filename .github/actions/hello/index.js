const core = require('@actions/core');
const github = require('@actions/github');


try{
    //If an error, then the below lines of code will not execute. But the github action still shows as success
    //Add the core.SetFailed to mark the github action as a failure
    //throw(new Error("some error msg"));

    //Debugging message only appear iff debugging is enabled
    core.debug("Debug message");
    core.warning("Warning message");
    core.error("error message");

    const name = core.getInput("who-to-greet");
    console.log(`Hello ${name}`);
    const firstName = name.split("/")[0];    
    console.log(`Hello ${firstName}`);
    //setting name as a secret, name wont be visible in the logs
    //core.setSecret(name);
    console.log(`Hello1 ${name}`);

    const time = new Date();
    core.setOutput("time", time.toTimeString());

    //making github logging as an expandable object
    core.startGroup("Logging Github Object")
    console.log(JSON.stringify(github, null, '\t'));
    core.endGroup();

    //setting environment variable which could be used in subsequent steps
    core.exportVariable("HELLO", "hello");
}
catch(error){
    core.setFailed(error.message);
}