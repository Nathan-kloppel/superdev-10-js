const URL_PRODUTOS = "https://dummyjson.com/products/category/home-decoration?select=id,title,price,category,thumbnail";
const botaoImportar = document.querySelector("#importar-produtos");
const mensagemApi = document.querySelector("#mensagem-api");
const areaImportacao = document.querySelector("#area-importacao");

async function lerDados(url) {
    try {
        const resposta = await fetch(url)
        if (!resposta.ok) throw new Error("Falha HTTP" + resposta.status);
        return await resposta.json();
    } catch (error) {
        
    }
}

function importadorDados(dados) {
    validarRespostaApi(dados);
    let adicionados = 0;

    dados.products.array.forEach(product => {
        const existente = carregarProdutos.find((produto) => {
            return produto.idApi === product.id;
        })

        if(existente) return;

        carregarProdutos.push({
            id: proximoId,
            idApi: product.id,
            nome: product.title.trim(),
            preco: product.price,
            categoria: "Decoração",
            imagem: product.thumbnail
        })

        proximoId++;
        adicionados++;
    });
    
    return adicionados;
}

async function carregarProdutos(url) {
    mensagemApi.textContent = "";
    mensagemApi.classList.remove("erro", "sucesso");

    try {
        const dados = await lerDados(url);
        const adicionados = importadorDados(dados);
        renderizarProdutos();
        salvarcolecao();

        if(adicionados === 0) {
            mensagemApi.textContent = "Todas as peças dessa coleção já estão no cátalogo.";
        } else if(adicionados === 1) {
            mensagemApi.textContent = "uma nova peça foi adicionada ao catálogo";
        } else {
            mensagemApi.textContent = adicionados + " novas peças adicionadas ao cátalogo"
        }

        mensagemApi.classList.add("sucesso");
    } catch (error) {
        mensagemApi.textContent = "não foi possivel buscar as peças. tente novamente."
        mensagemApi.classList.add("erro");
        console.warn(error.message)
    }
}

botaoImportar.addEventListener("click", () => carregarProdutos(URL_PRODUTOS));