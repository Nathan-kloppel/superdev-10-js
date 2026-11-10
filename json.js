// JSON representa dados em texto.

const exemplo = { nome: "vaso", preco: 20, favorito: false}
const texto = JSON.stringify(exemplo);

console.log(typeof exemplo); // objeto
console.log(typeof texto); // string

console.log(texto);

const recuperado = JSON.parse(texto);
console.log(recuperado.nome);
console.log(texto.nome);