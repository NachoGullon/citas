<?php 
require('conexion.php');

$query="SELECT * FROM doctores";
$resultado= mysqli_query($db,$query);
$resultado= mysqli_fetch_all($resultado);

$metodo = $_SERVER ['REQUEST_METHOD'];

if ($metodo == 'GET'){

  
    if(isset($_GET['id'])){
        $id=$_GET['id'];
        $doctor = recuperarDoctorId($id);
        echo json_encode($doctor);
    }else{
        $doctores = recuperarDoctor ();
        echo json_encode($doctores);
    }

   
}elseif($metodo== 'POST'){

    $doctor= crearDoctor($_POST);
    echo json_encode($doctor);
}elseif($metodo == 'PUT'){
    
    $doctor= actualizaDoctor();
    echo json_encode($doctor);

}
    function recuperarDoctor (){
        global $db;
        $query="SELECT * FROM doctores";
        $resultado= mysqli_query($db,$query);
        $resultado= mysqli_fetch_all($resultado,MYSQLI_ASSOC);
       

        return $resultado;

    }

    function recuperarDoctorId ($id){
        global $db;
        $query="SELECT * FROM doctores WHERE id = $id";
        $resultado= mysqli_query($db,$query);
        $resultado= mysqli_fetch_assoc($resultado);
       

        return $resultado;

    }

    function crearDoctor ($doctor){
        $nombre=$doctor['nombre'];
        $password=$doctor['password'];
        $hospital=$doctor['hospital'];
        $turno=$doctor['turno'];
        $apellidos=$doctor['apellidos'];
        $especialidad=$doctor['especialidad'];        
        global $db;
        $query="INSERT INTO doctores (nombre,password,hospital,turno,apellidos,especialidad) VALUES ('$nombre','$password','$hospital', 
        '$turno','$apellidos','$especialidad')";
        $resultado= mysqli_query($db,$query);
        $doctor['id']=mysqli_insert_id($db);
        return $doctor;
    }

    function actualizaDoctor (){
        $id=PUT('id');
        $nombre=PUT('nombre');
        $password=PUT('password');
        $hospital=PUT('hospital');
        $turno=PUT('turno');
        $apellidos=PUT('apellidos');
        $especialidad=PUT('especialidad');        
        global $db;
        $query="UPDATE  doctores SET nombre ='$nombre',password='$password',hospital='$hospital',turno='$turno',apellidos='$apellidos',especialidad='$especialidad'
         WHERE id= $id";
        $resultado= mysqli_query($db,$query);
        $doctor= new stdClass();
        return $doctor ;
    }

    function PUT(string $name){

        $lines = file('php://input');
        $keyLinePrefix = 'Content-Disposition: form-data; name="';
    
        $PUT = [];
        $findLineNum = null;
    
        foreach($lines as $num => $line){
            if(strpos($line, $keyLinePrefix) !== false){
                if($findLineNum){ break; }
                if($name !== substr($line, 38, -3)){ continue; }
                $findLineNum = $num;
            } else if($findLineNum){
                $PUT[] = $line;
            }
        }
    
        array_shift($PUT);
    }

    function borrarDoctorId ($id){
        global $db;
        $query="DELETE  FROM doctores WHERE id = $id";
        $resultado= mysqli_query($db,$query);
        
       

        return $resultado;

    }
?>