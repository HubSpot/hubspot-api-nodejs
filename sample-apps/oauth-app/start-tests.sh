#!/usr/bin/env bash
nohup /opt/bin/start-selenium-standalone.sh &
nohup npm start &
npm run test
