const menubuttonToggle = document.querySelector('.wrapper__menu-button .menu__btn-span');
const menutabDropdown = document.querySelector('.categories__menu');
const menudrop = document.querySelector('.menudrop')
const cartTotal = document.querySelector('.cart');
const cartFavouriteTotal = document.querySelector('.cartlike')
const loginBtn = document.querySelector('.login')
const modal = document.querySelector('.modal')
const removeBtn = document.querySelector('.modal__img')




menubuttonToggle.addEventListener('click', () => {
  menutabDropdown.classList.toggle('hidden');
})

document.addEventListener("DOMContentLoaded", function () {
  const mapsButton = document.querySelectorAll('.maps__wrapper-button button');
  const mapsContent = document.querySelectorAll('.maps__wrapper-item');
  let active = 0;

  function getmapsContent() {
    mapsContent.forEach((el, i) => {
      if (i !== active) {
        el.style.display = 'none';
        mapsButton[i].classList.remove('active-tab');
      } else {
        el.style.display = 'block';
        mapsButton[i].classList.add('active-tab');
      }
    });
  }

  getmapsContent();

  mapsButton.forEach((el, i) => {
    el.addEventListener('click', function () {
      mapsButton.forEach(button => button.classList.add('active-tab'));
      active = i;
      getmapsContent();
    });
  });
});

categories.map((category) => {
  menutabDropdown.innerHTML += `<a class="menuDropdown-link" href="Категория2.html?category=${category.name}">${category.name}</a>`;
});



let cartJson = localStorage.getItem("cart");

let cart = JSON.parse(cartJson) || [];

function getCartTotal() {
  cartTotal.textContent = cart.length;
}
getCartTotal();

const favourite = 'like'

let cartFavouriteJson = localStorage.getItem(favourite);

let cart__like = JSON.parse(cartFavouriteJson) || [];

function getFavouriteTotal() {
  cartFavouriteTotal.textContent = cart__like.length;
}
getFavouriteTotal();

loginBtn.addEventListener('click', () => {
  modal.classList.add('modal-show')
})
removeBtn.addEventListener('click', () => {
  modal.classList.remove('modal-show')
})

// loginBtn.addEventListener('click', () => {
// modal.classList.remove('removeBtn')
// })