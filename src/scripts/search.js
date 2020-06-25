const links = document.querySelector('.header__links');
const input = document.querySelector('.search__input');

input.addEventListener('focus', e => {
  e.preventDefault();

  links.classList.add('focus__search--active');
});

input.addEventListener('blur', e => {
  e.preventDefault();
  // input.value = "";
  links.classList.remove('focus__search--active');
});

