try {
    const dados = JSON.parse('{"produtos" : []}');

    if (dados === null || !Array.isArray(dados.produtos)){

        // Extourar OU lançar um erro ou uma exception.
        throw new Error("A propriedade produtos deve ser um array");
    }

    console.log("Dados lidos:", dados)

} catch (error) {
    console.warn("Não foi possivel ler :", error.message)
} finally {
    console.log("Leitura encerrada.")
}




