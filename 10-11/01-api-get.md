# 1 — API, HTTP, requisição, resposta e status

**30 minutos antes de entrar em Promises:** 5min de API, 10min de requisição/resposta, 10min de status e 5min observando uma consulta. Este guia também serve como consulta durante a prática; não é necessário decorar todos os códigos.

## O que é uma API? — 5min

Uma API é uma interface com recursos e regras para um programa interagir com outro componente. A interface da página atende às pessoas; a API oferece formas de interação para o código. Vocês já usaram APIs do navegador, como DOM e armazenamento. Hoje vão consultar um serviço externo por HTTP. [Referência: MDN API](https://developer.mozilla.org/en-US/docs/Glossary/API).

Na Casa Forma, o navegador será o **cliente**: nosso JavaScript pede produtos. O **servidor** do serviço recebe o pedido e devolve uma resposta. A API estabelece quais endereços e operações existem e qual estrutura de dados se espera.

JSON é um formato de dados, não a própria API. O serviço poderia oferecer outros formatos; nesta consulta, trabalharemos com JSON. O array de objetos criado manualmente no nosso JavaScript também não é a API externa.

## O caminho da consulta — 10min

1. A pessoa clica em “Explorar novas peças”.
2. O navegador envia uma requisição GET para um endereço.
3. O servidor devolve uma resposta com status, cabeçalhos e corpo.
4. Nosso código interpreta os dados e cria os cartões do catálogo.

**HTTP** é o protocolo usado nessa troca. **URL** é o endereço consultado. **Endpoint** é um endereço disponibilizado pelo serviço para uma operação. **GET** é o método que usaremos para pedir uma leitura.

| Parte | Pergunta que responde | Exemplo desta aula |
|---|---|---|
| URL | Para onde vai o pedido? | Categoria de decoração da DummyJSON |
| Método | Qual operação estamos pedindo? | GET |
| Cabeçalhos da requisição | Que informações acompanham o pedido? | `Accept` pode indicar o formato aceito |
| Corpo da requisição | Que conteúdo estamos enviando? | Esta consulta não precisa de um corpo |
| Status da resposta | Qual foi o resultado HTTP? | 200 ou 404 |
| Cabeçalhos da resposta | Que informações acompanham o retorno? | `Content-Type` informa o tipo do conteúdo |
| Corpo da resposta | Qual conteúdo foi devolvido? | JSON com `products` |

Este é um exemplo HTTP simplificado para leitura, não um trecho para colar no JavaScript:

```http
GET /products/category/home-decoration?select=id,title,price,category,thumbnail HTTP/1.1
Host: dummyjson.com
Accept: application/json
```

Uma resposta didática simplificada teria status e conteúdo como:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{"products":[{"id":43,"title":"Decoration Swing","price":59.99}]}
```

A resposta real tem mais campos e produtos. A fonte é a categoria de decoração da DummyJSON, com uma consulta pública de leitura. [Documentação oficial](https://dummyjson.com/docs/products).

## Status HTTP — 10min

O código indica o resultado da requisição HTTP. Primeiro reconheça a família; depois consulte o código específico. [Referência: MDN status HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status).

| Família | Significado geral |
|---|---|
| 1xx | Informações sobre o andamento |
| 2xx | Sucesso |
| 3xx | Redirecionamento ou outra indicação dessa classe |
| 4xx | Erro relacionado à requisição, recurso ou acesso |
| 5xx | Falha no servidor |

| Código | Leitura prática |
|---|---|
| 200 OK | Consulta concluída com sucesso |
| 400 Bad Request | Requisição inválida |
| 401 Unauthorized | Credenciais de autenticação necessárias ou inválidas |
| 403 Forbidden | Acesso recusado |
| 404 Not Found | Recurso não encontrado |
| 429 Too Many Requests | Limite de requisições atingido |
| 500 Internal Server Error | Erro interno do servidor |

Hoje a prática se concentra em **200, 404 e falha de rede**. Os demais ficam como referência. Um 401 pede atenção às credenciais; um 403 indica recusa de acesso. Não conclua que todo 4xx é um erro de digitação do aluno.

**Receber 404 não é o mesmo que ficar sem conexão.** No primeiro caso, existe uma resposta HTTP. Em uma falha de rede ou bloqueio de acesso à resposta, o JavaScript pode não receber uma resposta HTTP utilizável. Não invente um status 500 para esse caso.

Também é possível receber 200 e descobrir que os dados não têm a estrutura esperada. Status de sucesso não substitui a validação do conteúdo. Por isso vamos verificar o status, converter o corpo e validar os dados em momentos distintos.

## Observamos juntos no navegador — 5min

Abra a página pelo servidor local e o painel Network/Rede. Execute as consultas abaixo, uma de cada vez. As funções já estão fornecidas; sua implementação será estudada depois.

```js
consultarComThen(URL_PRODUTOS);
consultarComThen("https://dummyjson.com/products/0");
```

Selecione cada requisição e procure URL, método, status, cabeçalhos e resposta. A primeira consulta deve retornar 200 com os produtos; o endereço com ID 0 foi conferido em 10/11 e retorna 404. A função registra a falha no console e devolve `null` nesse exemplo.

As duas consultas vão ao serviço externo. Em uma falha de rede, observe a rejeição e não atribua um status que não chegou ao JavaScript.

## Confira antes de avançar

1. Quem é cliente e quem é servidor na Casa Forma?
2. Qual é a diferença entre a API e o JSON que ela devolve?
3. Em um 404, chegou uma resposta? E se a conexão falhar?
4. Um status 200 garante que exista `dados.products` como array?

As respostas serão discutidas com o professor; ainda não precisamos escrever a importação.

## Campos que vamos adaptar depois

| API | Modelo do catálogo |
|---|---|
| `id` | `idApi`, separado do ID local |
| `title` | `nome` |
| `price` | `preco` |
| `category` | Categoria exibida no projeto |
| `thumbnail` | `imagem` |

A consulta verificada em 10/11 retornou cinco produtos. Expanda `products` e localize o primeiro título e preço. Os números serão usados como preços fictícios em R$ para a aula, sem conversão cambial. A adaptação e a persistência serão feitas no bloco de integração, não nestes 30 minutos iniciais.
