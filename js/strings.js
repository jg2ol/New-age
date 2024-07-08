// Tratamento de strings

var string = "JavaScript"
console.log(`A string '${string}' tem ${string.length} caracteres.`)
console.log(`Em maiúsculas: ${string.toUpperCase()}`)
console.log(`Em minúsculas: ${string.toLowerCase()}`)
console.log(`Substituindo a primeira letra 'a' por 'b': ${string.replace("a", "b")}`)

var valor = 1234.5
console.log(`O valor ${valor} em dólar fica: ${valor.toLocaleString("pt-BR", {style: "currency", currency: "USD"})}`)

