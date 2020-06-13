(function () {
  const btn = document.querySelector("#btn");
  const paragrafo = document.querySelector("#email");
  const cepDigitado = document.querySelector("#cep");
  const btnBuscar = document.querySelector("#buscar");
  const rua = document.querySelector("#rua");
  const bairro = document.querySelector("#bairro");
  const uf = document.querySelector("#uf");

  btn.addEventListener("click", function () {
    fetch("https://randomuser.me/api/?gender=female", {
      method: "GET",
    }).then(function (resposta) {
      resposta.json().then(function (respostaJson) {
        console.log(respostaJson.results[0].email);
        paragrafo.innerHTML = respostaJson.results[0].email;
      });
    });
  });

  btnBuscar.addEventListener("click", function () {
    fetch("https://viacep.com.br/ws/" + cepDigitado.value + "/json/", {
      method: "GET",
    }).then(function (resposta) {
      resposta.json().then(function (respostaJson) {
        console.log(respostaJson);
        rua.innerHTML = respostaJson.logradouro;
        bairro.innerHTML = respostaJson.bairro;
        uf.innerHTML = respostaJson.uf;
      });
    });
  });
})();
