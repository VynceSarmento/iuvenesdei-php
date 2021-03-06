<?php

class LoginDAO {

    public $con;

    public function __construct() {
        $this->con = new Conexao();
    }

    public function entrar($usuario, $senha) {
        $sql = "SELECT * "
                . " FROM login "
                . " WHERE usuario=:usuario AND "
                . " senha=:senha AND"
                . " situacao = 1 LIMIT 1";
        $stmt = $this->con->prepare($sql);
        $stmt->bindParam(':usuario', $usuario);
        $stmt->bindParam(':senha', $senha);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function usuario(LoginVO $log) {
        $sql = "SELECT * "
                . " FROM login "
                . " WHERE nome=:nome ";
        $stmt = $this->con->prepare($sql);
        $stmt->bindParam(':nome', $log->nome);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

}

?>
