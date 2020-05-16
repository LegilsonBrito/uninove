(function () {
  let btnAcender = document.querySelector("#acender");
  let btnApagar = document.querySelector("#apagar");

  btnAcender.addEventListener("click", function () {
    document.querySelector("body").style.background = "#d0e426";
  });

  btnApagar.addEventListener("click", function () {
    document.querySelector("body").style.background = "#000000";
  });
})();
