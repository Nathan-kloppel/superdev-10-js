// Apoio fornecido: ler os dados antes de confiar no conteúdo do armazenamento.
function validarColecao(dados) {
  if (dados === null || typeof dados !== "object" || !Array.isArray(dados.produtos)
      || typeof dados.titulo !== "string" || dados.titulo.trim() === ""
      || !Number.isInteger(dados.proximoId) || dados.proximoId < 1) {
    throw new Error("A coleção salva não tem o formato esperado.");
  }

  const ids = [];
  dados.produtos.forEach((produto) => {
    if (produto === null || typeof produto !== "object"
        || !Number.isInteger(produto.id) || produto.id < 1
        || typeof produto.nome !== "string" || produto.nome.trim().length < 2
        || !Number.isFinite(produto.preco) || produto.preco < 0.01
        || !["Decoração", "Iluminação", "Móveis"].includes(produto.categoria)
        || typeof produto.imagem !== "string"
        || !(produto.imagem.startsWith("assets/") || produto.imagem.startsWith("./assets/"))
        || ids.includes(produto.id) || produto.id >= dados.proximoId) {
      throw new Error("Há um produto inválido na coleção salva.");
    }
    ids.push(produto.id);
  });
}
