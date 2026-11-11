# 3 — O mesmo fluxo com async/await

**45 minutos.** Reescreva a consulta anterior mantendo as mesmas responsabilidades.

```js
async function consultarProdutos(url) {
  try {
    const resposta = await fetch(url);
    if (!resposta.ok) {
      throw new Error("Falha HTTP " + resposta.status);
    }
    const dados = await resposta.json();
    console.log(dados.products);
    return dados;
  } catch (erro) {
    console.warn("Não foi possível consultar:", erro.message);
    return null;
  } finally {
    console.log("Consulta encerrada.");
  }
}
```

Uma função `async` devolve uma Promise. `await` pausa a continuação dessa função até o resultado, sem transformar a chamada inteira em código síncrono nem bloquear a página. `try/catch` recebe as rejeições aguardadas; `finally` permite encerrar o fluxo. [Referência: MDN async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).

Retome a distinção do guia anterior: `await` aguarda o resultado para continuar esta função; não congela toda a página nem cria uma execução paralela por si só.

`consultarComAwait(url)` já está no arquivo de exemplos para comparação. Tanto ela quanto `consultarComThen` devolvem os dados no sucesso e `null` na falha. As duas podem ser acompanhadas por `.then` no console.

## Exercício

Reescreva `listarNomesComThen` como `listarNomesComAwait`. Verifique status, aguarde o JSON, imprima os nomes e trate o erro. Teste com `URL_PRODUTOS` e `https://dummyjson.com/products/0`.

## Tipos de falha

| Situação | O que observar |
|---|---|
| Resposta HTTP 404 ou 500 | A resposta chegou, mas seu status indica falha |
| Rede indisponível ou bloqueada | A consulta pode rejeitar sem uma resposta HTTP acessível |
| Corpo que não é JSON | A leitura com `json()` falha |
| JSON sem `products` adequado | Nosso validador rejeita a estrutura |

A integração fornece `validarRespostaApi` para o último caso. Observe sua finalidade antes de chamar o adaptador; não altere a coleção antes de validar a resposta inteira.

Retome a classificação do bloco inicial: 404 é uma resposta HTTP de erro; falta de conexão não deve ser rotulada como 500; 200 com JSON inadequado é uma falha de conteúdo para nossa aplicação. No código, são caminhos diferentes que precisam chegar a um tratamento compreensível.
