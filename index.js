const { default: { stream } } = require("got");
const { createWriteStream } = require("fs");
const { execSync } = require("child_process");
const path = "./Lavalink.jar";

// Always pull latest v3
const lljar = "https://cdn.darrennathanael.com/jars/Lavalink.jar";

const start = () => {
     const download = stream(lljar).pipe(createWriteStream('Lavalink.jar'));
     download.on("finish", () => {
         execSync("java -jar Lavalink.jar", { stdio: "inherit" });
     });
 };

start();
