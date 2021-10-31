<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thêm thông tin sinh viên</title>
</head>
<body>
    <p>Trang này sẽ thêm thông tin sinh viên</p>
    <br>
    <?php
    //gọi kết nối
    include_once './connect.php';
    $masv=$_POST['svR'];
    $tensv=$_POST['tensvR'];
    $cmnd=$_POST['CMND_R'];
    $diachi=$_POST['AddressR'];
    $dienthoai=$_POST['PhoneR'];
    $email=$_POST['EmailR'];
    // Up ảnh lên
    $pic_path = '../IMG/';
    $TenPic = basename($_FILES['PicR']['name']);
    $TenPath = $pic_path . $TenPic;
    if (move_uploaded_file($_FILES['PicR']['tmp_name'],$TenPath)) {
        echo "Cập nhật ảnh thành công";
    }
    else {
        echo "Có gì đó sai sai";
    }
    // Kết thúc up ảnh
    if(isset($_POST['svR'])&& !empty($_POST['svR'])) 
    {
        // Kiểm tra trùng
        $sql_dup="SELECT masv FROM t_sinhvien WHERE masv = '$masv'";
        $dup=$conn->query($sql_dup);
        if($dup->num_rows>0) {
            // Trùng
            echo "<script>alert('Bị trùng mã sinh viên nè')</script>";
            echo "Có vẻ như bị trùng mã sinh viên hãy <a href='../HTML/index.html'>Quay lại</a> để kiểm tra xem";
        }
        else {
            //Thực hiện hành động thêm dữ liệu
            $sql_insert = "INSERT INTO t_sinhvien VALUES ('$masv','$tensv','$cmnd','$diachi','$email','$dienthoai','$TenPic')";
            $results = $conn -> query($sql_insert) or die ($conn->error);
            if ($results) {
                header('location:viewsv.php');
                
            }
            else {
                echo "Lỗi nè ".$sql_insert;
            }
        }
    }
    $conn -> close()
    ?>
</body>
</html>