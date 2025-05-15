#!/bin/bash
scansPath="/var/www/html/nmap-scans"
fileName="nmap-$(date +%Y%m%d-%H%M%S).xml"
filePath="$scansPath/$fileName"
webPath="http://10.0.0.51/nmap-scans/$fileName"

cmd="nmap -oX \"$filePath\" --stylesheet \"/nmaprincesspi/xsl/princesspi-nmap.xsl\" $*"

echo -e "\nRunning: $cmd"
echo -e "Report Saving to: $webPath\n\n"
eval "$cmd"

echo -e "Done!\n\nReport Visible at $webPath\n\n"