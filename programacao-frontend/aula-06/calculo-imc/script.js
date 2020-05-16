(function () {
  // pegar ids no html - feito
  let nome = document.querySelector("#nome");
  let altura = document.querySelector("#altura");
  let peso = document.querySelector("#peso");
  let btnEnviar = document.querySelector("#btnEnviar");

  // criar evento de click no botão
  btnEnviar.addEventListener("click", function () {
    let alturaAoQuadrado = calcularQuadrado(altura);
    let resultado = calcularIMC(peso, alturaAoQuadrado);
    console.log("O imc é: " + resultado.toFixed(2));
  });

  function calcularQuadrado(altura) {
    return altura.value * altura.value;
  }

  function calcularIMC(peso, alturaAoQuadrado) {
    return peso.value / alturaAoQuadrado;
  }

  // criar funcoes para calcular o imc
  // calculo imc é peso dividido pela altura ao quadrado
})();
