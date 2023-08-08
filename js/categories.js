const catalogmain = document.querySelector('.catalog__main-cards')

categories.map((categorie) => {
    const categoriescard = document.createElement('div');
    categoriescard.className = 'catalog__card';

    const categoriestitle = document.createElement('span');
    categoriestitle.className = 'catalog__cards-span';
    const categoriestitleText = document.createTextNode(categorie.id)
    categoriestitle.appendChild(categoriestitleText);


    const categoriesName = document.createElement('h5');
    categoriesName.className = 'catalog__cards-h5';
    const categoriesNameText = document.createTextNode(categorie.name)
    categoriesName.appendChild(categoriesNameText)
    

    const categoriesImg = document.createElement('img');
    categoriesImg.src = categorie.image;
    categoriesImg.alt = categorie.name;
    
        categoriescard.prepend(categoriestitle)
    categoriescard.prepend(categoriesName)
    categoriescard.prepend(categoriesImg)
    catalogmain.append(categoriescard)
    // let card = getCategoriesCard(categorie);
    // catalogmain.append(card)
})