
let originalDivPrice = document.getElementById("price");
let originalDivName = document.getElementById("nomecamiseta");

let clonedContentPrice = originalDivPrice.cloneNode(true);
let clonedContentName = originalDivName.cloneNode(true);

document.carrinhoopen.appendChild(clonedContentPrice);
document.carrinhoopen.appendChild(clonedContentName);