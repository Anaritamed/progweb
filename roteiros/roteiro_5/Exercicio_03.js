const funcionarios = [
    { nome: "Ana", cargo: "Desenvolvedora", salario: 7000 },
    { nome: "Carlos", cargo: "Gerente", salario: 12000 },
    { nome: "Beatriz", cargo: "Analista", salario: 5000 }
];
const gerarRelatorio = funcionarios => {
    s = `    Relatório de Funcionários
    ------------------------------------`
    let salariosTotal = 0
    funcionarios.forEach(element => {
        const { nome, cargo, salario } = element
        s +=`
        Nome: ${nome} - Cargo: ${cargo} - Salário: ${salario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
        salariosTotal += salario
    });

    s += `
    ------------------------------------
    Total de funcionários ${funcionarios.length}
    Salário médio: R$ ${(salariosTotal / funcionarios.length).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
    return s
}

console.log(gerarRelatorio(funcionarios));