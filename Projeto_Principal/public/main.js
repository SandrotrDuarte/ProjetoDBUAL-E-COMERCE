// CART PAGE

let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: "Blazer Verde",
        tag: "blazerverdeM",
        price: 49.99,
        inCart: 0,
        nature: {
            gender: ['M'],
            color:['green'],
            size:['S','M','L'],  
            type: 'Blazer'
        }
    },
    {
        name: "Blazer Azul",
        tag: "blazerazulM",
        price: 59.99,
        inCart: 0,
        nature: {
            gender: ['M'],
            color:['blue'],
            size:['S','M','L'],  
            type: 'Blazer'
        }
    },
    {
        name: "Polo Vermelho",
        tag: "polovermelhoH",
        price: 45.99,
        inCart: 0,
        nature: {
            gender: ['H'],
            color:['red'],
            size:['S','M','L'],  
            type: 'Polo'
        }
    },
    {
        name: "Hoodie Verde",
        tag: "hoodieverdeH",
        price: 39.99,
        inCart: 0,
        nature: {
            gender: ['H'],
            color:['green'],
            size:['S','M','L'],  
            type: 'Hoodie'
        }
    },
    {
        name: "Blazer Branco",
        tag: "blazerbrancoM",
        price: 39.99,
        inCart: 0,
        nature: {
            gender: ['M'],
            color:['white'],
            size:['S','M','L'],  
            type: 'Blazer'
        }
    },
    {
        name: "Blazer Preto",
        tag: "blazerpretoM",
        price: 45.99,
        inCart: 0,
        nature: {
            gender: ['M'],
            color:['black'],
            size:['S','M','L'],  
            type: 'Blazer'
        }
    },
    {
        name: "Top Branco",
        tag: "topbrancoM",
        price: 29.99,
        inCart: 0,
        nature: {
            gender: ['M'],
            color:['white'],
            size:['S','M','L'],  
            type: 'Top'
        }
    },
    {
        name: "Top Dourado",
        tag: "topdouradoM",
        price: 39.99,
        inCart: 0,
        nature: {
            gender: ['M'],
            color:['golden'],
            size:['S','M','L'],  
            type: 'Top'
        }
    },
    {
        name: "Top Cinzento",
        tag: "topcinzentoM",
        price: 29.99,
        inCart: 0,
        nature: {
            gender: ['M'],
            color:['grey'],
            size:['S','M','L'],  
            type: 'Top'
        }
    },
    {
        name: "Top Verde",
        tag: "topverdeM",
        price: 59.99,
        inCart: 0,
        nature: {
            gender: ['M'],
            color:['green'],
            size:['S','M','L'],  
            type: 'Top'
        }
    },
    {
        name: "Hoodie Rosa",
        tag: "hoodierosaM",
        price: 34.99,
        inCart: 0,
        nature: {
            gender: ['M'],
            color:['pink'],
            size:['S','M','L'],  
            type: 'Hoodie'
        }
    },
    {
        name: "Hoodie Cinzento",
        tag: "hoodiecinzentoM",
        price: 29.99,
        inCart: 0,
        nature: {
            gender: ['M'],
            color:['grey'],
            size:['S','M','L'],  
            type: 'Hoodie'
        }
    },
    {
        name: "Hoodie Laranja",
        tag: "hoodieLaranjaM",
        price: 29.99,
        inCart: 0,
        nature: {
            gender: ['M'],
            color:['orange'],
            size:['S','M','L'],  
            type: 'Hoodie'
        }
    },
    {
        name: "Hoodie Branco",
        tag: "hoodiebrancoM",
        price: 59.99,
        inCart: 0,
        nature: {
            gender: ['M'],
            color:['white'],
            size:['S','M','L'],  
            type: 'Hoodie'
        }
    },
    {
        name: "T-shirt Vinho",
        tag: "tshirtwineM",
        price: 14.99,
        inCart: 0,
        nature: {
            gender: ['M'],
            color:['burgundy'],
            size:['S','M','L'],  
            type: 'T-shirt'
        }
    },
    {
        name: "T-shirt Roxa",
        tag: "tshirtroxaM",
        price: 19.99,
        inCart: 0,
        nature: {
            gender: ['M'],
            color:['purple'],
            size:['S','M','L'],  
            type: 'T-shirt'
        }
    },
    {
        name: "T-shirt Branca",
        tag: "tshirtbrancaM",
        price: 9.99,
        inCart: 0,
        nature: {
            gender: ['M'],
            color:['white'],
            size:['S','M','L'],  
            type: 'T-shirt'
        }
    },
    {
        name: "T-shirt Azul",
        tag: "tshirtazulM",
        price: 9.99,
        inCart: 0,
        nature: {
            gender: ['M'],
            color:['blue'],
            size:['S','M','L'],  
            type: 'T-shirt'
        }
    },
    {
        name: "Hoodie Rosa",
        tag: "hoodierosaH",
        price: 69.99,
        inCart: 0,
        nature: {
            gender: ['H'],
            color:['pink'],
            size:['S','M','L'],  
            type: 'Hoodie'
        }
    },
    {
        name: "Hoodie Preto",
        tag: "hoodiepretoH",
        price: 59.99,
        inCart: 0,
        nature: {
            gender: ['H'],
            color:['black'],
            size:['S','M','L'],  
            type: 'Hoodie'
        }
    },
    {
        name: "Hoodie Cor de Vinho",
        tag: "hoodievinhoH",
        price: 34.99,
        inCart: 0,
        nature: {
            gender: ['H'],
            color:['burgundy'],
            size:['S','M','L'],  
            type: 'Hoodie'
        }
    },
    {
        name: "T-shirt Branca",
        tag: "tshirtbrancaH",
        price: 19.99,
        inCart: 0,
        nature: {
            gender: ['H'],
            color:['white'],
            size:['S','M','L'],  
            type: 'T-shirt'
        }
    },
    {
        name: "T-shirt Azul",
        tag: "tshirtazulH",
        price: 15.99,
        inCart: 0,
        nature: {
            gender: ['H'],
            color:['blue'],
            size:['S','M','L'],  
            type: 'T-shirt'
        }
    },
    {
        name: "T-shirt Azul Clara",
        tag: "tshirtazulclaroH",
        price: 25.99,
        inCart: 0,
        nature: {
            gender: ['H'],
            color:['blue'],
            size:['S','M','L'],  
            type: 'T-shirt'
        }
    },
    {
        name: "T-shirt Preta",
        tag: "tshirtpretoH",
        price: 19.99,
        inCart: 0,
        nature: {
            gender: ['H'],
            color:['black'],
            size:['S','M','L'],  
            type: 'T-shirt'
        }
    },
    {
        name: "T-shirt Branca",
        tag: "tshirtbrancaM",
        price: 9.99,
        inCart: 0,
        nature: {
            gender: ['H'],
            color:['white'],
            size:['S','M','L'],  
            type: 'T-shirt'
        }
    },
    {
        name: "Camisa Branca",
        tag: "camisabrancaH",
        price: 29.99,
        inCart: 0,
        nature: {
            gender: ['H'],
            color:['white'],
            size:['S','M','L'],  
            type: 'Camisa'
        }
    },
    {
        name: "Camisa Azul Clara",
        tag: "camisaazulH",
        price: 34.99,
        inCart: 0,
        nature: {
            gender: ['H'],
            color:['blue'],
            size:['S','M','L'],  
            type: 'Camisa'
        }
    },
    {
        name: "Camisa Castanha",
        tag: "camisacastanhaH",
        price: 19.99,
        inCart: 0,
        nature: {
            gender: ['H'],
            color:['brown'],
            size:['S','M','L'],  
            type: 'Camisa'
        }
    },
    {
        name: "Camisa Cinzenta",
        tag: "camisacinzentaH",
        price: 24.99,
        inCart: 0,
        nature: {
            gender: ['H'],
            color:['grey'],
            size:['S','M','L'],  
            type: 'Camisa'
        }
    },
    {
        name: "Casaco Preto",
        tag: "casacopretoH",
        price: 69.99,
        inCart: 0,
        nature: {
            gender: ['H'],
            color:['black'],
            size:['S','M','L'],  
            type: 'Casaco'
        }
    },
    {
        name: "Casaco Azul Escuro",
        tag: "casacoazulH",
        price: 74.99,
        inCart: 0,
        nature: {
            gender: ['H'],
            color:['blue'],
            size:['S','M','L'],  
            type: 'Casaco'
        }
    },
    {
        name: "Casaco Castanho",
        tag: "casacocastanhoH",
        price: 59.99,
        inCart: 0,
        nature: {
            gender: ['H'],
            color:['brown'],
            size:['S','M','L'],  
            type: 'Casaco'
        }
    },
    {
        name: "Casaco Verde",
        tag: "casacoverdeH",
        price: 54.99,
        inCart: 0,
        nature: {
            gender: ['H'],
            color:['green'],
            size:['S','M','L'],  
            type: 'Casaco'
        }
    },
    {
        name: "Anel de Diamantes",
        tag: "aneldiamante",
        price: 119.99,
        inCart: 0,
        nature: {  
            type: 'Acessorio'
        }
    },
    {
        name: "Bracelete",
        tag: "bracelet",
        price: 99.99,
        inCart: 0,
        nature: {  
            type: 'Acessorio'
        }
    },
    {
        name: "Relógio",
        tag: "relogio",
        price: 109.99,
        inCart: 0,
        nature: {  
            type: 'Acessorio'
        }
    },
    {
        name: "Brincos",
        tag: "brincos",
        price: 89.99,
        inCart: 0,
        nature: {  
            type: 'Acessorio'
        }
    },
]


// main.js

document.addEventListener("DOMContentLoaded", function () {
    // Função para adicionar produtos ao carrinho
    function setupAddToCartButtons() {
        let addCartButtons = document.querySelectorAll('.add-cart');

        addCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Obtém a classe do botão (por exemplo, cart7)
                let buttonClass = button.classList[1];

                // Obtém o número do produto a partir da classe do botão
                let productNumber = parseInt(buttonClass.replace('cart', ''));

                // Obtém o produto correspondente ao número
                let selectedProduct = products[productNumber - 1]; // Subtrai 1 para ajustar ao índice do array

                // Adiciona o produto ao carrinho
                cartNumbers(selectedProduct);
                totalCost(selectedProduct);
            });
        });

        
    }
    
    // Função para exibir produtos na página
    function displayProducts() {
        let productContainer = document.querySelector(".produtos-container");

        // Verificar se a página atual é "produtos.html"
        if (window.location.pathname.includes("produtos.html")) {
            // Exibir todos os produtos apenas se a página for "produtos.html"
            products.forEach((product, index) => {
                productContainer.innerHTML += `
                    <div class="box">
                        <img src="./img/produtos/${product.tag}.png" alt="">
                        <h3>${product.name}</h3>
                        <div class="content">
                            <span>€${product.price}</span>
                            <a class="add-cart cart${index + 1}" href="#">Adicionar ao carrinho</a>
                            <input type="hidden" value="${product.price}" data-product-tag="${product.tag}">
                        </div>
                    </div>    
                `;
            });

            // Configurar botões "Adicionar ao carrinho" após exibição dos produtos
            setupAddToCartButtons();
        } else {
            // A página não é "produtos.html", então mantenha os produtos existentes
            // e configure os botões "Adicionar ao carrinho"
            setupAddToCartButtons();
        }
    }

    // Exibir produtos na inicialização
    displayProducts();
});


function getProductHTML(product, index) {
    return `
        <div class="box">
            <img src="./img/produtos/${product.tag}.png" alt="">
            <h3>${product.name}</h3>
            <div class="content">
                <span>€${product.price}</span>
                <a class="add-cart cart${index + 1}" href="#">Adicionar ao carrinho</a>
                <input type="hidden" value="${product.price}" data-product-tag="${product.tag}">
            </div>
        </div>
    `;
}




function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.icon-cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.icon-cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.icon-cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost !== null) {
        cartCost = parseFloat(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
    
    // Agora, após a atualização, recuperamos o valor atualizado
    cartCost = localStorage.getItem('totalCost');
    console.log("My cartCost is", cartCost);
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <i class='bx bxs-trash-alt'></i>
                <img src="./img/produtos/${item.tag}.png"
                <span>${item.name}</span>
            </div> 
            <div class="price">€${item.price}</div>
            <div class="quantity">
                <i class='bx bxs-left-arrow-circle'></i>
                <span>${item.inCart}</span>
                <i class='bx bxs-right-arrow-circle'></i>
            </div>
            <div class="total">
                €${item.inCart * item.price}
            </div>
            `
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Preço Final
                </h4>
                <h4 class="basketTotal">
                    $${cartCost}
                </h4>
                
        `

    }
}


onLoadCartNumbers();
displayCart();



//ICONS E INTERAÇÕES

let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}


window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

// main.js

document.addEventListener("DOMContentLoaded", function () {
    // Obtenha o ícone de usuário
    const userIcon = document.getElementById("user-icon");

    // Adicione um ouvinte de clique ao ícone de usuário
    if (userIcon) {
        userIcon.addEventListener("click", function () {
            // Redirecione para a página de login quando o ícone for clicado
            window.location.replace("/login");
        });
    }
});


