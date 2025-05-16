<?php
session_start();

// 生成随机验证码
$code = rand(1000, 9999);
$_SESSION['captcha'] = $code;

// 创建图像
$image = imagecreatetruecolor(100, 36);
$bgColor = imagecolorallocate($image, 255, 255, 255);
imagefill($image, 0, 0, $bgColor);

// 添加干扰线
for ($i = 0; $i < 5; $i++) {
    $lineColor = imagecolorallocate($image, rand(0, 200), rand(0, 200), rand(0, 200));
    imageline($image, rand(0, 100), rand(0, 36), rand(0, 100), rand(0, 36), $lineColor);
}

// 添加验证码文本
$textColor = imagecolorallocate($image, 0, 0, 0);
imagestring($image, 5, 30, 10, $code, $textColor);

// 设置响应头
header('Content-Type: image/png');
header('Cache-Control: no-cache, must-revalidate');

// 输出图像
imagepng($image);
imagedestroy($image);
?>