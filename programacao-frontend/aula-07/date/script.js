(function () {
  const dataAtual = document.querySelector("#dataAtual");
  const btn = document.querySelector("#btnFormulario");
  const dataSistemica = document.querySelector("#dataSistemica");
  const mesAtual = document.querySelector("#mesAtual");
  const dataGerada = document.querySelector("#dataGerada");

  btn.addEventListener("click", function () {
    let data = new Date();
    dataAtual.innerHTML = data;
    dataSistemica.innerHTML = data.toISOString();
    mesAtual.innerHTML = data.getMonth() + 1;
    dataGerada.innerHTML = new Date(2020, 4, 22);
  });
})();
