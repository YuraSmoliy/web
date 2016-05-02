<?php

//$conn=mysqli_connect('localhost','root','140690');

//if(!$conn)
//{
//    die("conection fail");
//}
//
//$sql="CREATE DATABASE myDB";
//
//if(mysqli_query($conn,$sql))
//{
//    echo "database created successfully";
//}
//else
//{
//    echo"error";
//}
//mysqli_close($conn);
//$conn=mysqli_connect('localhost','root','140690','myDB');
//$sql="CREATE TABLE MyGuests(
//id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
//firstmane VARCHAR(30) NOT NULL, lastname VARCHAR(30) NOT NULL,
//email VARCHAR(30), reg_date TIMESTAMP)";
//if(mysqli_query($conn,$sql)){echo "table create successfully";}
//else{echo"error table create ";}
//$conn=mysqli_connect('localhost','root','140690','myDB');
//$sql="select * from MyGuests";
//$result=mysqli_query($conn,$sql);
//if(mysqli_num_rows($result)>0)
//{
//    echo"are some records";
//}
//else{echo"are no gess";}
//mysqli_close($conn);
//$conn=mysqli_connect('localhost','root','140690','myDB');
//$sql="insert into MyGuests(firstmane,lastname,email)
//VALUES('Yura','SMOLIY','fox257@ukr.net')";
//if(mysqli_query($conn,$sql)){echo"record create";}
//else{echo"error";}
//$conn=mysqli_connect('localhost','root','140690','myDB');
//$sql="select * from MyGuests";
//$result=mysqli_query($conn,$sql);
//if(mysqli_num_rows($result)>0)
//{
//    echo"are some records";
//}
//else{echo"are no gess";}

//$conn=mysqli_connect('localhost','root','140690','myDB');
//$sql="select firstmane,lastname from MyGuests";
//$result=mysqli_query($conn,$sql);
//if(mysqli_num_rows($result)>0)
//{
//    while($row=mysqli_fetch_assoc($result))
//    {
//        echo $row['firstmane']." ".$row["lastname"]."<br>";
//    }
//}
//else{echo "0 results";}
mysqli_close($conn);
?>