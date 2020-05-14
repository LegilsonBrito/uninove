<?php
  $nome     = $_POST["txt_nome"];
  $idade    = $_POST["txt_idade"];
  $pais     = $_POST["txt_pais"];
  $comidas  = $_POST["comidaFavorita"];

  $qtdCaracteres = contaCaracteres($nome);
  $anoDeNascimento = anoDeNascimento($idade);
  $palavraMaiuscula = letrasMaiusculas($pais);

  echo "A quantidade de letras no nome digitado é: " . $qtdCaracteres . "<br />";
  echo "O ano de nascimento é " . $anoDeNascimento . "<br />";
  echo "Todas as letras maiúsculas " . $palavraMaiuscula . "<br />";
  echo "Comidas favoritas: <br />";
  foreach($comidas as $c) {
    echo $c . "<br />";
  }


  function contaCaracteres($param) {
    return strlen($param);
  }
  
  function anoDeNascimento($param) {
    $anoAtual = Date("Y");
    return $anoAtual - $param;
  }

  function letrasMaiusculas($param) {
    return strtoupper($param);
  }
  // funções com apenas 1 parâmetro são chamadas de díades
  // funções com 2 parâmetro são chamadas de bíades 
  // funções com 3 parâmetro são chamadas de tríades 

?>
