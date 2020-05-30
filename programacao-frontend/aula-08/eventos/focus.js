(function () {
  const texto = document.querySelector("#texto");
  const mensagem = document.querySelector("#mensagem");

  mensagem.style.display = "none";

  texto.addEventListener("focusin", function () {
    mensagem.style.display = "block";
  });

  texto.addEventListener("focusout", function () {
    mensagem.style.display = "none";
  });
})();
