// Apoio fornecido: ler os dados antes de confiar no conteúdo do armazenamento.
function validarColecao(dados) {
  if (dados === null || typeof dados !== "object" || !Array.isArray(dados.produtos)
      || typeof dados.titulo !== "string" || dados.titulo.trim() === ""
      || !Number.isInteger(dados.proximoId) || dados.proximoId < 1) {
    throw new Error("A coleção salva não tem o formato esperado.");
  }

  const ids = [];
  const idsApi = [];
  dados.produtos.forEach((produto) => {
    if (produto === null || typeof produto !== "object"
        || !Number.isInteger(produto.id) || produto.id < 1
        || typeof produto.nome !== "string" || produto.nome.trim().length < 2
        || !Number.isFinite(produto.preco) || produto.preco < 0.01
        || !["Decoração", "Iluminação", "Móveis"].includes(produto.categoria)
        || typeof produto.imagem !== "string"
        || !(produto.imagem.startsWith("assets/") || produto.imagem.startsWith("./assets/")
          || produto.imagem.startsWith("https://cdn.dummyjson.com/"))
        || ids.includes(produto.id) || produto.id >= dados.proximoId) {
      throw new Error("Há um produto inválido na coleção salva.");
    }
    if (produto.idApi !== undefined) {
      if (!Number.isInteger(produto.idApi) || produto.idApi < 1 || idsApi.includes(produto.idApi)) {
        throw new Error("Há um identificador de origem inválido ou repetido.");
      }
      idsApi.push(produto.idApi);
    }
    ids.push(produto.id);
  });
}

function validarRespostaApi(dados) {
  if (dados === null || !Array.isArray(dados.products)) {
    throw new Error("A resposta não contém a lista products.");
  }
  dados.products.forEach((produto) => {
    if (produto === null || !Number.isInteger(produto.id) || produto.id < 1
        || typeof produto.title !== "string" || produto.title.trim().length < 2
        || !Number.isFinite(produto.price) || produto.price < 0.01
        || produto.category !== "home-decoration"
        || typeof produto.thumbnail !== "string"
        || !produto.thumbnail.startsWith("https://cdn.dummyjson.com/")) {
      throw new Error("Um produto recebido não tem o formato esperado.");
    }
  });
}