const { default: { stream } } = require("got"); // import random shit 
const { createWriteStream } = require("fs"); 
const { execSync } = require("child_process");

// pull latest with soundcloud fix

const url = "https://cdn.darrennathanael.com/jars/Lavalink.jar;
const start = () => {
    const download = stream(url).pipe(createWriteStream('Lavalink.jar'));
    download.on("finish", () => {
        execSync("java -jar Lavalink.jar", { stdio: "inherit" });
    });
};

start();
