const like__wrapper = document.querySelector('.like__wrapper');


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
  
    // const cartMinusBtn = document.createElement('button');
    // cartMinusBtn.textContent = '-';
    // cartMinusBtn.addEventListener('click', () => {
    //   decreaseQuantity(id)
    // })
    // cartMinusBtn.className = ('cart__btn');
  
    // const cardQuantity = document.createElement('span');
    // cardQuantity.innerHTML = `${quantity}`
    // cardQuantity.className = ('cart__quantity');
  
    // const cartPlusBtn = document.createElement('button');
    // cartPlusBtn.textContent = '+';
    // cartPlusBtn.addEventListener('click', () => {
    //   increaseQuantity(id)
    // })
    // cartPlusBtn.className = ('cart__btn');
  
    cartCard.append(cartCardImg, cartCardText);
    cartCard.append(cardDescription,cardName)
  
    return cartCard;
  }

  cart__like.forEach(el => {
    like__wrapper.append(getCartCard(el))
    console.log(el);
  });