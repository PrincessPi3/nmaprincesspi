#!/bin/bash
runningLog="$(date +%Y%m%d%H%M%S)-$RANDOM.log"
eval "$* 2>>logs/error.log 1>>logs/$runningLog&"
echo "/nmaprincesspi/logs/$runningLog"