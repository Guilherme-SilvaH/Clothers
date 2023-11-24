let carrinhoVisivel = false;

function toggleCarrinho() {
    carrinhoVisivel = !carrinhoVisivel;
    atualizarVisibilidadeCarrinho();
}

function atualizarVisibilidadeCarrinho() {
    const carrinhoContainer = document.getElementById('carrinhoContainer');
    carrinhoContainer.style.display = carrinhoVisivel ? 'block' : 'none';

    if (carrinhoVisivel) {
        exibirCarrinho();
    }
}



function adicionarAoCarrinho() {
    var nomeProduto = document.querySelector('.nomecamiseta').textContent;
    var precoProduto = parseFloat(document.getElementById('price').textContent.replace('$', ''));
    var quantidadeProduto = parseInt(quantidadeSpan.textContent);
    var imagemProduto = document.getElementById('img1').src;
    var valorTotal = precoProduto * quantidadeProduto;

    // Recupere os itens existentes do sessionStorage
    var carrinhoItens = JSON.parse(sessionStorage.getItem('carrinho')) || [];

    // Verifique se o produto já está no carrinho
    var produtoExistente = carrinhoItens.find(item => item.nome === nomeProduto);

    if (produtoExistente) {
        produtoExistente.quantidade += quantidadeProduto;
    } else {
        // Adicione o novo item ao carrinho
        var novoItem = {
            nome: nomeProduto,
            preco: precoProduto,
            quantidade: quantidadeProduto,
            imagem: imagemProduto,
            valor: valorTotal
        };
        carrinhoItens.push(novoItem);
    }

    // Salve os itens de volta no sessionStorage
    sessionStorage.setItem('carrinho', JSON.stringify(carrinhoItens));

    // Atualize o popup do carrinho
    exibirCarrinho();
}

function exibirCarrinho() {
    var listaProdutosPopup = document.getElementById('listaProdutosPopup');
    listaProdutosPopup.innerHTML = '';

    var carrinhoItens = JSON.parse(sessionStorage.getItem('carrinho')) || [];

    carrinhoItens.forEach(item => {
        var produtoItem = document.createElement('li');
        produtoItem.classList.add('produto-carrinho');

        var nomeProduto = document.createElement('div');
        nomeProduto.textContent = item.nome;
        nomeProduto.classList.add('produto-nome');

        var precoProduto = document.createElement('div');
        precoProduto.textContent = '$' + item.preco.toFixed(2);
        precoProduto.classList.add('produto-preco');

        var quantidadeProduto = document.createElement('div');
        quantidadeProduto.textContent = 'Quantidade: ' + item.quantidade;
        quantidadeProduto.classList.add('produto-quantidade');

        produtoItem.appendChild(nomeProduto);
        produtoItem.appendChild(precoProduto);
        produtoItem.appendChild(quantidadeProduto);
        listaProdutosPopup.appendChild(produtoItem);
    });
}

function voltarParaProdutos() {
    window.location.href = '/produtoInd/PeitaMasculinaNike.html';
}