<?php
    $jsondata = file_get_contents("data.json");
    $json = json_decode($jsondata, true);
    echo $json["locations"][3]["Name"];


//    $db_link = mysqli_connect('localhost', 'root', '', 'movieplaces');

    


?>
