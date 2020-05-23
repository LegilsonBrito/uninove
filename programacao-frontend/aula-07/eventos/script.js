(function () {
  const texto = document.querySelector("#texto");
  const btn = document.querySelector("#enviarFormulario");
  const mensagem = document.querySelector("#mensagem");
  btn.disabled = true;

  texto.addEventListener("keyup", function () {
    /* se o valor do campo "texto" for menor que 5 exibir mensagem:
        "O campo precisa ter mais que 5 caracteres"
    */
    if (texto.value.length <= 5) {
      // monstrar mensagem
      mensagem.innerHTML = "O campo precisa ter mais que 5 caracteres";
      texto.style.border = "2px red solid";
      btn.disabled = true;
    } else {
      mensagem.innerHTML = "";
      texto.style.border = "";
      btn.disabled = false;
    }
    //console.log(texto.value.length);
  });
})();
