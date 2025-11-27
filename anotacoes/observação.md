para criar nomes de blocks no BEM eu posso fazer uso de nome composto por exemplo:
```
<main>
        <section class="produtos">
            <article class="produtos-card">
                <img class="produtos-card__imagem" src="img/notebook.jpg" alt="Notebook">
                <h2 class="produtos-card__titulo">Notebook</h2>
                <p class="produtos-card__preco">R$ 3.500,00</p>
                <button class="produtos-card__botao" onclick="adicionaAoCarrinho('Notebook', 3500)">Adicionar ao Carrinho</button>
            </article>
        </section>
</main>
```
eu possuo produtos - 1 bloco e produtos-card - outro bloco.
