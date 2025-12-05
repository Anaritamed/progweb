const usuarios = [
    { nome: "Cleciana", idade: "25", ativo: "true", saldo: "1234.56" },
    { nome: "Gustavo", idade: 30, ativo: true, saldo: 980 },
    { nome: "Rayane", idade: null, ativo: "false", saldo: "1500.90" },
    { nome: "Igor", idade: "NaN", ativo: 1, saldo: undefined },
    { nome: "Samuel", idade: "22 anos", ativo: false, saldo: "0" }
];

const normalizaIdade = idade => {
    num = Number(idade)
    if (Number.isNaN(num) || num <= 0) {
        num = null
    }
    return num
}

const normalizaAtivo = ativo => Boolean(ativo)

const normalizaSaldo = saldo => {
    result = Number(saldo)
    if (Number.isNaN(result)) {
        result = 0.00
    }
    return result.toFixed(2)
}

const normalizaUsuario = (usuario) => {
    result = {
        nome: usuario.nome,
        idade: normalizaIdade(usuario.idade),
        ativo: normalizaAtivo(usuario.ativo),
        saldo: normalizaSaldo(usuario.saldo)}
    return result
}

const processarUsuario = lista => {
    let result = []
    lista.forEach(item => {
        result.push(normalizaUsuario(item))
    });
    return result;
}

console.log(processarUsuario(usuarios))