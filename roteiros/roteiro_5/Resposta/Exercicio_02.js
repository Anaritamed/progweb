const frases = [
    "JavaScript é poderoso!",
    "Callbacks são úteis.",
    "Arrow functions são mais curtas."
];

const analisarTexto = (array, callback) => {
    return callback(array)
};

// Callback que conta o total de palavras em todas as frases
const contarPalavras = (array) => {
    return result = array.reduce((acc, cur) => acc += cur.split(' ').length, 0)
};

// Callback que encontra a frase com mais palavras
const maiorFrase = (array) => {
    let maior
    array.forEach(element => {
        s = element.split(' ')
        if (!maior) {
            maior = element
        }

        if (s.length > maior.split(' ').length) {
            maior = element
        }
    });
    return maior
};

console.log(analisarTexto(frases, contarPalavras));
console.log(analisarTexto(frases, maiorFrase));