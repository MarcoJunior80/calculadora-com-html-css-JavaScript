const form = document.querySelector("form");
form.addEventListener("submit", function(evento){
    evento.preventDefault()
    calcular()
})

const primeiro_numero = document.getElementById("primeiro_numero");
const segundo_numero = document.getElementById("segundo_numero");
const operacao = document.getElementById("operacao");

const resultadoCalculo = document.getElementById("resultado-calculo")

function calcular(){
    switch(operacao.value){
        case "adicao":
            adicao()
            break;
        case "subtracao":
            subtracao()
            break;
        case "multiplicacao":
            multiplicacao()
            break;
        case "divisao":
            divisao()
            break;
    }
    
    
}
function adicao(){
    
    let resultado = Number(primeiro_numero.value) + Number(segundo_numero.value);
    resultadoCalculo.innerText = `O Resultado da Adição é: ${resultado}`;
}
function subtracao(){
    
    let resultado = Number(primeiro_numero.value) - Number(segundo_numero.value);
    resultadoCalculo.innerText = `O Resultado da Subtração é: ${resultado}`;
}
function multiplicacao(){
    
    let resultado = Number(primeiro_numero.value) * Number(segundo_numero.value);
    resultadoCalculo.innerText = `O Resultado da Multiplicação é: ${resultado}`;
}
function divisao(){
    
    let resultado = Number(primeiro_numero.value) / Number(segundo_numero.value);
    resultadoCalculo.innerText = `O Resultado da Divisão é: ${resultado}`;
}




