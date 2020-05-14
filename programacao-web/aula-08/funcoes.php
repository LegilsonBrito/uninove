<?php 
  
  function mostraNomeSemParametro():void {
    echo "Olá Wagner <br /><br />";
  }

  function mostraNomeComParametro($nome):void {
    $idade = retornaIdade();
    echo "Olá " . $nome . " tem " . $idade . " anos";
  }

  function retornaIdade() {
    return 21;
  }

  //mostraNomeSemParametro();

  mostraNomeComParametro("Mariazinha");



?>