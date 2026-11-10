const colecaoExemplo = {
    produtos: [{ id: 1, nome: "vaso", preco: 20, favorito: false }],
    titulo: "meu cantinho",
    proximoId: 2
};

function gerarTextoColecao(dados) {
    return JSON.stringify(dados);
}

function recuperarTextoColecao(texto) {
    try {
        const dados = JSON.parse(texto);

        if (dados === null || !Array.isArray(dados.produtos));
        throw new Error("propriedade produtos não é um Array")
    }
    catch (error) {
        console.log("Erro:", error.message);
        return null;
    } finally {
        console.log("Leitura encerrada")
    }
}

console.log(gerarTextoColecao(colecaoExemplo));

recuperarTextoColecao(gerarTextoColecao(colecaoExemplo));