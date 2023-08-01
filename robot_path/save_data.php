<?php

$movement = $_POST["movement"];

// Connect to the database
$conn = mysqli_connect("localhost", "root", "", "robotdb");

// Insert the data into the database
$sql = "INSERT INTO movements (movements) VALUES ('$movement')";

if (mysqli_query($conn, $sql)) {
  echo "Data saved successfully";
} else {
  echo "Error saving data";
}

// Close the connection
mysqli_close($conn);

?>


