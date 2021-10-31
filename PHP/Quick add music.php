<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thêm nhạc vào database</title>
</head>
<body>
    <?php
    include_once './connect.php';
    $tennhac=$_POST['musicname'];
    $file_path = '../Music/';
    $TenFile = basename($_FILES['Mp3File']['name']);
    $TenPath = $file_path . $TenFile;
    if (move_uploaded_file($_FILES['Mp3File']['tmp_name'],$TenPath)) {
        echo "Cập nhật File thành công";
    }
    else {
        echo "File đã bị lỗi khi cập nhật";
    }
    $pic_path = '../Music/Music IMG/';
    $TenPic = basename($_FILES['Picture']['name']);
    $TenPath = $pic_path . $TenPic;
    if (move_uploaded_file($_FILES['Picture']['tmp_name'],$TenPath)) {
        echo "Cập nhật ảnh thành công";
    }
    else {
        echo "Ảnh đã bị lỗi khi cập nhật";
    }
    $sql_insert = "INSERT INTO music VALUES ('$tennhac','$TenFile','$TenPic')";
    $results = $conn -> query($sql_insert) or die ($conn->error);
    if ($results) {
        echo "Đã cập nhật thông tin nhạc";
    }
    else {
        echo "Bị lỗi gì đó rồi ".$sql_insert;
    }
    $conn -> close()
    ?>
</body>
</html>