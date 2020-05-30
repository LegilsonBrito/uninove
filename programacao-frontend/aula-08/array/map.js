(function () {
  const carros = [
    { marca: "Ford", modelo: "Fiest" },
    { marca: "Ford", modelo: "Fusion" },
    { marca: "Fiat", modelo: "Siena" },
    { marca: "Volkswagen", modelo: "Gol" },
  ];

  const adicionandoAno = carros.map(function (carro) {
    if (carro.marca == "Fiat") {
      carro.ano = "2019";
    } else {
      carro.ano = "2020";
    }
    return carro;
  });

  console.log(adicionandoAno);
})();
