let clientesJSON = `[
    {"nome": "Lucas", "idade": 30, "email": "lucas@email.com"},
    {"nome": "Mariana", "idade": 25, "email": "mariana@email.com"}
]`;

const adicionarCliente = (json, nome, idade, email) => {
  const result = JSON.parse(json);
  result.push({
    nome: nome,
    idade: idade,
    email: email,
  });
  return JSON.stringify(result);
};

const buscarCliente = (json, nome) => {
  const clientes = JSON.parse(json);
  const [cliente] = clientes.filter(cliente => cliente.nome === nome)
  return `Nome: ${cliente.nome}\nIdade: ${cliente.idade}\nEmail: ${cliente.email}`
};

// Testando...
clientesJSON = adicionarCliente(
  clientesJSON,
  "Roberto",
  40,
  "roberto@email.com"
);

console.log(buscarCliente(clientesJSON, "Mariana"));
