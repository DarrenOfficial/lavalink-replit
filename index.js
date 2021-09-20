const { default: { stream } } = require("got");
const { createWriteStream } = require("fs"); 
const { execSync } = require("child_process");
const url = "https://cdn.darrennathanael.com/jars/Lavalink.jar"; // This will always pull the latest with soundcloud fix ect ect
const start = () => {
    const download = stream(url).pipe(createWriteStream('Lavalink.jar'));
    download.on("finish", () => {
        execSync("java -jar Lavalink.jar", { stdio: "inherit" });
    });
};

start();
