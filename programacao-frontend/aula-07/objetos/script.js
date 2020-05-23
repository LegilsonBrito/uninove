(function () {
  const nome = document.querySelector("#nome");
  const ano = document.querySelector("#ano");
  const btn = document.querySelector("#enviarFormulario");

  btn.addEventListener("click", function () {
    let carro = {
      nomeDoCarro: nome.value,
      anoDoCarro: ano.value,
    };

    console.log(carro);
  });
})();
