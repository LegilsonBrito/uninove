(function () {
  const pagina = document.querySelector("#pagina");
  const paragrafo = document.createElement("p"); // <p></p>
  const conteudo = document.createTextNode(
    "Inserindo texto no P que acabei de criar"
  );
  paragrafo.appendChild(conteudo);
  pagina.appendChild(paragrafo);
})();
