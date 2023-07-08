# Updating to latest

### You need to delete the lavalink.jar and get the latest application.yml from this repo.

# Lavalink on Replit
[![Run on Repl.it](https://repl.it/badge/github/DarrenOfficial/lavalink-replit)](https://repl.it/github/DarrenOfficial/lavalink-replit)



## Installation

Fork this github repository. then create a new replit project.

or [click me](https://replit.com/github/DarrenOfficial/lavalink-replit) to install it automatically.

# How to use
* Run the replit
* copy the replit url and put it to your bot
### make sure you remove `https://` and always connect with the port 443

## Ignore authentication fail from 172.X.X.X
It's normal, especially when you ping it with uptimerobot or freshworks.
it might show multiple times when you refresh the repl.it window.

![](https://cdn.discordapp.com/attachments/855346696590589976/947185882056777818/unknown.png)

Example `bot config`


![botconfreplit](https://cdn.darrennathanael.com/assets/discord/lavalinkconfigbot.jpeg)

Test bot from https://github.com/SudhanPlayz/Discord-MusicBot

- - -

## Note & such
The default port to connect is `443` and the default password is `maybeiwasboring`
You can’t change the lavalink port! it will default to 443 due to how replit work.

### How to keep the replit on with [freshping](https://www.freshworks.com/website-monitoring/)
Go to [freshping](https://www.freshworks.com/website-monitoring/), and set HTTP request to your app I.e. `https://lavalink-replit.sexsells.repl.co/metrics`
and it should show that it's online. if it's show offline, go to your application.yml and make sure metrics is set to on
![freshpingisbetterthanuptimerobot](https://darrennathanael.com/cdn/873E3AB4-8862-49A2-B5F6-5A0B97E3BCF1.jpeg)

- - -
only needed if the run button doesnt work.
```bash
chmod +x start.sh
```
```bash
./start.sh
```


## Additional info


The [lavalink](https://github.com/melike2d/lavalink) is based on https://github.com/melike2d/lavalink and the download url is pointed to https://cdn.darrennathanael.com/jars/Lavalink.jar so everytime theres a new update it will auto grabs it from that url
