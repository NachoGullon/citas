<?php 
require('conexion.php');

$query="SELECT * FROM pacientes";
$resultado= mysqli_query($db,$query);
$resultado= mysqli_fetch_all($resultado);

$metodo = $_SERVER ['REQUEST_METHOD'];

if ($metodo == 'GET'){

    $id=$_GET['id'];
    if(isset($id)){
        $paciente = recuperarPacienteId($id);
        echo json_encode($paciente);
    }else{
        $pacientes = recuperarPaciente ();
        echo json_encode($pacientes);
    }

   
}elseif($metodo== 'POST'){

    $doctor= crearPaciente($_POST);
    echo json_encode($paciente);
}
    function recuperarPaciente (){
        global $db;
        $query="SELECT * FROM pacientes";
        $resultado= mysqli_query($db,$query);
        $resultado= mysqli_fetch_all($resultado,MYSQLI_ASSOC);
       

        return $resultado;

    }

    function recuperarPacienteId ($id){
        global $db;
        $query="SELECT * FROM pacientes WHERE id = $id";
        $resultado= mysqli_query($db,$query);
        $resultado= mysqli_fetch_assoc($resultado);
       

        return $resultado;

    }

    function crearPaciente ($paciente){
        $nombre=$paciente['nombre'];
        $password=$paciente['password'];
        $email=$paciente['email'];
        $telefono=$paciente['telefono'];        
        global $db;
        $query="INSERT INTO pacientes (nombre,password,email,telefono) VALUES ('$nombre','$password','$email', 
        '$telefono')";
        $resultado= mysqli_query($db,$query);
        $paciente['id']=mysqli_insert_id($db);
        return $paciente;
    }

?>