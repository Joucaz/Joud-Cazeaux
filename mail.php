<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Envoi d'un message par formulaire</title>
</head>

<body>

<?php 
// if(isset($_POST['submit'])){
    $to = "joud@joudcazeaux.fr"; // this is your Email address
    $from = "joud@joudcazeaux.fr";
    $email = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $subject2 = "Copy of your message on joudcazeaux.fr : " . $_POST['subject'];
    $message = $name . " (" . $email . ") send : \n\n" . $_POST['text'];
    $message2 = "Here is a copy of your message \n\n" . $name . " wrote : \n\n" . $_POST['text'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($email,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    // header('Location: https://joudcazeaux.fr');
    // echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // }

?>
</body>
</html>