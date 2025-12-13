const soma5ParesX = valor => {
    let i = valor
    if (valor % 2 !== 0) {
        i += 1;
    }

    const pares = []
    let count = 0;
    while (count < 5) {
        pares.push(i)
        i += 2
        count += 1
    }

    return pares.reduce((acc, par) => acc += par)
}

const readline = require("readline");
const leitor = readline.createInterface(process.stdin, process.stdout);
leitor.question('Digite um número: ', input => {
    console.log(`\nEntrada: ${input} => Saída: ${soma5ParesX(Number(input))}`)
    leitor.close();
})
