/* Operadores
Os operadores relacionais (ex.: <=) são iguais aos do Python
Os lógicos são ! ('not'), && ('and') e || ('or'); caso apareça mais de um, são feitos nesta ordem: !, &&, ||

Operadores ternários: ? e :
--> é a forma mais curta de se fazer um if, else
var n = bool ? True : False
Se o booleano for True, a variável n recebe o valor após o ?, senão, recebe o valor após o :
*/
var media = 4.5
var situacao = media >= 7 ? "Aprovado(a)" : "Reprovado(a)"
// o aluno está aprovado se a média for maior ou igual a 7, senão, está reprovado
console.log(`Este(a) aluno(a) está ${situacao} com média ${media}`)
