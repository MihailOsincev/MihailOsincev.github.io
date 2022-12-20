<?php 

$c = true;

// Save Basic Form parametrs
// trim(value) - trim spaces around  

$project_name = trim($_POST["project_name"]);
$admin_email  = trim($_POST["admin_email"]);
$form_subject = trim($_POST["form_subject"]);
$form_from = trim($_POST["form_from"]);

$message = "";

foreach ( $_POST as $key => $value ) {
	if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" && $key != "form_from" ) {
		$message .= "
		" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
		<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
		<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
	</tr>
	";
	}
}

// Create message text for sending on email
$message = "<table style='width: 100%;'>$message</table>";

// Adjusting text encoding
function adopt($text) {
	return '=?UTF-8?B?'.base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$form_from.'>' . PHP_EOL .
'Reply-To: '.$form_from.'' . PHP_EOL;

// Sending email to admin
mail($admin_email, adopt($form_subject), $message, $headers );

function saveUserDataInFile($text){
	$fileContent = fopen('form-fill.html', 'a+');
	fwrite($fileContent, date('Y-m-d H:i:s') . "\n");
	fwrite($fileContent, $text);
	fwrite($fileContent, "\n" . "\n" . "\n" . "\n");

}

saveUserDataInFile($message);

echo "<div class='contact-form__success'>Форма отправлена успешно!</div>";

?>