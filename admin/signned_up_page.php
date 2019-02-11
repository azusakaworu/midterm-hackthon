<?php
//the page after signed up
require_once('config.php');


$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$country = $_POST['country'];

print_r($_POST);

session_start();

try{
	sign_up($firstname,$lastname,$email,$country);
	echo '<br>whelcom join us Ontario Tourism  0-0!.<br>';
	
}catch(Exception $e){
	echo $e -> getMessage();
	exit;
}
	

// $message = sign_up($firstname,$lastname,$email,$country);

// echo json_encode($message);

?>