<?php
$scansDir = './scans';
$logsDir = './logs';

$scans = array_diff(scandir($scansDir), array('..', '.')); # silly method to remove the . and ..
$logs = array_diff(scandir($logsDir), array('..', '.'));

foreach($scans as $scan) {
    unlink("$scansDir/$scan");
}

foreach($logs as $log) {
    unlink("$logsDir/$log");
}

header("Location: /nmaprincesspi/");
?>