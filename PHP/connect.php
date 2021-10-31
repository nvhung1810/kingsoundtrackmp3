<?php
   //Kết nối
   $host = "localhost";
   $username = "root";
   $password = "";
   $dbname = "kingsoundtrackmp3";
   $conn = new mysqli($host,$username,$password,$dbname);
   if ($conn -> connect_error) {
       echo "Lỗi kết nối";
   }
   else {}
?>