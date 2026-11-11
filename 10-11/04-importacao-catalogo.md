# 4 — Trazer os produtos para a Casa Forma

**65 minutos.** Hoje o arquivo principal da atividade é `api.js`.

## Arquivos já preparados

Na base fornecida, `index.html` carrega nesta ordem:

```html
<script src="validacao-colecao.js" defer></script>
<script src="script.js" defer></script>
<script src="exemplos-fetch.js" defer></script>
<script src="api.js" defer></script>
```

`script.js` contém o catálogo anterior; `api.js` acessa suas variáveis e funções como script clássico, sem `type="module"`. A validação atualizada já é carregada antes da recuperação do armazenamento.

Se continuar no próprio projeto, copie o novo `validacao-colecao.js`, o arquivo de exemplos e o esqueleto de `api.js`, inclua os scripts e copie o bloco `#area-importacao` do HTML da base. O catálogo precisa ter `produtos`, `proximoId`, `renderizarProdutos` e `salvarColecao` acessíveis. Adapte nomes e caminhos ao seu projeto com o professor.

## Fazemos juntos — consultar

Construa `lerDados(url)`: consultar, verificar `resposta.ok` e devolver o JSON. A função integrada deixa o erro subir para `carregarProdutos`, que decide a mensagem ao usuário. O gabarito inclui um limite de dez segundos como apoio do professor; não é necessário escrever esse apoio do zero.

## Fazemos juntos — adaptar e evitar repetição

| API | Casa Forma |
|---|---|
| `id` | `idApi` |
| Novo ID local | `id: proximoId` |
| `title` | `nome` |
| `price` | `preco` |
| Categoria da consulta | `categoria: "Decoração"` |
| `thumbnail` | `imagem` |
| Nova seleção local | `favorito: false` |

Comece `importarDados(dados)` chamando `validarRespostaApi(dados)`. Percorra `dados.products`. Para cada produto, use `find` para verificar se seu `idApi` já existe. Se existir, pule somente esse item; não substitua suas edições ou favoritos. Se não existir, crie o objeto, incremente `proximoId` e conte a inclusão.

O ID local continua independente do ID externo. Comparar pelo nome falharia se o usuário tivesse editado o título do produto.

## Fazemos juntos — apresentar e guardar

Em `carregarProdutos(url)`, aguarde `lerDados`, chame o adaptador, renderize e salve a coleção. Informe quantos produtos foram acrescentados. Se nada foi acrescentado, informe que os itens já estavam presentes.

A nova validação aceita o campo `idApi` e imagens HTTPS do CDN da fonte escolhida, mantendo a aceitação de imagens locais. Sem essa atualização, os produtos importados poderiam aparecer e ser rejeitados na recuperação seguinte.

## Falha de imagem e nova tentativa

A base já troca uma imagem que falhar por `assets/nova-peca.svg`. Se integrar em outro projeto, conserve esse tratamento na criação de cada imagem:

```js
imagem.addEventListener("error", () => {
  imagem.src = "assets/nova-peca.svg";
}, { once: true });
```

Adapte o caminho se as imagens do seu projeto ficam em outra pasta. Em uma falha de consulta, preserve a coleção existente, mostre uma mensagem e permita nova tentativa pelo botão de importação. As consultas são feitas somente ao serviço externo.

A busca e os totais continuam com o significado anterior. Uma busca restaurada pode esconder novos cartões; limpe o campo antes de concluir que a importação falhou. A soma dos favoritos permanece opcional.
