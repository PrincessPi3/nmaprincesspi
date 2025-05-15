<?php
    if(empty($_POST['nmapcmd'])) { die("nmapcmd POST var not found"); }
    
    if(preg_match('/nmap/i', $_POST['nmapcmd']) !== 1) {
        $post_cmd = $_POST['nmapcmd'];
    } else {
        $post_cmd = substr($_POST['nmapcmd'], 5);
    }

    $file_name = date("Ymd-Hi-s") . ".xml";
    $run_cmd = "nmap -oX scans/$file_name --stylesheet /nmaprincesspi/xsl/princesspi-nmap.xsl $post_cmd &";
    $web_name = "/nmaprincesspi/scripts/$file_name";

    echo $web_name;

    $exec = shell_exec($run_cmd);
?>