<?php
    include 'connect.php';


 function get_tbl_video($dbh){

        $query ="SELECT * FROM tbl_video ";
        $res=$dbh->query($query);
        return $res->fetch(PDO::FETCH_ASSOC);
    }






?>
