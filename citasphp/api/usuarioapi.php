<?php   
// conectamos con el archivo

require('conexion.php');


$metodo = $_SERVER ['REQUEST_METHOD'];

if ($metodo == 'GET'){

    $id=$_GET['id'];
    if(isset($id)){
        $usuario = recuperarUsuarioId($id);
        echo json_encode($usuario);
    }else{
        $usuarios = recuperarUsuario ();
        echo json_encode($usuarios);
    }

   
}elseif($metodo== 'POST'){

    $usuario= crearUsuario($_POST);
    echo json_encode($usuario);
}
    function recuperarUsuario (){
        global $db;
        $query="SELECT * FROM usuarios";
        $resultado= mysqli_query($db,$query);
        $resultado= mysqli_fetch_all($resultado,MYSQLI_ASSOC);
       

        return $resultado;

    }

    function recuperarUsuarioId ($id){
        global $db;
        $query="SELECT * FROM usuarios WHERE id = $id";
        $resultado= mysqli_query($db,$query);
        $resultado= mysqli_fetch_assoc($resultado);
       

        return $resultado;

    }

    function crearUsuario ($usuario){
        $email=$usuario['email'];
        $nombre=$usuario['nombre'];
        $password=$usuario['password'];
        global $db;
        $query="INSERT INTO usuarios (email,nombre,password) VALUES ('$email','$nombre','$password')";
        $resultado= mysqli_query($db,$query);
        $usuario['id']=mysqli_insert_id($db);
        return $usuario;
    }
?>