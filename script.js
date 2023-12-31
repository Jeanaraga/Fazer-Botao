const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let widthValor = parseInt(document.getElementById("largura").value);
  let heightValor = parseInt(document.getElementById("altura").value);
  let bdRadius = parseInt(document.getElementById("borderRadius").value);
  let radioValor = document.querySelector(
    'input[name="simOuNao"]:checked'
  ).value;
  let sombraValor = document.querySelector(
    'input[name="snSombra"]:checked'
  ).value;
  let corFundoValor = document.getElementById("corFundo").value;
  let corTextoValor = document.getElementById("corTexto").value;

  
  if (isNaN(widthValor) || isNaN(heightValor) || isNaN(bdRadius)) {
    alert(
      "Por favor, insira valores numéricos válidos para largura, altura e raio de borda."
    );
    return;
  }

  if (widthValor < 0 || heightValor < 0 || bdRadius < 0) {
    alert(
      "Os valores de largura, altura e raio de borda devem ser não negativos."
    );
    return;
  }

  let resultadoBotão = document.getElementById("resulte");
  resultadoBotão.classList.add("ativar");

  resultadoBotão.style.width = widthValor + "px";
  resultadoBotão.style.height = heightValor + "px";
  resultadoBotão.style.borderRadius = bdRadius + "px";
  resultadoBotão.style.backgroundColor = corFundoValor;
  resultadoBotão.style.color = corTextoValor;

  if (radioValor == "sim") {
    resultadoBotão.style.border = "1.5px solid #000";
  } else if (radioValor == "nao") {
    resultadoBotão.style.border = "none";
  }

  if (sombraValor == "sim") {
    resultadoBotão.style.boxShadow = "10px 10px 10px rgba(0, 0, 0, 0.3)";
  } else {
    resultadoBotão.style.boxShadow = "none";
  }
});
