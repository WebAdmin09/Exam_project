const menubuttonToggle = document.querySelector('.wrapper__menu-button');
const menutabDropdown = document.querySelector('.categories__menu');
const catalogmain = document.querySelector('.catalog__main-cards')


categories.map((categories) => {
    const categoriescard = document.createElement('div');
    categoriescard.className = 'catalog__card';

    const categoriestitle = document.createElement('span');
    categoriestitle.className = 'catalog__cards-span';
    const categoriestitleText = document.createTextNode(categories.id)
    categoriestitle.appendChild(categoriestitleText);


    const categoriesName = document.createElement('h5');
    categoriesName.className = 'catalog__cards-h5';
    const categoriesNameText = document.createTextNode(categories.name)
    categoriesName.appendChild(categoriesNameText)
    

    const categoriesImg = document.createElement('img');
    categoriesImg.src = categories.image;
    categoriesImg.alt = categories.name;
    
    categoriescard.appendChild(categoriesImg)


    categoriescard.prepend(categoriestitle)
    categoriescard.prepend(categoriesName)
    categoriescard.prepend(categoriesImg)
    catalogmain.append(categoriescard)
    // let card = getCategoriesCard(categories);
    // catalogmain.append(card)
})
