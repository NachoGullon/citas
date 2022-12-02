<?php   

require('conexion.php');

$query="SELECT * FROM familiares";
$resultado= mysqli_query($db,$query);
$resultado= mysqli_fetch_all($resultado);

$metodo = $_SERVER ['REQUEST_METHOD'];

if ($metodo == 'GET'){

    $id=$_GET['id'];
    if(isset($id)){
        $familiar = recuperarFamiliarId($id);
        echo json_encode($familiar);
    }else{
        $familiares = recuperarFamiliar ();
        echo json_encode($familiares);
    }

   
}elseif($metodo== 'POST'){

    $doctor= crearFamiliar($_POST);
    echo json_encode($familiar);
}
    function recuperarFamiliar (){
        global $db;
        $query="SELECT * FROM familiares";
        $resultado= mysqli_query($db,$query);
        $resultado= mysqli_fetch_all($resultado,MYSQLI_ASSOC);
       

        return $resultado;

    }

    function recuperarFamiliarId ($id){
        global $db;
        $query="SELECT * FROM familiares WHERE id = $id";
        $resultado= mysqli_query($db,$query);
        $resultado= mysqli_fetch_assoc($resultado);
       

        return $resultado;

    }

    function crearFamiliar ($paciente){
        $nombre=$familiar['nombre'];
        $paciente=$familiar['paciente'];
        $hospital=$familiar['hospital'];
        $email=$familiar['email'];
                
        global $db;
        $query="INSERT INTO familiares (nombre,paciente, hospital email,) VALUES ('$nombre','$paciente', 
        '$hospital', '$email)";
        $resultado= mysqli_query($db,$query);
        $familiar['id']=mysqli_insert_id($db);
        return $familiar;
    }

?>