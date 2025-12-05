const clientes = [
    { nome: "Davi", email: "davi@email.com", plano: "Premium", ativo: true },
    { nome: "Mariana", email: "mariana@email.com", plano: "Básico", ativo: false },
    { nome: "Gabriel", email: "gabriel@email.com", plano: "Padrão", ativo: true },
    { nome: "Ana", email: "ana@email.com", plano: "Premium", ativo: false },
    { nome: "Huandrey", email: "huandrey@email.com", plano: "Padrão", ativo: true }
]

let s;
gerarEmail = ({nome, email, plano, ativo}) => {
    s = `Para: ${email}
    Olá, ${nome}
    `;

    s += ativo ? `Obrigado por ser um assinante do nosso plano ${plano}! Estamos felizes em tê-lo(a) conosco.

    Caso precise de suporte, estamos à disposição.` : `Notamos que sua assinatura do plano ${plano} está inativa. Que tal voltar e aproveitar nossos conteúdos exclusivos?
    
    Reative agora e continue sua experiência conosco!`

    s += `
    Atenciosamente,
    Equipe StreamingWeb.
    `
    return s
}

clientes.forEach(cliente => console.log(gerarEmail(cliente)))