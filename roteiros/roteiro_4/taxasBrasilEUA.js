const exportacao = {
    paisDestino: "Estados Unidos",
    produto: {
        nome: "aço",
        valorEmDolares: 100000,
        taxaImposta: 0.25
    },
    empresa: "Siderúrgica Brasil Ltda"
};

const toString = (exportacao) => {
    const { produto: {nome, valorEmDolares, taxaImposta}, empresa} = exportacao;
    return `
    Produto: ${nome}
    Empresa: ${empresa}
    Valor original US$ ${valorEmDolares}
    Taxa: ${taxaImposta * 100}%
    Valor com tarifa: US$ ${valorEmDolares + taxaImposta * valorEmDolares}`
}

console.log(toString(exportacao))