<?php 

  if ($_COOKIE["voto"]) {   
    echo "nao pode votar";
  } else {
    setcookie("voto", "true", time() + (86400 * 30));
    $voto = $_POST["musica"];
    echo "Você votou em: $voto <br>";
    echo "Obrigado pelo seu voto";
  }

?>