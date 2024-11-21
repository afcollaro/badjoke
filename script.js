// Carrinho de compras
let cart = [];

// Função para adicionar produto ao carrinho
function addToCart(product, price) {
  // Criando um objeto com o produto e seu preço
  const item = { product, price };
  
  // Adicionando o item ao carrinho
  cart.push(item);
  
  // Atualizando o carrinho na interface
  updateCart();
}

// Função para atualizar o número de itens no carrinho e o conteúdo do carrinho
function updateCart() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;  // Atualiza o número de itens no carrinho

  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";  // Limpa a lista de itens no carrinho

  let total = 0;  // Inicializa o total do carrinho

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.product} - R$ ${item.price} <button onclick="removeFromCart(${index})">Remover</button>`;
    cartItems.appendChild(li);
    total += parseFloat(item.price);  // Calcula o total somando os preços
  });

  // Atualiza o total do carrinho na interface
  document.getElementById("cart-total").textContent = total.toFixed(2);
}

// Função para remover item do carrinho
function removeFromCart(index) {
  cart.splice(index, 1);  // Remove o item da posição index
  updateCart();  // Atualiza a interface após a remoção
}

// Exibir carrinho
document.getElementById("view-cart").addEventListener("click", () => {
  document.getElementById("cart").style.display = "block";  // Exibe o carrinho
});

// Fechar carrinho
document.getElementById("close-cart").addEventListener("click", () => {
  document.getElementById("cart").style.display = "none";  // Fecha o carrinho
});

// Finalizar compra
document.getElementById("checkout").addEventListener("click", () => {
  if (cart.length > 0) {
    alert("Compra finalizada! Obrigado por apoiar a banda Bad Joke.");
    cart = [];  // Limpa o carrinho após a compra
    updateCart();  // Atualiza a interface após a compra
    document.getElementById("cart").style.display = "none";  // Fecha o carrinho
  } else {
    alert("Seu carrinho está vazio.");
  }
});

// Adicionar evento de clique aos botões de "Adicionar ao carrinho"
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const product = e.target.getAttribute("data-product");
    const price = e.target.getAttribute("data-price");
    addToCart(product, price);  // Adiciona o produto ao carrinho
  });
});

// Modal - Exibir imagem maior ao clicar na imagem do produto
const productImages = document.querySelectorAll(".product-image");
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close-modal");

productImages.forEach(image => {
  image.addEventListener("click", (e) => {
    const imageSrc = e.target.getAttribute("data-image");
    modalImage.src = imageSrc;
    modal.style.display = "flex";  // Exibe o modal com a imagem maior
  });
});

// Fechar o modal quando clicar no "x"
closeModal.addEventListener("click", () => {
  modal.style.display = "none";  // Fecha o modal
});

