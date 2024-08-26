
function concatenateValues() {
    // Pegando os valores dos inputs
    const input1 = document.getElementById('num1').value;
    const input2 = document.getElementById('num2').value;

    // Juntando os valores
    const concatenatedValue = input1 + ' ' + input2;

    // Exibindo o resultado no parágrafo
    document.getElementById('result').innerText = 'Resultado: ' + concatenatedValue;
    
}

// Adicionando um listener para o botão
document.getElementById('btn').addEventListener('click', concatenateValues);

  