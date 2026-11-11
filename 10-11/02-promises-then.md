# 2 — Síncrono, assíncrono, Promise, then e catch

**45 minutos:** 10min de síncrono/assíncrono, 5min de Promise, 10min de construção conjunta, 15min de atividade e 5min de correção. Primeiro entenda a ordem de execução; depois escreva a consulta.

## Execução síncrona — 10min com a comparação abaixo

Em um trecho síncrono, as instruções são executadas em sequência: uma termina antes de a próxima começar. Execute no console da página:

```js
demonstrarSincrono();
```

A função fornecida faz:

```js
function demonstrarSincrono() {
  console.log("1 - Início");
  console.log("2 - Trabalho concluído");
  console.log("3 - Fim");
}
```

Observe a ordem. Pense nas alterações de uma peça no array: atribuímos o nome e o preço e depois chamamos a renderização; essas instruções do trecho atual seguem a sequência do código.

## Execução assíncrona

Uma operação assíncrona pode terminar depois. O código inicia a operação, continua o trabalho atual e trata o resultado quando ele estiver disponível. Isso é útil ao esperar uma resposta de rede cujo tempo não controlamos. [Referência: MDN — assíncrono](https://developer.mozilla.org/en-US/docs/Glossary/Asynchronous).

Preveja a ordem antes de executar, uma demonstração de cada vez:

```js
function demonstrarAssincrono() {
  console.log("1 - Início");
  setTimeout(() => {
    console.log("3 - Espera encerrada");
  }, 1000);
  console.log("2 - Código continua");
}
```

A função já está disponível no projeto:

```js
demonstrarAssincrono();
```

O temporizador agenda o callback, mas não faz a linha seguinte esperar. Seu atraso não garante um horário exato de execução. Troque mentalmente `1000` por `0`: o callback ainda não interrompe o trecho síncrono atual para executar imediatamente. [Referência: MDN — introdução à assincronia](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Introducing).

Um callback não é automaticamente assíncrono: os callbacks de `forEach` são executados durante o próprio laço. Assincronia também não significa que todo código JavaScript passe a executar em paralelo; um laço pesado ainda pode ocupar a execução da página.

Na Casa Forma, queremos iniciar a consulta sem ficar presos em um laço esperando o servidor. O código que usa os produtos deve ser ligado à conclusão da consulta.

## O que é uma Promise? — 5min

Uma Promise representa a conclusão de uma operação e seu resultado ou motivo de falha. O Fetch devolve uma Promise, não a lista de produtos pronta. [Referência: MDN Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

| Estado | Significado |
|---|---|
| `pending` | Ainda não foi concluída |
| `fulfilled` | Foi cumprida com um valor |
| `rejected` | Foi rejeitada com um motivo |

`.then` liga um próximo passo ao valor de sucesso. `.catch` trata uma rejeição. Um erro lançado em um passo da cadeia também pode chegar ao tratamento seguinte. Hoje vamos consumir a Promise devolvida por Fetch; não é necessário criar uma Promise manualmente.

## Construção conjunta — 10min

```js
fetch(URL_PRODUTOS)
  .then((resposta) => {
    if (!resposta.ok) {
      throw new Error("Falha HTTP " + resposta.status);
    }
    return resposta.json();
  })
  .then((dados) => {
    console.log(dados.products);
  })
  .catch((erro) => {
    console.warn("Não foi possível consultar:", erro.message);
  });
```

O primeiro passo recebe a resposta. `resposta.json()` também é assíncrono; seu `return` conecta a leitura ao passo que receberá o corpo convertido. Não aplique `JSON.parse` ao objeto já convertido. [Referência: MDN Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

Retome HTTP: `resposta.ok` é verdadeiro de 200 a 299. Um 404 não rejeita sozinho a Promise de Fetch; nossa verificação lança o erro. Uma falha de rede pode rejeitar antes de existir uma resposta acessível.

```js
console.log("Antes");
consultarComThen(URL_PRODUTOS);
console.log("Depois");
```

Preveja onde o resultado da consulta aparece em relação aos dois textos. O uso dos produtos precisa ficar no passo que recebe os dados, não em uma leitura imediatamente após iniciar o Fetch.

## Atividade — 15min

1. Explique a ordem das duas demonstrações e por que `setTimeout` com atraso zero não interromperia o trecho atual. Essa previsão é discutida durante a comparação inicial.
2. Escreva `listarNomesComThen(url)` para consultar, verificar o status e imprimir os nomes com `forEach`. Retorne a cadeia de Promises.
3. Teste com `URL_PRODUTOS` e `https://dummyjson.com/products/0`, tratando a falha.

Nos exemplos fornecidos de consulta, o `catch` registra a falha e devolve `null`. Essa é uma decisão didática explícita; não trate `null` como uma coleção válida. Na importação integrada, o erro chega ao tratamento que atualiza a interface.

## Corrigimos — 5min

Explique a diferença entre iniciar uma operação e receber seu resultado, identifique onde cada callback executa e confira a devolução de `resposta.json()`. As respostas e funções completas ficam no material separado do professor.
