<?php
    session_start();
    if(empty($_POST['nmapcmd']) || empty($_SESSION['nonce'])) { die("POST var(s) not found"); }
    if($_POST['nonce'] !== $_SESSION['nonce']) { die('csrf validation failed'); }
    
    $cleannmapcmd = escapeshellcmd($_POST['nmapcmd']);

    // if(preg_match('/nmap/i', $cleannmapcmd) !== 1) {
    if(substr($cleannmapcmd, 0, 5) == 'nmap ') {
        $post_cmd = $cleannmapcmd;
    } else {
        $post_cmd = substr($cleannmapcmd, 5);
    }

    $file_name = date("Ymd-Hi-s") . "-" . rand(1000000,9999999) . ".xml";
    $run_cmd = "bash ./scripts/run_scan.sh nmap -oX ./scans/$file_name --stylesheet /nmaprincesspi/xsl/princesspi-nmap.xsl $post_cmd";
    $web_name = "/nmaprincesspi/scans/$file_name";

    $exec = trim(shell_exec($run_cmd));
    echo "{\"runningLog\":\"$exec\",\"webName\":\"$web_name\"}";
?>