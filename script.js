const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let widthValor = parseInt(document.getElementById('largura').value);
    let heightValor = parseInt(document.getElementById('altura').value);
    let bdRadius = parseInt(document.getElementById('borderRadius').value);
    let radioValor = document.querySelector('input[name="simOuNao"]:checked').value;
    let corFundoValor = document.getElementById('corFundo').value;

    let resultadoBotão = document.getElementById('resulte');

    resultadoBotão.style.width = widthValor + 'px';
    resultadoBotão.style.height = heightValor + 'px';
    resultadoBotão.style.borderRadius = bdRadius + 'px';
    resultadoBotão.style.backgroundColor = corFundoValor;

    if (radioValor == 'sim') {
        resultadoBotão.style.border = '1.5px solid #000';
    } else if (radioValor == 'nao') {
        resultadoBotão.style.border = 'none';
    }
});
