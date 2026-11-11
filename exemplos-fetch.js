function demonstrarsicrono() {
    console.log("1 - início");
    console.log("2 - trabalho concluido");
    console.log("3 - fim")

}

function demonstrarassicrono() {
    console.log("1 - início");
    setTimeout(() => {
        console.log("3 - espera encerrada");
    }, 1000);
    console.log("2 - código continua");
}

function consultarComThen(url) {
    return fetch(url)
        .then((resposta) => {
            if (!resposta.ok) throw new error("Falha HTTP " + resposta.status)
            return resposta.json();
        })
        .then((dados) => {
            // console.log(dados);
            return dados;
        })
        .catch((error) => {
            //console.warn(error.message);
            return null;
        })
}

const URL_PRODUTOS = "https://dummyjson.com/products";

// Criar uma nova função chamada listarNomesComThen(url) para consultar, verificar
// o statua e imprimir todos os nomes dos produtos com forEach

function listarNomesComThen(url) {
    fetch(url)
        .then((resposta) => {
            if (!resposta.ok) throw new error("Falha HTTP " + resposta.status)
            return resposta.json();
        })
        .then((dados) => {
            dados.products.forEach(produto => {
                //console.log(produto.title);
            });
        })
}

listarNomesComThen(URL_PRODUTOS);


async function consultarProdutos(url) {
    const resposta = await fetch(url);

    if (!resposta.ok) {
        if (!resposta.ok) throw new error("Falha HTTP " + resposta.status)
    }

    const dados = await resposta.json();
    //console.log(dados.products);
}

await consultarProdutos(URL_PRODUTOS);

// ######################## exercicio ##################################

async function listarNomesComAwait(url) {
    try {
        const response = await fetch(url)

        if (!resposta.ok) {
            throw new error("Falha HTTP " + resposta.status)
        }
        const dados = await response.json();

        dados.products.forEach(produto => {
            console.log(produto.title)
        })
    } catch (error) {
        console.warn("error: " + error.message);
        return null;
    }
}
await listarProdutos(URL_PRODUTOS)

