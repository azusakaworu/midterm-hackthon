<?php
	include 'functions.php';
	
	$tbl_video = get_tbl_video($dbh);
	$data  =  $tbl_video;
	echo json_encode($data); 
	
?>