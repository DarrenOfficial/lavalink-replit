const got = require('got');
const fs = require("fs"); 
const { execSync } = require("child_process");
const path = "./Lavalink.jar";

// I did this to save bandwith. well not really I already pay cloudflare to cache the jar on their edge servers. :p
// But then again last time I check my cloduflare stats, this project alone is using 3.5 TB per month! thats insane af.

const start = () => {
    if (fs.existsSync(path))
        execSync("java -jar Lavalink.jar", { stdio: "inherit" });
    else
        console.log("\x1b[31m%s\x1b[0m", "Lavalink.jar not found!");
        console.log("\x1b[34m%s\x1b[0m", "I will try to download one for you.");
        console.log("\x1b[34m%s\x1b[0m", "If for whatever reason it says that the Jar file is corrupt, you can delete the jar file and try running this again.");
        got.stream("https://cdn.darrennathanael.com/jars/Lavalink.jar")
        .pipe(fs.createWriteStream(path))
        .on("finish", () => {
            console.log("\x1b[32m%s\x1b[0m", "Lavalink.jar downloaded!");
            execSync("java -jar Lavalink.jar", { stdio: "inherit" });
        }
        );
}

start();