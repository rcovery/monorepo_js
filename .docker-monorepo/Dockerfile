FROM node:slim

WORKDIR /home/app

RUN apt update && apt --fix-broken install -y && apt install -y git sudo curl procps wget && \
  echo "node ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

RUN npm install pm2 -g
RUN npm install @nestjs/cli -g

USER node

ENTRYPOINT tail -f /dev/null
