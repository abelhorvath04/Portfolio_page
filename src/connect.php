<?php

// CONNECTION TO DB

$connection = mysqli_connect('localhost', 'root', '', 'gallery');
$err = mysqli_connect_error();
 if($err)
    exit($err);

// SCAN DIRECTORY and UPLOAD TO DB

$dir = './components/Images/gallery/';
$files = scandir($dir, SCANDIR_SORT_DESCENDING);
foreach ($files as $file) {
    if ($file != '.' && $file != '..') {

        $checkQuery = "SELECT COUNT(*) AS count FROM pictures WHERE filename = '$file'";
        $result = mysqli_query($connection, $checkQuery);
        $row = mysqli_fetch_assoc($result);
        $count = $row['count'];

        if ($count == 0) {
            $sql = "INSERT INTO pictures (filename) VALUES ('$file')";
            mysqli_query($connection, $sql);
        }
    }
}

