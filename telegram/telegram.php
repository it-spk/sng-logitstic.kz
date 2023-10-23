<?php

/* https://api.telegram.org/bot6401833653:AAGX6h2WnLxwMaTDS83z-nKl3C5G0HpLboA/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$token = "6401833653:AAGX6h2WnLxwMaTDS83z-nKl3C5G0HpLboA";
$chat_id = "-4080883398";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  return true;
} else {
  return false;
}
?>