<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Envoi d'un message par formulaire</title>
</head>

<body>

<?php 
if(!isset($_SERVER['HTTP_REFERER'])){
    // redirect them to your desired location
    header('location:../index.html');
    exit;
}
// if(isset($_POST['submit'])){
    // $to = "joud@joudcazeaux.fr"; // this is your Email address
    // $from = "joud@joudcazeaux.fr";
    // $to = "joud.cazeaux@free.fr"; // this is your Email address
    // $from = "joud.cazeaux@free.fr";
    // $email = $_POST['email']; // this is the sender's Email address
    // $name = $_POST['name'];
    // $subject = $_POST['subject'];
    // $subject2 = "Copy of your message on joudcazeaux.fr : " . $_POST['subject'];
    // $message = $name . " (" . $email . ") send : \n\n" . $_POST['text'];
    // $message2 = "Here is a copy of your message \n\n" . $name . " wrote : \n\n" . $_POST['text'];

    // $headers = "From:" . $from;
    // $headers2 = "From:" . $to;
    // mail($to,$subject,$message,$headers);
    // mail($email,$subject2,$message2,$headers2); // sends a copy of the message to the sender



$to = "joud@joudcazeaux.fr";
$fromNoReply = "Joud Cazeaux <noreply@joudcazeaux.fr>";
$from = "Joud Cazeaux <joud@joudcazeaux.fr>"; 
$email = $_POST['email'];
$name = $_POST['name'];
$subject = $_POST['subject'];
$subject2 = "Copy of your message on joudcazeaux.fr : " . $subject;
$message = $name . " (" . $email . ") sent : \n\n" . $_POST['text'];
$message2 = "Here is a copy of your message \n\n" . $name . " wrote : \n\n" . $_POST['text'];

// Validation de l'email utilisateur
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email format");
}

// En-têtes
// $headers = "From: $from\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";
// $headers2 = "From: $from\r\nReply-To: $to\r\nContent-Type: text/plain; charset=UTF-8";

// En-têtes complets
$headers = "From: $from\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$headers2 = "From: $fromNoReply\r\n";
$headers2 .= "MIME-Version: 1.0\r\n";
$headers2 .= "Content-Type: text/plain; charset=UTF-8\r\n";
// $headers2 .= "Reply-To: $to\r\n";


// Envoi des emails
mail($to, $subject, $message, $headers); // À toi
mail($email, $subject2, $message2, $headers2); // À l'utilisateur


    // header('Location: https://joudcazeaux.fr');
    // echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // }

?>
</body>
</html>