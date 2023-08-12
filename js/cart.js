const cartCardWrap = document.querySelector('.cart__card');

function getCartCard({ id, name, images, price, description, quantity, category }) {
  const cartCard = document.createElement('div');
  cartCard.className = ('cartCard');

  const cartCardImg = document.createElement('div');
  cartCardImg.className = ('cartCardImg');

  const cartCardText = document.createElement('div');
  cartCardText.className = ('cartCardText');


  const cart__cardImg = document.createElement('img')
  cart__cardImg.className = ('card__img')
  cart__cardImg.src = images[0];
  cart__cardImg.alt = name;
  cartCardImg.appendChild(cart__cardImg);
  // const cardImgHeart = document.createElement('img');
  // cardImgHeart.src = "../images/heart_img.svg";
  // cardImgHeart.alt = "heartimg";
  // cardItemText.appendChild(cardImgHeart);
  // cardImgHeart.className = ('card__heart')


  const cardPrice = document.createElement('h2')
  cardPrice.innerHTML = `${price}₽`
  cardPrice.className = ('cardPrice')

  const cardCatigory = document.createElement('span');
  cardCatigory.innerHTML = `${category}`
  cardCatigory.className = ('cardcatigory')

  const cardDescription = document.createElement('h4');
  cardDescription.innerHTML = `${description}`
  cardDescription.className = ('cardDescription');


  const cardName = document.createElement('h2');
  cardName.innerHTML = `${name}`

  const cartMinusBtn = document.createElement('button');
  cartMinusBtn.textContent = '-';
  cartMinusBtn.addEventListener('click', () => {
    decreaseQuantity(id)
  })
  cartMinusBtn.className = ('cart__btn');

  const cardQuantity = document.createElement('span');
  cardQuantity.innerHTML = `${quantity}`
  cardQuantity.className = ('cart__quantity');

  const cartPlusBtn = document.createElement('button');
  cartPlusBtn.textContent = '+';
  cartPlusBtn.addEventListener('click', () => {
    increaseQuantity(id)
  })
  cartPlusBtn.className = ('cart__btn');

  cartCard.append(cartCardImg, cartCardText);
  cartCard.append(cardDescription,
   cartMinusBtn, cardQuantity, cartPlusBtn,cardPrice)

  return cartCard;
}

function getCartProducts() {
  cartCardWrap.innerHTML = "";
  cart.map((pr) => {
    cartCardWrap.append(getCartCard(pr));
  });
}

getCartProducts();

function increaseQuantity(id) {
  cart = cart.map((pr) => {
    if (pr.id === id) {
      pr.quantity++;
    }
    return pr;
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  getCartProducts();
}

function decreaseQuantity(id) {
  let product = cart.find((pr) => pr.id === id);

  if (product.quantity === 1) {
    let isDelete = confirm("Do you want to delete this product ?");
    if (isDelete) {
      cart = cart.filter((pr) => pr.id !== id);
      getCartTotal();
    }
  } else {
    cart = cart.map((pr) => {
      if (pr.id === id) {
        pr.quantity--;
      }
      return pr;
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  getCartProducts();
}
