<?php
header("Content-type: text/html; charset=utf-8"); //GBK模式 请讲此处utf-8变更为GB2312
//帐户名
$username="dadizaixian";
 
//帐户名密码,取MD5大写取32位 密码,网址：http://md5jiami.51240.com/
$password="F4EBA2BD80090892ED6955A3310271C5";
  
//网关ID
$gwid="aa309bb9";
 
//手机号  可以多个手机号
$mobile = "18510122861";
 
//短信内容
$message='【大地在线】您的验证码是：2342';
 
//如果是GBK模式请放开注释此句 (不存储数据库的情况下)
//$message = iconv("GBK","UTF-8",$message); 

$postData = array
    (
    'type'=>'send',
    'username'=>$username,   
    'password'=>$password,   
    'gwid'=>$gwid, 
    'mobile'=>$mobile,
    'message'=>$message
    );
 
$url="http://jk.106api.cn/smsUTF8.aspx";
  
//发送并把结果赋给$result,返回一个XML信息,解析xml 信息判断
          
      
function postSMS($url,$postData)
{
    $row = parse_url($url);
    $host = $row['host'];
    $port = isset($row['port']) ? $row['port']:80;
    $file = $row['path'];
    $post = "";
    while (list($k,$v) = each($postData)) 
    {
        $post .= rawurlencode($k)."=".rawurlencode($v)."&"; 
    }
    $post = substr( $post , 0 , -1 );
    $len = strlen($post);
    $fp = @fsockopen( $host ,$port, $errno, $errstr, 10);
    if (!$fp) {
        return "$errstr ($errno)\n";
    } else {
        $receive = '';
        $out = "POST $file HTTP/1.1\r\n";
        $out .= "Host: $host\r\n";
        $out .= "Content-type: application/x-www-form-urlencoded\r\n";
        $out .= "Connection: Close\r\n";
        $out .= "Content-Length: $len\r\n\r\n";
        $out .= $post;      
        fwrite($fp, $out);
        while (!feof($fp)) {
            $receive .= fgets($fp, 128);
        }
        fclose($fp);
        $receive = explode("\r\n\r\n",$receive);
        unset($receive[0]);
        return implode("",$receive);
    }
}

$result= postSMS($url,$postData);

echo $result;
?>