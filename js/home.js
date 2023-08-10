// menubuttonToggle.addEventListener('click', () => {
//     menutabDropdown.classList.toggle('hidden');
// })

const product__wrapper = document.querySelector('.product__wrapper')
const new__product = document.querySelector('.new__product');
const popular__product = document.querySelector('.popular__product');

function getProductCard(product) {
    const mainCard = document.createElement('div');
    mainCard.className = ('main__wrapper-cards')

    const cardItemImg = document.createElement('div');
    cardItemImg.className = ('cards__item')

    const cardItemText = document.createElement('div')
    cardItemText.className = ('cards__item-texts')

    const cardImg = document.createElement('img')
    cardImg.className = ('card__img')
    cardImg.src = product.images[0];
    cardImg.alt = product.name;
    cardItemImg.appendChild(cardImg);

    // const cardImgHeart = document.createElement('img');
    // cardImgHeart.src = "../images/heart_img.svg";
    // cardImgHeart.alt = "heartimg";
    // cardItemText.appendChild(cardImgHeart);
    // cardImgHeart.className = ('card__heart')


    const cardPrice = document.createElement('h2')
    cardPrice.innerHTML = `Price: ${product.price}$`
    cardPrice.className = ('cardPrice')

    const cardCatigory = document.createElement('span');
    cardCatigory.innerHTML = `Catigory: ${product.category}`
    cardCatigory.className = ('cardcatigory')

    const cardDescription = document.createElement('h4');
    cardDescription.innerHTML = `${product.description}`
    cardDescription.className = ('cardDescription');

    const cardName = document.createElement('h2');
    cardName.innerHTML = `Name: ${product.name}`
    cardName.className = ('cardName');

    const cardBtn = document.createElement('button');
    cardBtn.innerHTML = "<b> В корзину </b>";
    cardBtn.className = ('cards__text-btn')

    cardItemText.prepend(cardBtn)
    cardItemText.prepend(cardDescription)
    cardItemText.prepend(cardName)
    cardItemText.prepend(cardCatigory)
    cardItemText.prepend(cardPrice)

    mainCard.append(cardItemImg, cardItemText,);

    return mainCard;
}

function addToCart(id) {
    let product = product.find((pr) => pr.id === id);
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

  function getProducts() {
    //discountProduct//////////////////////
    let discountProducts = products.filter((pi) => pi.discount).slice(-4);

discountProducts.map((product) => {
    let card = getProductCard(product);
    product__wrapper.append(card)
});

//newProducts///////////////////////////
let newProducts = products.slice(-4);

newProducts.map((product) => {
    let card = getProductCard(product);
    new__product.append(card)
})

//pipular//////////////////////
let popularProducts = products
    .toSorted((a, b) => a.rating - b.rating)
    .slice(-4);

popularProducts.map((product) => {
    let card = getProductCard(product);
    popular__product.append(card);
})

}
getProducts();


//Article///////////////////

const ArticleMain = document.querySelector('.status__cards-item');

let articles = [
    {
        data: "05.03.2021",
        title: "Режим использования масок и перчаток на территории магазинов",
        description: `Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.`,
        image: "../images/masks_man.png",
    },
    {
        data: "05.03.2021",
        title: "Весеннее настроение для каждой",
        description: `8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.`,
        image: "../images/springs_img.png",
    },
    {
        data: "22.02.2020",
        title: "ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
        description: `Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!`,
        image: "../images/fruits_and_vagitables.png",
    },
];


function getArticleCard(article) {
    const ArticleItem = document.createElement('div');
    ArticleItem.className = ('card__item');

    const ArticleItemImg = document.createElement('div');

    const ArticleItemText = document.createElement('div');
    ArticleItemText.className = ('card__item .card__item-text');

    const ArticleImg = document.createElement('img');
    ArticleImg.src = article.image;
    ArticleImg.alt = article.name;
    ArticleImg.className = ('card__item-img')

    ArticleItemImg.appendChild(ArticleImg);
    console.log(ArticleItemImg);

    const ArticleData = document.createElement('span');
    ArticleData.innerHTML = `${article.data}`
    ArticleData.className = ('card__item-span')

    const ArticleName = document.createElement('h2');
    ArticleName.innerHTML = `${article.title}`
    ArticleName.className = ('card__item-h2')

    const ArticleDescription = document.createElement('p');
    ArticleDescription.innerHTML = `${article.description}`;
    ArticleDescription.className = ('card__item-title')

    const ArticleBtn = document.createElement('button');
    ArticleBtn.innerHTML = `<b>Подробнее</b>`;
    ArticleBtn.className = ('card__item-btn');

    ArticleItemText.prepend(ArticleBtn);
    ArticleItemText.prepend(ArticleDescription);
    ArticleItemText.prepend(ArticleName);
    ArticleItemText.prepend(ArticleData);

    ArticleItem.append(ArticleItemImg, ArticleItemText);

    return ArticleItem
}

articles.map((article) => {
    let card =  getArticleCard(article);
    ArticleMain.append(card);
})
