let discountProducts = products.filter((pi) => pi.discount).slice(-4);


const cardsItemImages = document.createElement('div');
cardsItemImages.style = 'cards__item-images';

const cardsItemTexts = document.createElement('div');
cardsItemTexts.style = 'cards__item-texts;'

const cardsImg = document.createElement('img');
cardsImg.src = products.images;
cardsImg.alt = products.name;

const cardImgBtn = document.createElement('button');
cardImgBtn.innerHTML = `-50%`;

const cardsTexth2 = document.createElement('h2');
cardsTexth2.innerHTML = `${products.price}`

const cardsTexth4 = document.createElement('h4');
cardsTextSpan = document.createTextNode(products.description)

const cardsDiscountImg = document.createElement('img');
cardsDiscountImg.src = products.images;
cardsDiscountImg.alt = products.name;

const cardBtn = document.createElement('button');
cardBtn.innerHTML = 'В корзину'

