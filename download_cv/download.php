<?php
$file = './cv.pdf';
$filename = 'cv.pdf';
header('Content-type: application/pdf');
header('Content-Disposition: attachment; filename="' . $filename . '"');
readfile($file);

header("Location: ".$_SERVER["HTTP_REFERER"]);