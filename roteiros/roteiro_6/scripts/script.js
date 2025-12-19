const map = L.map('map').setView([-15.7942, -47.8822], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const LCC3_COORDS = {
    lat: -7.216899,
    lon: -35.908756
};

let marcador;

const carrinho = [];

const adicionarCarrinho = livro => {
    carrinho.push(livro);
    atualizarCarrinho();
    alert(`Livro "${livro}" adicionado ao carrinho!`);
}

const atualizarCarrinho = () => {
    const contador = document.getElementById('carrinho-contador');
    const lista = document.getElementById('itens-carrinho');
    contador.innerText = carrinho.length;
    lista.innerHTML = '';
    carrinho.forEach(livro => {
        const item = document.createElement('li');
        item.textContent = livro;
        lista.appendChild(item);
    });
}

const toggleCarrinho = () => {
    const carrinhoEl = document.getElementById('carrinho');
    carrinhoEl.style.display = carrinhoEl.style.display === 'block' ? 'none' : 'block';
}

const esvaziarCarrinho = () => {
    carrinho.length = 0;
    atualizarCarrinho();
}

const localizarEndereco = () => {
    const cep = document.getElementById('cep').value;
    const endereco = document.getElementById('endereco').value;

    if (!cep || !endereco) {
        alert("Por favor, preencha o CEP e o endereço completo.");
        return;
    }

    const query = encodeURIComponent(`${endereco}, ${cep}, Brasil`);

    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`)
        .then(res => res.json())
        .then(([res]) => {
            if (!res) {
                alert("Endereço não encontrado. Verifique os dados.");
                return;
            }

            const latDestino = parseFloat(res.lat);
            const lonDestino = parseFloat(res.lon);

            map.setView([latDestino, lonDestino], 16);

            if (marcador) map.removeLayer(marcador);
            marcador = L.marker([latDestino, lonDestino])
                .addTo(map)
                .bindPopup("Endereço de entrega")
                .openPopup();

            const distanciaKm = calcularDistanciaKm(
                LCC3_COORDS.lat,
                LCC3_COORDS.lon,
                latDestino,
                lonDestino
            );

            const custoEntrega = distanciaKm * 1.20;

            document.getElementById('distancia').textContent =
                `${distanciaKm.toFixed(2)} km`;

            document.getElementById('custo-entrega').textContent =
                `R$ ${custoEntrega.toFixed(2)}`;
        })
        .catch(err => {
            console.error(err);
            alert("Erro ao buscar localização. Tente novamente mais tarde.");
        });
};
