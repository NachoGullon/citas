<?php
require('conexion.php');

$metodo = $_SERVER ['REQUEST_METHOD'];

if ($metodo == 'POST'){

    $email=$_POST['email'];
    $password=$_POST['password'];
    if(isset($email)){
        $usuario = login($email,$password);
        echo json_encode($usuario);
    }

}

    function login ($email,$password){
        global $db;
        $query="SELECT * FROM usuarios WHERE email = '$email' and password = '$password'";
        $resultado= mysqli_query($db,$query);
        $resultado= mysqli_fetch_assoc($resultado);
       

        return $resultado;

    }


?>