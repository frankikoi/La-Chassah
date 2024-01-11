<?php 
    $name = $_POST["name"];
    $email = $_POST["email"];
    $contactNumber = $_POST["contactNumber"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];    

    require "vendor/autoload.php";
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;

    $mail = new PHPMailer(true);
    
    $mail->isSMTP();
    $mail->SMTPAuth = true;

    $mail->Host = "smtp.gmail.com";
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->Username ="azel.opena22@gmail.com";
    $mail->Password = "cvxx zbvb foxa cxys";

    $mail->setFrom("azel.opena22@gmail.com", $name);
    $mail->addAddress("azel.opena22@gmail.com", "Azel");

    $mail->isHTML(true); // Set email format to HTML

    $mail->Subject = $subject; 
    $mail->Body = $message . "<br><br>Sender Name: " . $name . "<br>Sender Email: " . $email . "<br>Sender Contact Number: " . $contactNumber;

    $mail->send();

    echo"email.sent";
?>