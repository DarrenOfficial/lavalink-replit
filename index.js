const { default: { stream } } = require("got"); // import random shit 
const { createWriteStream } = require("fs"); 
const { execSync } = require("child_process");

// pull the "stable" version from freya github

const url = "https://github.com/freyacodes/Lavalink/releases/download/3.3.2.5/Lavalink.jar";
const start = () => {
    const download = stream(url).pipe(createWriteStream('Lavalink.jar'));
    download.on("finish", () => {
        execSync("java -jar Lavalink.jar", { stdio: "inherit" });
    });
};

start();
