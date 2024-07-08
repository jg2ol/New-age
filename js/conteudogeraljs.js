// comentário em linha

/*
comentário em bloco
*/

// Semelhanças com Python...

// var nome = window.prompt("Qual é o seu nome?") --> funciona como input() no html
// window.alert(`Prazer em te conhecer, ${nome}!`) --> mostra um texto na tela como um alerta

// escrevendo textos aleatórios no html
// document.write("Chama")

// DOM --> Document Object Model, estrutura dos componentes de um site
// ex. de "galho" da nossa árvore DOM: window -> document -> HTML -> body -> p -> strong
/* Utilizando a árvore DOM p/ localizar elementos
Há várias formas de se encontrar um elemento:
--> por tag (h1, p, a, etc), id, class, nome, seletor (.querySelector(), .querySelectorAll())

--> em caso de resultar em mais de um elemento, podemos usar os 'índices' de lista p/ especificá-los

--> querySelector: selecionador de elementos por configurações dadas por HTML
  ex.: document.querySelector("div#chama") -> seleciona uma div com id="chama"
*/

var p_cont = document.getElementById("conteudo")
var p2 = document.getElementsByTagName('p')[1]
var p3 = document.getElementsByTagName('p')[2]

p2.innerText = `No primeiro parpagrafo está escrito: "${p_cont.innerText}"`
// também podemos editar os estilos dos elementos via DOM
p2.style.marginBottom = 0
p3.innerText = `Com tags: "${p_cont.innerHTML}"`
p3.style.marginTop = 0

var div_dif = document.querySelector("div.acessosDiferenciados")
var p1_div = document.getElementsByClassName("parag")[0]
var p2_div = document.getElementsByClassName("parag")[1]
var p3_div = document.getElementsByName("chama")

p1_div.innerText = `URL do site: ${window.document.URL}`
p2_div.innerText = `Caracteres: ${window.document.characterSet}`
