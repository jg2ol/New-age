// Trabalhando com números

/*
Em js, a tipagem dos números não se separam em int e float, apesar de terem representações diferentes
O comando typeof(5.5) == typeof(-3) == Number
*/

/* Temos três formas de converter string p/ number
Number.parseInt(n) --> Força a ser inteiro
Number.parseFloat(n) --> Força a ser real
Number(n) --> A própria linguagem identifica se é inteiro ou não

Number.parsebla(n) --> Retorna NaN em caso de string vazia
Number.parsebla(n) == parsebla(n)
Number(n) --> Caso tenha parte decimal igual a zero, retorna um inteiro
Number(n) --> Retorna zero em caso de string vazia
*/
var n1 = console.log("Digite um número:") // String
var n2 = Number(console.log("Digite outro número:")) // Verificação p/ number

var soma = Number.parseFloat(n1) + n2
console.log(`A soma entre ${n1} e ${n2} vale ${soma}`)