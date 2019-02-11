<?php

  //table name: tbl_users

  function sign_up($firstname,$lastname,$email,$country){
  	include('connect.php');

  	//check if the email address is unique
	//select row from table where conditions
	$result = $dbh->prepare("SELECT email FROM tbl_users WHERE email = :email");
	$result->execute(array(':email'=>$email));
   //if email exist throw new Exception
	
   if($result->rowCount() > 0){throw new Exception("That email address is taken-----.") ;}


   //if ok：insert data to database
   $result = $dbh->prepare('INSERT INTO tbl_users (first_name,last_name,email,country) values(:firstname,:lastname,:email,:country)');

   $result->execute(array(':firstname'=>$firstname,
				          ':lastname'=>$lastname,
				          ':email'=>$email,
				          ':country'=>$country));
   if(!$result){
   	throw new Exception("Could not register you in database- plase try again later");
   	
   }
   return true;


  }



?>