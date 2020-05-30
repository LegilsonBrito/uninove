(function () {
  const btn = document.querySelector("#btn");
  const mensagem = document.querySelector("#mensagem");

  mensagem.style.display = "none";

  btn.addEventListener("mouseover", function () {
    mensagem.style.display = "block";
  });

  btn.addEventListener("mouseout", function () {
    mensagem.style.display = "none";
  });
})();
