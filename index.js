const got = require('got');
const fs = require("fs"); 
const { execSync } = require("child_process");
const path = "./Lavalink.jar";

const lljar = "https://cdn.darrennathanael.com/jars/Lavalink.jar";
// temp code untill I made jar options & checking.
// aka selection between downloading the "custom" "dev" "dev-with-plugins"

const start = () => {
     const download = stream(lljar).pipe(createWriteStream('Lavalink.jar'));
     download.on("finish", () => {
         execSync("java -jar Lavalink.jar", { stdio: "inherit" });
     });
 };

start();
