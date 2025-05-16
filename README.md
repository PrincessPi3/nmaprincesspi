# nmaprincesspi
silly little nmap web thing

add alias to .zshrc or .basrc  
    `alias nmap="/var/www/html/nmaprincesspi/nmap-script.sh"`
  
manuual  
    `nmap -oX /var/www/html/nmaprincesspi/scans/FILENMAME.xml --stylesheet /nmaprincesspi/xsl/princesspi-nmap.xsl`

Designed to run on apache2 and php

need to make a .htpasswd file and put it somewhere  
    https://www.web2generators.com/apache-tools/htpasswd-generator