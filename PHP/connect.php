<?php
   //Kết nối
   $host = "127.0.0.1:3307";
   $username = "root";
   $password = "";
   $dbname = "kingsoundtrackmp3";
   $conn = new mysqli($host,$username,$password,$dbname);
   if ($conn -> connect_error) {
       echo "Lỗi kết nối";
   }
   else {
       echo "Kết nối thành công";
   }
?>