<?php
    include 'connect.php';


 function get_tbl_video($pdo){

        $query ="SELECT * FROM tbl_video ";
        $res=$pdo->query($query);
        return $res->fetch(PDO::FETCH_ASSOC);
    }






?>
