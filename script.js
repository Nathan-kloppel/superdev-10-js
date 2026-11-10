let produtos = [
<<<<<<< HEAD
  { id: 1, nome: "Luminária de mesa", preco: 49.99, categoria: "Iluminação", imagem: "./assets/luminaria.webp" },
  { id: 2, nome: "Vaso para plantas", preco: 14.99, categoria: "Decoração", imagem: "./assets/vaso.webp" },
  { id: 3, nome: "Cadeira de escritõrio", preco: 499.99, categoria: "Móveis", imagem: "./assets/cadeira.webp" }
=======
    { id: 1, nome: "Luminária de mesa", preco: 49.99, categoria: "Iluminação", imagem: "./assets/luminaria.webp" },
    { id: 2, nome: "Vaso para plantas", preco: 14.99, categoria: "Decoração", imagem: "./assets/vaso.webp" },
    { id: 3, nome: "Cadeira de escritõrio", preco: 499.99, categoria: "Móveis", imagem: "./assets/cadeira.webp" }
>>>>>>> 59e191f78bf9cb5df0161deb97da289703bdfcc1
]

let proximoId = 4;

const titulo = document.querySelector("#titulo");
const campoTitulo = document.querySelector("#novo-titulo");
const botaoAlterar = document.querySelector("#alterar-titulo");
const colecao = document.querySelector("#colecao");
const botaoDestaque = document.querySelector("#alternar-destaque");

const mensagemTitulo = document.querySelector("#mensagem-titulo");
const campoNome = document.querySelector("#nome");
const campoPreco = document.querySelector("#preco");
const campoCategoria = document.querySelector("#categoria");
const contadorNome = document.querySelector("#contador-nome");

botaoAlterar.addEventListener("click", () => {
<<<<<<< HEAD
  const novoTitulo = campoTitulo.value.trim();

  campoTitulo.classList.remove("invalido");
  campoTitulo.removeAttribute("aria-invalid");
  mensagemTitulo.classList.remove("erro");

  if (novoTitulo === "") {
    campoTitulo.classList.add("invalido");
    campoTitulo.setAttribute("aria-invalid", "true");

    mensagemTitulo.textContent = "Digite um titulo para a coleção.";
    mensagemTitulo.classList.add("erro");
    return;
  }

  titulo.textContent = campoTitulo.value;
  mensagemTitulo.textContent = "Titulo atualizado.";
  mensagemTitulo.classList.add("sucesso");
  salvarcolecao();
=======
    const novoTitulo = campoTitulo.value.trim();

    campoTitulo.classList.remove("invalido");
    campoTitulo.removeAttribute("aria-invalid");
    mensagemTitulo.classList.remove("erro");

    if (novoTitulo === "") {
        campoTitulo.classList.add("invalido");
        campoTitulo.setAttribute("aria-invalid", "true");

        mensagemTitulo.textContent = "Digite um titulo para a coleção.";
        mensagemTitulo.classList.add("erro");
        return;
    }

    titulo.textContent = campoTitulo.value;
    mensagemTitulo.textContent = "Titulo atualizado.";
    mensagemTitulo.classList.add("sucesso");
>>>>>>> 59e191f78bf9cb5df0161deb97da289703bdfcc1
})

botaoDestaque.addEventListener("click", () => {
    colecao.classList.toggle("destaque");

<<<<<<< HEAD
  if (colecao.classList.contains("destaque")) {
    botaoDestaque.textContent = "Retirar destaque ↗";
  } else {
    botaoDestaque.textContent = "Destacar coleção ↗";
  }
})

campoNome.addEventListener("input", () => {
  contadorNome.textContent = campoNome.value.length + " caracteres";
=======
    if (colecao.classList.contains("destaque")) {
        botaoDestaque.textContent = "Retirar destaque ↗";
    } else {
        botaoDestaque.textContent = "Destacar coleção ↗";
    }
})

campoNome.addEventListener("input", () => {
    contadorNome.textContent = campoNome.value.length + " caracteres";
>>>>>>> 59e191f78bf9cb5df0161deb97da289703bdfcc1
})

// ################################################# ETAPA 2 ###################################################################

const lista = document.querySelector("#lista-produtos");
const quantidade = document.querySelector("#quantidade");
const ordem = document.querySelector("#ordem");
const totalElemento = document.querySelector("#total");
const avisoVazio = document.querySelector("#aviso-vazio");
<<<<<<< HEAD

const botaoSalvar = document.querySelector("#salvar-produto");
const botaoCancelar = document.querySelector("#cancelar-edicao");

function renderizarProdutos() {
  aplicarOrdenacao();
  lista.textContent = "";

  const produtosVisiveis = obterProdutosVisiveis();

  produtosVisiveis.forEach((produto) => {
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
    preco.textContent = formatarPreco(produto.preco);

    acoes.classList.add("produto-acoes");

    botao.classList.add("acao-produto");
    botao.type = "button";
    botao.dataset.id = produto.id;
    botao.textContent = "Remover";
    botao.addEventListener("click", removerProduto);

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("acao-produto");
    botaoEditar.type = "button";
    botaoEditar.textContent = "Editar";
    botaoEditar.dataset.id = produto.id;
    botaoEditar.setAttribute("aria-label", "Editar " + produto.nome);
    botaoEditar.addEventListener("click", editarProduto);

    item.appendChild(imagem);
    item.appendChild(categoria);
    item.appendChild(nome);
    item.appendChild(preco);

    acoes.appendChild(botaoEditar);
    acoes.appendChild(botao);

    item.append(acoes);

    lista.appendChild(item);
  })

  const total = produtos.reduce((acumulador, produto) => {
    return acumulador + produto.preco;
  }, 0)

  quantidade.textContent = produtos.length;
  totalElemento.textContent = formatarPreco(total);
  avisoVazio.hidden = produtos.length > 0;
  if (produtos.length === 0) {
    avisoVazio.textContent = "sua próxima descoberta começa aqui.";
  } else {
    avisoVazio.textContent = "Nenhuma peça encontrado com essa busca."
  }
}

function formatarPreco(valor) {
  return "R$ " + valor.toFixed(2).replace(".", ",");
}

function removerProduto(evento) {
  const id = Number(evento.currentTarget.dataset.id);

  produtos = produtos.filter((produto) => {
    return produto.id !== id;
  })

  renderizarProdutos();
  salvarcolecao();
}

function aplicarOrdenacao() {
  if (ordem.value === "crescente") {
    produtos.sort((a, b) => a.preco - b.preco);
  }
  else if (ordem.value === "decrescente") {
    produtos.sort((a, b) => b.preco - a.preco);
  }
  else if (ordem.value === "nome") {
    produtos.sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
  }
  else {
    produtos.sort((a, b) => a.id - b.id);
  }
}

const mensagem = document.querySelector("#mensagem");

function mostrarErro(campo, texto) {
  campo.classList.add("invalido");
  campo.setAttribute("aria-invalid", "true");

  mensagem.textContent = texto;
  mensagem.classList.add("erro");

  campo.focus();
}

=======

const botaoSalvar = document.querySelector("#salvar-produto");
const botaoCancelar = document.querySelector("#cancelar-edicao");

function renderizarProdutos() {
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
        preco.textContent = formatarPreco(produto.preco);

        acoes.classList.add("produto-acoes");

        botao.classList.add("acao-produto");
        botao.type = "button";
        botao.dataset.id = produto.id;
        botao.textContent = "Remover";
        botao.addEventListener("click", removerProduto);

        const botaoEditar = document.createElement("button");
        botaoEditar.classList.add("acao-produto");
        botaoEditar.type = "button";
        botaoEditar.textContent = "Editar";
        botaoEditar.dataset.id = produto.id;
        botaoEditar.setAttribute("aria-label", "Editar " + produto.nome);
        botaoEditar.addEventListener("click", editarProduto);

        item.appendChild(imagem);
        item.appendChild(categoria);
        item.appendChild(nome);
        item.appendChild(preco);

        acoes.appendChild(botaoEditar);
        acoes.appendChild(botao);

        item.append(acoes);

        lista.appendChild(item);
    })

    const total = produtos.reduce((acumulador, produto) => {
        return acumulador + produto.preco;
    }, 0)

    quantidade.textContent = produtos.length;
    totalElemento.textContent = formatarPreco(total);
    avisoVazio.hidden = produtos.length > 0;
}

function formatarPreco(valor) {
    return "R$ " + valor.toFixed(2).replace(".", ",");
}

function removerProduto(evento) {
    const id = Number(evento.currentTarget.dataset.id);

    produtos = produtos.filter((produto) => {
        return produto.id !== id;
    })

    renderizarProdutos();
}

function aplicarOrdenacao() {
    if (ordem.value === "crescente") {
        produtos.sort((a, b) => a.preco - b.preco);
    }
    else if (ordem.value === "decrescente") {
        produtos.sort((a, b) => b.preco - a.preco);
    }
    else if (ordem.value === "nome") {
        produtos.sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
    }
    else {
        produtos.sort((a, b) => a.id - b.id);
    }
}

const mensagem = document.querySelector("#mensagem");

function mostrarErro(campo, texto) {
    campo.classList.add("invalido");
    campo.setAttribute("aria-invalid", "true");

    mensagem.textContent = texto;
    mensagem.classList.add("erro");

    campo.focus();
}

>>>>>>> 59e191f78bf9cb5df0161deb97da289703bdfcc1
let idEmEdicao = null;

function editarProduto(evento) {
    const id = Number(evento.currentTarget.dataset.id);

    const produto = produtos.find((item) => {
        return item.id === id;
    })

    if (!produto) return;

<<<<<<< HEAD
  idEmEdicao = id;

  campoNome.value = produto.nome;
  campoPreco.value = produto.preco;
  campoCategoria.value = produto.categoria;
  contadorNome.textContent = produto.nome.length + " caracteres";
  botaoSalvar.textContent = "Salvar alterações";
  botaoCancelar.hidden = false;
=======
    idEmEdicao = id;
>>>>>>> 59e191f78bf9cb5df0161deb97da289703bdfcc1

    campoNome.value = produto.nome;
    campoPreco.value = produto.preco;
    campoCategoria.value = produto.categoria;
    contadorNome.textContent = produto.nome.length + " caracteres";
    botaoSalvar.textContent = "Salvar alterações";
    botaoCancelar.hidden = false;

    campoNome.focus();
}

botaoCancelar.addEventListener("click", () => {
<<<<<<< HEAD
  finalizarFormulario();
  mensagem.textContent = "Edição cancelada.";
=======
    finalizarFormulario();
    mensagem.textContent = "Edição cancelada.";
>>>>>>> 59e191f78bf9cb5df0161deb97da289703bdfcc1
})


const formulario = document.querySelector("#formulario");

function salvarProduto(evento) {
    evento.preventDefault();

<<<<<<< HEAD
  const nome = campoNome.value.trim();
  const preco = Number(campoPreco.value);
  const categoria = campoCategoria.value;

  if (nome.length < 2) {
    mostrarErro(campoNome, "Informe um nome com pelo menos 2 caracteres.");
    return;
  }

  if (preco <= 0) {
    mostrarErro(campoPreco, "Informe um preço maior que zero.");
    return;
  }

  if (idEmEdicao !== null) {
    const produto = produtos.find((item) => {
      return item.id === idEmEdicao;
    })

    produto.nome = nome;
    produto.preco = preco;
    produto.categoria = categoria;
  } else {
    produtos.push({
      id: proximoId,
      nome: nome,
      preco: preco,
      categoria: categoria,
      imagem: "assets/cadeira.webp"
    });
    proximoId++;
  }

  renderizarProdutos();
 

  if (idEmEdicao !== null) {
    mensagem.textContent = "Peça atualizada.";
    mensagem.classList.add("sucesso");
  } else {
    mensagem.textContent = "Peça adicionada à coleção";
    mensagem.classList.add("sucesso");
  }

  finalizarFormulario();
  salvarcolecao();
=======
    const nome = campoNome.value.trim();
    const preco = Number(campoPreco.value);
    const categoria = campoCategoria.value;

    if (nome.length < 2) {
        mostrarErro(campoNome, "Informe um nome com pelo menos 2 caracteres.");
        return;
    }

    if (preco <= 0) {
        mostrarErro(campoPreco, "Informe um preço maior que zero.");
        return;
    }

    if (idEmEdicao !== null) {
        const produto = produtos.find((item) => {
            return item.id === idEmEdicao;
        })

        produto.nome = nome;
        produto.preco = preco;
        produto.categoria = categoria;
    } else {
        produtos.push({
            id: proximoId,
            nome: nome,
            preco: preco,
            categoria: categoria,
            imagem: "assets/nova-peca.svg"
        });
        proximoId++;
    }

    renderizarProdutos();

    if (idEmEdicao !== null) {
        mensagem.textContent = "Peça atualizada.";
        mensagem.classList.add("sucesso");
    } else {
        mensagem.textContent = "Peça adicionada à coleção";
        mensagem.classList.add("sucesso");
    }
    
    finalizarFormulario();
>>>>>>> 59e191f78bf9cb5df0161deb97da289703bdfcc1
}

function finalizarFormulario() {
    formulario.reset();

    contadorNome.textContent = "0 caracteres";
    campoNome.classList.remove("invalido");
    campoPreco.classList.remove("invalido");

    campoNome.removeAttribute("aria-invalid");
    campoPreco.removeAttribute("aria-invalid");

    campoNome.focus();
}

formulario.addEventListener("submit", salvarProduto);

ordem.addEventListener("change", renderizarProdutos);

<<<<<<< HEAD
const campoBusca = document.querySelector("#busca");
document.querySelector("#area-busca").hidden = false;
campoBusca.addEventListener("input", renderizarProdutos);

function obterProdutosVisiveis() {
  const busca = campoBusca.value.trim().toLowerCase();

  return produtos.filter((produto) => {
    const correspondeNome = produto.nome.toLowerCase().includes(busca);
    const correspondecategoria = filtroCategoria === "Todas" || produto.categoria === filtroCategoria;
    return correspondeNome && correspondecategoria
  })
}

const CHAVE_COLECAO = "casa-forma-09-11-colecao";
const mensagemArmazenamento = document.querySelector("#mensagem-armazenamento");

function salvarcolecao() {
  try {
    const dados = {produtos: produtos, titulo: titulo.textContent, proximoId: proximoId};
    const texto = JSON.stringify(dados)
    localStorage.setItem(CHAVE_COLECAO, texto);
    mensagemArmazenamento.textContent = "";
    mensagemArmazenamento.classList.remove("erro");
  } catch (error) {
    mensagemArmazenamento.textContent = "A alteração aparece na tela, mas não foi salva neste navegador"
    mensagemArmazenamento.classList.add("erro");
    console.warn(error.message);
  }
}

function carregarColecao() {
  try {
    const texto = localStorage.getItem(CHAVE_COLECAO);
    if (texto === null) return;

    const dados = JSON.parse(texto);
    validarColecao(dados);

    produtos = dados.produtos;
    titulo.textContent = dados.titulo;
    proximoId = dados.proximoId;
  } catch (error) {
    mensagemArmazenamento.textContent = "não foi possivel recuperar a coleção salve. A coleção inicial foi aberta.";
    mensagemArmazenamento.classList.add("erro");
    colecao.warn(error.message);
  }
}

const CHAVE_BUSCA = "casa-forma-09-11-busca";

function salvarBuscaDaAba() {
  try {
    sessionStorage.setItem(CHAVE_BUSCA, campoBusca.value);
  } catch (error) {
    console.warn("não foi possivel recuperar a busca desta aba.", error.message)
  }
}

let filtroCategoria = "Todas";
const filtrosCategoria = document.querySelectorAll(".filtro");
document.querySelector("#filtros-categoria").hidden = false;

filtrosCategoria.forEach((botao) => {
  botao.addEventListener("click", (evento) => {
    filtroCategoria = evento.currentTarget.dataset.categoria;
    filtrosCategoria.forEach((item) => {
        const ativo = item.dataset.categoria === filtroCategoria;
        item.classList.toggle("ativo", ativo);
        item.setAttribute("aria-pressed", ativo);
    });
    renderizarProdutos();

  });
});

carregarColecao();
renderizarProdutos();
=======
renderizarProdutos();
>>>>>>> 59e191f78bf9cb5df0161deb97da289703bdfcc1
