/*
1°) Criação das variáveis;
var igual (input com id = "igual")
var operacao (h1 com id = "soma")
let acao = somar (Função)
 */
var igual = window.document.querySelector("input#igual");
var operacao = window.document.querySelector("h1#soma");
let acao = somar;
// Adicionando um evento ao botão de igual
igual.addEventListener("click", listenerfunction)
// Criando as funções necessárias
// Função para o botão de igual
function listenerfunction() {
    acao(); // Função acao imbutida.
}
function somar_input() { // Função para o botão de "+"
    acao = somar; // Atribuição para acao funcionar como a função "somar"
    operacao.innerText = "+";
}
function subtrair_input() { // Função para o botão de "-"
     acao = subtrair; // Atribuição para acao funcionar como a função "subtrair"
     operacao.innerText = "-";
}
function multiplicar_input() { // Função pra o botaõ "*"
    acao = multiplicar; // Atribuição para acao funcionar como a função "multiplicar"
    operacao.innerText = "*";
}
function dividir_input() { // Função para o botão "/"
    acao = dividir; // Atribuição para acao funcionar como a função "dividir"
    operacao.innerText = "/";
}
function somar() {
    var numero1 = window.document.querySelector("input#txtnumero1");
    var numero2 = window.document.querySelector("input#txtnumero2");
    var resultado = window.document.querySelector("h1#resultado");
    numero1 = Number(numero1.value);
    numero2 = Number(numero2.value);
    resultado.innerHTML = `${numero1 + numero2}`;
}
function subtrair() {
    var numero1 = window.document.querySelector("input#txtnumero1");
    var numero2 = window.document.querySelector("input#txtnumero2");
    var resultado = window.document.querySelector("h1#resultado");
    numero1 = Number(numero1.value);
    numero2 = Number(numero2.value);
    resultado.innerHTML = `${numero1 - numero2}`;
}
function multiplicar() {
    var numero1 = window.document.querySelector("input#txtnumero1");
    var numero2 = window.document.querySelector("input#txtnumero2");
    var resultado = window.document.querySelector("h1#resultado");
    numero1 = Number(numero1.value);
    numero2 = Number(numero2.value);
    resultado.innerHTML = `${numero1*numero2}`;
}
function dividir() {
    var numero1 = window.document.querySelector("input#txtnumero1");
    var numero2 = window.document.querySelector("input#txtnumero2");
    var resultado = window.document.querySelector("h1#resultado");
    numero1 = Number(numero1.value);
    numero2 = Number(numero2.value);
    resultado.innerHTML = `${numero1/numero2}`;
}