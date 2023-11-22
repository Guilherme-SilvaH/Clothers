let documentadiocionar = document.getElementById("contadorquant");
let quantidadeSpan = document.getElementById("quantidade");
let maisButton = document.getElementById("mais");
let menosButton = document.getElementById("menos")

function addmais1(event) {
    let quantidadeAtual = parseInt(quantidadeSpan.textContent);
    quantidadeSpan.textContent = quantidadeAtual + 1;
}

function addmenos1(params) {
   if (quantidadeSpan.textContent > 0) {
    let quantidadeAtual = parseInt(quantidadeSpan.textContent);
    quantidadeSpan.textContent = quantidadeAtual - 1;
   }
}


maisButton.addEventListener("click", addmais1);
menosButton.addEventListener("click", addmenos1);