<?php
require('conexion.php');

$metodo = $_SERVER ['REQUEST_METHOD'];

if ($metodo == 'POST'){

    $citas= crearCita($_POST);
    echo json_encode($citas);

}

function crearCita($cita){
    $idDoctor=$cita['idDoctor'];
    $idPaciente=$cita['idPaciente'];
    $fecha=$cita['fecha'];
    $motivo=$cita['motivo'];       
    global $db;
    $query="INSERT INTO citaPaciente (idDoctor,idPaciente,fecha,motivo) VALUES ('$idDoctor','$idPaciente','$fecha', 
    '$motivo')";
    $resultado= mysqli_query($db,$query);
    return $cita;
}


?>