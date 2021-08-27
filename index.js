const { default: { stream } } = require("got"); // import random shit 
const { createWriteStream } = require("fs"); 
const { execSync } = require("child_process");

// pull latest with soundcloud fix

const url = "https://github.com/Cog-Creators/Lavalink-Jars/releases/download/3.3.2.3_1238/Lavalink.jar";
const start = () => {
    const download = stream(url).pipe(createWriteStream('Lavalink.jar'));
    download.on("finish", () => {
        execSync("java -jar Lavalink.jar", { stdio: "inherit" });
    });
};

start();
