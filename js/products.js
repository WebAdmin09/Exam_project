const productsRow = document.querySelector(".products-row");
const searchInput = document.querySelector(".form__search-inp");
const totalProducts = document.querySelector(".total-products");

let search = "";

function getProductCard({id, name, description, price, images}) {
  // let check = cart.find((pr) => pr.id === id);
  return `
    <div class="product-card">
      <div class="product-card-body">
        <img
          src="${images[0]}"
          alt="${name}"
        />
      </div>
      <div class="product-card-footer">
        <h3><a class="products__name" href="product.html">${name}</a></h3>
        <p class="products__title"> ${description} </p>
        <p class="products__price">${`Price:`} ${price}${`$`}</p>
        <button onClick="addToCart(${id})" class="products__btn"><b> Add to the cart </b></button>
      </div>
    </div>
  `;
}

function getProducts() {
  let results = products.filter(
    (pr) =>
      pr.name.toLowerCase().includes(search) ||
      pr.description.toLowerCase().includes(search)
  );

  totalProducts.textContent = results.length;


  productsRow.innerHTML = "";

  if (results.length !== 0) {
    results.map((pr) => {
      productsRow.innerHTML += getProductCard(pr);
    });
  } else {
    productsRow.innerHTML = `<div class="noproducts">
      No products
    </div>`;
  }
}


getProducts();

searchInput.addEventListener("keyup", function () {
  search = this.value.trim().toLowerCase();
  getProducts();
});

function addToCart(id) {
  let product = products.find((pr) => pr.id === id);
  let check = cart.find((pr) => pr.id === id);

  if (check) {
    cart = cart.map((pr) => {
      if (pr.id === id) {
        pr.quantity++;
      }
      return pr;
    });
  } else {
    product.quantity = 1;
    cart.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  getProducts();
  getCartTotal();
}


  