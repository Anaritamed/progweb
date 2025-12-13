const vendas = [
  { produto: "Notebook", preco: 4500, quantidade: 3, vendedor: "Sara" },
  { produto: "Smartphone", preco: 2300, quantidade: 5, vendedor: "Matheus" },
  { produto: "Monitor", preco: 1200, quantidade: 2, vendedor: "Gabriel" },
  { produto: "Notebook", preco: 4500, quantidade: 6, vendedor: "Gabriel" },
  { produto: "Monitor", preco: 1200, quantidade: 3, vendedor: "Matheus" },
];

const formataMoeda = (valor) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    valor
);

const gerarRelatorio = (vendas) => {
  const totaisPorVendedor = vendas.reduce((acc, venda) => {
    const totalVenda = venda.preco * venda.quantidade;
    acc[venda.vendedor] = (acc[venda.vendedor] || 0) + totalVenda;
    return acc;
  }, {});

  let s = `Relatório de Vendas:\n`;
  vendas.forEach(venda => {
  s += `
  - Produto: ${venda.produto}
  - Quantidade: ${venda.quantidade}
  - Preço Unitário: ${formataMoeda(venda.preco)}
  - Total: ${formataMoeda(venda.preco * venda.quantidade)}
  - Vendedor: ${venda.vendedor}
  `;
  });
  
  const totalGeral = vendas.reduce((acc, venda) => acc + venda.preco * venda.quantidade, 0);
  s += `
  Total Geral: ${formataMoeda(totalGeral)}
  `;
  s += `
  Total de comissão (5%):`;
  Object.entries(totaisPorVendedor).forEach(([vendedor, total]) => {
    s += `
  ${vendedor}: ${formataMoeda(Number(total) * 0.05)}`});

  return s;
};

console.log(gerarRelatorio(vendas));
