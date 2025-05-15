<?php
    if(empty($_POST['nmapcmd'])) { die("nmapcmd POST var not found"); }
    
    if(preg_match('/nmap/i', $_POST['nmapcmd']) !== 1) {
        $post_cmd = $_POST['nmapcmd'];
    } else {
        $post_cmd = substr($_POST['nmapcmd'], 5);
    }

    $file_name = date("Ymd-Hi-s") . "-" . rand(1000000,9999999) . ".xml";
    $run_cmd = "bash ./scripts/run_scan.sh nmap -oX ./scans/$file_name --stylesheet /nmaprincesspi/xsl/princesspi-nmap.xsl $post_cmd";
    $web_name = "/nmaprincesspi/scans/$file_name";

    $exec = trim(shell_exec($run_cmd));
    echo "{\"runningLog\":\"$exec\",\"webName\":\"$web_name\"}";
?>