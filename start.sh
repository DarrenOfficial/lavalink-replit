## install jabba and sht
curl -sL https://github.com/shyiko/jabba/raw/master/install.sh | bash -s -- --skip-rc && . ~/.jabba/jabba.sh
## get java 16
jabba install zulu@1.16.0
npm i
node index
