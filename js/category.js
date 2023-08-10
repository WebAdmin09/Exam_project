
const categorywrapper  = document.querySelector('.category__product-wrapper')

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

const category = new URLSearchParams(location.search).get("category");


let categoryProducts = products.filter((product) => product.category == category);

categoryProducts.map((product) =>{
    let card = getProductCard(product)
    categorywrapper.append(card);
})