#!/bin/bash
# alias nmap="/var/www/html/nmaprincesspi/nmap-script.sh"
scansPath="/var/www/html/nmaprincesspi/scans"
fileName="nmap-$(date +%Y%m%d-%H%M%S).xml"
filePath="$scansPath/$fileName"
webPath="http://10.0.0.51/nmaprincesspi/scans/$fileName"

cmd="nmap -oX \"$filePath\" --stylesheet \"/nmaprincesspi/xsl/princesspi-nmap.xsl\" $*"

echo -e "\n\nRunning:\n\t$cmd"
echo -e "Report Saving to\n\t$webPath\n\n"
eval "$cmd"

echo -e "\n\nReport Visible at $webPath"