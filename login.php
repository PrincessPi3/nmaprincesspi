<?php
if(!empty($_POST['code'])) {
    require('auth.php');
    $supplied = hash();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Princess Pi's Nmaprincesspi Login!</title>
</head>
<body>
    <form action="login.php" method="post">
        <input type="password" name="code"> <input type="Login">
    </form>
</body>
</html>