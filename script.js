let produtos = [
    { id: 1, nome: "Luminária de mesa", preco: 49.99, categoria: "iluminação", imagem: "./assets/luminaria.webp" },
    { id: 2, nome: "vaso para plantas", preco: 14.99, categoria: "Decoração", imagem: "./assets/vaso.webp" },
    { id: 3, nome: "cadeira de escritório", preco: 499.99, categoria: "Móveis", imagem: "./assets/cadeira.webp" }
]

const titulo = document.querySelector("#titulo");
const campotitulo = document.querySelector("#novo-titulo");
const botaoalterar = document.querySelector("#alterar-titulo");
const colecao = document.querySelector("#colecao");
const botaoDestaque = document.querySelector("#alternar-destaque")

const mensagemTitulo = document.querySelector("#mensagem-titulo");
const campoNome = document.querySelector("#nome");
const contadorNome = document.querySelector("#contador-nome");


botaoalterar.addEventListener("click", () => {
    const novoTitulo = campotitulo.value.trim();

    campotitulo.classList.remove("invalido");
    campotitulo.removeAttribute("aria-invalid");
    mensagemTitulo.classList.remove("erro");

    if (novoTitulo === "") {
        campotitulo.classList.add("invalido");
        campotitulo.setAttribute("aria-invalid", "true");


        mensagemTitulo.textContent = "Digite um titulo para coleção.";
        mensagemTitulo.classList.add("erro");
        return;
    }

    titulo.textContent = campotitulo.value;
    mensagemTitulo.textContent = "titulo atualizado";
    mensagemTitulo.classList.add("sucesso")
})

botaoDestaque.addEventListener("click", () => {
    colecao.classList.toggle("destaque")

    if (colecao.classList.contains("destaque")) {
        botaoDestaque.textContent = "Retirar Destaque ↗"
    } else {
        botaoDestaque.textContent = "Destacar coleção ↗"
    }
})

campoNome.addEventListener("input", () => {
    contadorNome.textContent = campoNome.value.length + " caracteres"
})

// ####################################### ETAPA 2 ################################################

const lista = document.querySelector("#lista-produtos");
const quantidade = document.querySelector("#quantidade");
const ordem = document.querySelector("#ordem");
const avisoVazio = document.querySelector("#aviso-vazio");

function renderizarProduto() {
    aplicarOrdenacao();
    lista.textContent = "";

    produtos.forEach((produto) => {
        const item = document.createElement("li");
        const imagem = document.createElement("img");
        const categoria = document.createElement("p");
        const nome = document.createElement("h3");
        const preco = document.createElement("p");
        const acoes = document.createElement("div");
        const botao = document.createElement("button");

        item.classList.add("produto");
        item.dataset.id = produto.id;

        imagem.classList.add("produto-imagem");
        imagem.src = produto.imagem;
        imagem.alt = produto.nome;

        categoria.classList.add("produto-categoria");
        categoria.textContent = produto.categoria;

        nome.classList.add("produto-nome");
        nome.textContent = produto.nome;

        preco.classList.add("produto-preco");
        preco.textContent = formatarpreco(produto.preco);

        acoes.classList.add("produtos-acoes");

        botao.classList.add("acao-produto")
        botao.type = "button";
        botao.dataset.id = produto.id;
        botao.textContent = "Remover";
        botao.addEventListener("click", removerProduto);

        item.appendChild(imagem);
        item.appendChild(categoria);
        item.appendChild(nome);
        item.appendChild(preco);

        acoes.appendChild(botao);

        item.append(acoes);

        lista.appendChild(item);
    })

    const total = produtos.reduce((acumulador, produto) => {
        return acumulador + produto.preco;
    }, 0)

    quantidade.textContent = produtos.length;
    totalElemento.textContent = formatarpreco(total);
    avisoVazio.hidden = produto.length > 0;
}

// Replace troca o primeiro pelo segundo

function formatarpreco(valor) {
    return "R$ " + valor.toFixed(2).replace(".", ",");
}

function removerProduto(evento) {
    const id = Number(evento.currentTarget.dataset.id);

    produtos = produtos.filter((produto) => {
        return produto.id !== id;
    })

    renderizarProduto();
}

function aplicarOrdenacao() {
    if (ordem.value === "crescente") {
        produtos.sort((a, b) => a.preco = b.preco);
    }
    else if (ordem.value === "decrescente") {
        produtos.sort((a, b) => b.preco - a.preco);
    }
    else if (ordem.value === "nome") {
        produtos.sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"))
    }
    else {
        produtos.sort((a, b) => a.id - b.id);
    }


}

ordem.addEventListener("change", renderizarProduto);


// isto faz os produtos renderizarem por que estão dentro da function lá de cima 
renderizarProduto();

