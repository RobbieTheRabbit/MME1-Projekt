<?php
     define('_HOST_NAME','127.0.0.1');
     define('_DATABASE_NAME','movieplaces');
     define('_DATABASE_USER_NAME','root');
     define('_DATABASE_PASSWORD','');
 
     $con = new MySQLi(_HOST_NAME,_DATABASE_USER_NAME,_DATABASE_PASSWORD,_DATABASE_NAME);
  
     if($con->connect_errno)
     {
       die("Keine Verbidung möglich! : -> ".$con->connect_error);
     }