(function () {
  const dias = [
    "segunda",
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sabado",
    "domingo",
  ];

  const diaSelecionado = dias.filter(function (dia) {
    return dia == "segunda";
  });

  console.log(diaSelecionado);
})();
