const cartCardWrap = document.querySelector('.cart__card');

function getCartCard({id, name, images, price, description, quantity}) {
    const cartCard = document.createElement('div');
    cartCard.className = ('.cartCard');

    const cartCardImg = document.createElement('div');
    cartCardImg.className('.cartCardImg');

    const cartCardText = document.createElement('div');
    cartCardText.className('cartCardText');

    
    const cart__cardImg = document.createElement('img')
    cart__cardImg.className = ('card__img')
    cart__cardImg.src = images[0];
    cart__cardImg.alt = name;
    cartCardImg.appendChild(cardImg);
    console.log(cart__cardImg);
    // const cardImgHeart = document.createElement('img');
    // cardImgHeart.src = "../images/heart_img.svg";
    // cardImgHeart.alt = "heartimg";
    // cardItemText.appendChild(cardImgHeart);
    // cardImgHeart.className = ('card__heart')


    const cardPrice = document.createElement('h2')
    cardPrice.innerHTML = `Price: ${price}$`
    cardPrice.className = ('cardPrice')

    const cardCatigory = document.createElement('span');
    cardCatigory.innerHTML = `Catigory: ${category}`
    cardCatigory.className = ('cardcatigory')

    const cardDescription = document.createElement('h4');
    cardDescription.innerHTML = `${description}`
    cardDescription.className = ('cardDescription');

    const cardQuantity = document.createElement('span');
    cardQuantity.innerHTML = `${quantity}`

    const cardName = document.createElement('h2');
    cardName.innerHTML = `Name: ${name}`

    const cartPlusBtn = document.createElement('button');
    cartPlusBtn.innerHTML = `${id}`

    const cartMinusBtn = document.createElement('button');
    cartPlusBtn.innerHTML = `${id}`
    cartCardText.prepend(cardQuantity)
    cartCardText.prepend(cartPlusBtn)
    cartCardText.prepend(cartMinusBtn)
    cartCardText.prepend(cardDescription)
    cartCardText.prepend(cardName)
    cartCardText.prepend(cardCatigory)
    cartCardText.prepend(cardPrice)

    cartCard.append(cartCardImg, cartCardText);
    return cartCard;
}

function getCartProducts() {
    cartCardWrap.innerHTML = "";
    cart.map((pr) => {
      cartCardWrap.innerHTML += getCartCard(pr);
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
