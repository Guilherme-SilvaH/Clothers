function adicionarAoCarrinho() {
    var nomeProduto = document.querySelector('.nomecamiseta').textContent;
    var precoProduto = document.getElementById('price').textContent;
    var quantidadeProduto = document.getElementById('quantidade').textContent;
    var imagemProduto = document.getElementById('img1').src; 

    var dadosProduto = {
        nome: nomeProduto,
        preco: precoProduto,
        quantidade: quantidadeProduto,
        imagem: imagemProduto,
    };

    localStorage.setItem('produtoCarrinho', JSON.stringify(dadosProduto));
    window.location.href = '/carrinho/carrinho.html';
}

document.addEventListener('DOMContentLoaded', function () {
    var dadosProduto = JSON.parse(localStorage.getItem('produtoCarrinho'));

    if (dadosProduto) {
        var listaProdutos = document.getElementById('listaProdutos');

        var produtoItem = document.createElement('li');
        produtoItem.classList.add('produto-carrinho');

        var imagemProduto = document.createElement('img');
        imagemProduto.src = dadosProduto.imagem;
        imagemProduto.alt = dadosProduto.nome;
        imagemProduto.classList.add('produto-imagem');

        var nomeProduto = document.createElement('div');
        nomeProduto.textContent = dadosProduto.nome;
        nomeProduto.classList.add('produto-nome');

        var precoProduto = document.createElement('div');
        precoProduto.textContent = dadosProduto.preco;
        precoProduto.classList.add('produto-preco');

        var quantidadeProduto = document.createElement('div');
        quantidadeProduto.textContent = 'Quantidade: ' + dadosProduto.quantidade;
        quantidadeProduto.classList.add('produto-quantidade');

        produtoItem.appendChild(imagemProduto);
        produtoItem.appendChild(nomeProduto);
        produtoItem.appendChild(precoProduto);
        produtoItem.appendChild(quantidadeProduto);

        listaProdutos.appendChild(produtoItem);
    }
});


function voltarParaProdutos() {
    window.location.href = '/produtoInd/PeitaMasculinaNike.html';
}