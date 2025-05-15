<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/nmaprincesspi.css">
    <script src="js/nmaprincesspi.js"></script>
    <link rel="icon" type="css/img/" href="css/img/favicon.ico">
    <title>Princess Pi's Magical Nmap Web Thingy!</title>
</head>
<body>
    <h1>Princess Pi's Magical Nmap Web Thingy!</h1>
        <label for="nmapcmd">nmap command</label>
        <br>
        <input type="text" id="nmapcmd" name="nmapcmd">
        <input type="button" onclick="runNmapScan()" value="Go, Baby, Go!">
        <br><br>
        <span class="hidden" id="link"></span>
        <br>
        <pre class="hidden" id="progress">
        </pre>
</body>
</html>