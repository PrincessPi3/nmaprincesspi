<?php
$code = "1111";
$salt = "354rgf4efg45tg45g45tg45tg";


$argon2id_options = [
    'memory_cost' => PASSWORD_ARGON2_DEFAULT_MEMORY_COST,
    'time_cost' => PASSWORD_ARGON2_DEFAULT_TIME_COST,
    'threads' => PASSWORD_ARGON2_DEFAULT_THREADS
];

$passHash = password_hash($code, PASSWORD_ARGON2ID, $argon2id_options);
echo password_verify($code, $passHash)
?>