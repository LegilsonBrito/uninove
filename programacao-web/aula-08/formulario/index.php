<html>
  <head>
    <title>PHP - Formulário</title>
  </head>

  <body>

  <form method="POST" action="formulario.php">
    <label>Digite seu nome:</label><br />
    <input type="text" name="txt_nome" /><br /><br />

    <label>Digite sua idade:</label><br />
    <input type="number" name="txt_idade" /><br /><br />

    <label>País de nascimento:</label><br />
    <input type="text" name="txt_pais" /><br /><br />

    <label>Escolha sua comida favorita:</label><br />
    <input type="checkbox" name="comidaFavorita[]" value="Lasanha" />Lasanha<br />
    <input type="checkbox" name="comidaFavorita[]" value="Strogonoff" />Strogonoff<br />
    <input type="checkbox" name="comidaFavorita[]" value="Pizza" />Pizza<br /> </br />

    <input type="submit" value="Enviar Formulário" />

  </form>

  </body>
</html>