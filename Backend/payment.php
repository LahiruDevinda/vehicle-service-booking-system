<?php

$host = "localhost";
$username = "root";
$password = "";
$dbname = "vehicle_service_db";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $cardName = $_POST['cardName'] ?? '';
    $cardNumber = $_POST['cardNumber'] ?? '';
    $billingEmail = $_POST['billingEmail'] ?? '';
    $billingAddress = $_POST['billingAddress'] ?? '';
    $paymentMethod = $_POST['paymentMethod'] ?? 'card';

    $cardNumberClean = str_replace(' ', '', $cardNumber);
    $cardLast4 = substr($cardNumberClean, -4);

    
    $stmt = $conn->prepare("INSERT INTO payments (card_name, card_last4, billing_email, billing_address, payment_method) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $cardName, $cardLast4, $billingEmail, $billingAddress, $paymentMethod);

    if ($stmt->execute()) {
        $queryString = $_SERVER['QUERY_STRING'] ?? '';
        
        header("Location: ../Front%20End/bookingConfirmation.html?" . $queryString);
        exit();
    } else {
        echo "Error processing payment: " . $stmt->error;
    }

    $stmt->close();
}
$conn->close();