const texto = document.getElementById('texto');

function calcular() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let resultado = 18 - n1 - n2;
    document.getElementById('resultado').value = resultado.toFixed(1);
    
    if (n1 < 4 || n2 < 4) {
        texto.textContent = 'Uma das notas é menor do que 4, o estudante irá para a reposição!';
        texto.style.color = 'orange';
        document.getElementById('resultado').value = resultado.toFixed(1);
        return;
    }

    if (resultado < 4) {
        document.getElementById('resultado').value = 4;
        texto.textContent = 'O estudante precisa de menos de 4 pontos, mas precisa tirar pelo menos 4 pontos para não ir para a reposição!';
        texto.style.color = '#164194';
    } else {
        document.getElementById('resultado').value = resultado.toFixed(1);
        texto.textContent = '';
    }
}