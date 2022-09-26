let headerToggle = document.querySelector('.page-header__toggle');
let navToggle = document.querySelector('.page-header__navigation');
let navLogo = document.querySelector('.page-header__logo');

headerToggle.classList.remove('toggle--no-js');
navToggle.classList.remove('navigation--no-js');
navLogo.classList.remove('logo--no-js');
navToggle.classList.remove('navigation--opened');
navToggle.classList.add('navigation--closed');


headerToggle.addEventListener('click', function () {
  headerToggle.classList.toggle('toggle--opened');
  headerToggle.classList.toggle('toggle--closed');
  navToggle.classList.toggle('navigation--closed');
  navLogo.classList.toggle('logo--no-js');
});
