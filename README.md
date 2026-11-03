
explicação do trabalho

1. Onde você guardou o estado de favorito?

Guardei o estado de favorito dentro de cada objeto da lista produtos, usando a propriedade favorito, que começa como false e muda para true quando o produto é favoritado.

2. Como o clique encontra e altera o produto correto?

Quando clico no botão, o código pega o ID do produto usando evento.currentTarget.dataset.id. Depois, utiliza find() para encontrar o produto com aquele ID e altera seu estado usando !, invertendo entre true e false.

3. Como a quantidade é recalculada?

A quantidade é recalculada dentro da função renderizarProdutos(). Utilizo filter() para selecionar somente os produtos favoritos e length para contar quantos foram encontrados. Depois, uso textContent para mostrar o resultado na página.
