function calcular() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let resultado = 18 - n1 - n2;
    document.getElementById('resultado').value = resultado.toFixed(1);
}