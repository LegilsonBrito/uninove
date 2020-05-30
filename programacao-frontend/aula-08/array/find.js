(function () {
  const carros = [
    { marca: "Ford", modelo: "Fusion" },
    { marca: "Fiat", modelo: "Siena" },
    { marca: "Honda", modelo: "Fit" },
  ];

  const carroEncontrado = carros.find(function (carro) {
    return carro.marca == "Fiat";
  });

  console.log(carroEncontrado);
})();
