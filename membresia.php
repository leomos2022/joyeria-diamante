<?php
// Configuración de la base de datos
$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "joyeria_diamante";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Procesar datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'] ?? null;
    $fecha_nacimiento = $_POST['fecha_nacimiento'] ?? null;
    $preferencias = isset($_POST['preferencias']) ? implode(", ", $_POST['preferencias']) : null;
    
    // Insertar en la base de datos
    $sql = "INSERT INTO miembros (nombre, email, telefono, fecha_nacimiento, preferencias)
            VALUES (?, ?, ?, ?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $nombre, $email, $telefono, $fecha_nacimiento, $preferencias);
    
    if ($stmt->execute()) {
        // Éxito - redirigir con mensaje
        header("Location: index.html?registro=exito");
    } else {
        // Error
        header("Location: index.html?registro=error");
    }
    
    $stmt->close();
}

$conn->close();
?>