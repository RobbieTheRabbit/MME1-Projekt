<?php
try
{
 // create PHP Data Object
 $pdo = new PDO('mysql:host=127.0.0.1;dbname=movieplaces', 'root', '');
 $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 $pdo->exec('SET NAMES "utf8"');
}
catch (PDOException $e)
{
 $error = 'Unable to connect to the database server: '.$e->getMessage();
 include 'error_inc.php';
 exit();
}
