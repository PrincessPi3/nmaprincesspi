<?php
$dir = './scans';
$scans = array_diff(scandir($dir), array('..', '.')); # silly method to remove the . and ..
foreach($scans as $scan) {
    $scanList .= "<a href='/nmaprincesspi/scans/$scan'>$scan<a><br>\n";
}
?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/nmaprincesspi.css">
    <script src="js/nmaprincesspi.js"></script>
    <link rel="icon" type="css/img/" href="css/img/favicon.ico">
    <title>Princess Pi's Magical Nmap Web Thingy! (nmaprincesspi)</title>
</head>
<body>
    <h1>Princess Pi's Magical Nmap Web Thingy! (nmapprincesspi)</h1>
        <label for="nmapcmd">nmap command</label>
        <br>
        <input type="text" id="nmapcmd" name="nmapcmd">
        <input type="button" onclick="runNmapScan()" value="Go, Baby, Go!">
        <br>
        <br>
        <span class="fakelink" id="showlist" onclick="toggleShow('scanlist', 'showlist', 'Hide Previous Scans', 'Show Previous Scans')">Show Previous Scans</span>
        <br><br>
        <p class="hidden" id="link"></p>
        <div id="scanlist" class="hidden">
            <p><a href="run_clear_scans.php">Delete All Old Scans</a></p>
            <p>Progress</p>
            <p><?php echo $scanList; ?></p>
        </div>
        <br>
        <br>
        <pre class="hidden" id="progress"></pre>
</body>
</html>