<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if ($_POST) {
  http_response_code(200);
  $prénom = $_POST["prénom"];
  $nom = $_POST["nom"];
  $téléphone = $_POST["téléphone"];
  $adresse = $_POST["adresse"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  //Data Base Connection
  $conn = new mysqli("localhost", "root", "Mimounalina24?", "RDV");

  if ($conn->connect_error) {
    die($conn->connect_error);
  } else {
    $stmt = $conn->prepare("insert into ClientsPotentiel(prénom, nom, téléphone, adresse, email, message)
    values(?,?,?,?,?,?)");
    $stmt->bind_param(
      "ssisss",
      $prénom,
      $nom,
      $téléphone,
      $adresse,
      $email,
      $message
    );
    $stmt->execute();
    $stmt->close();
    $conn->close();
  }
}

?>
