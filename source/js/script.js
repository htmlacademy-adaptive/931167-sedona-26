let headerToggle = document.querySelector('.page-header__toggle');
let navToggle = document.querySelector('.page-header__navigation');


headerToggle.addEventListener('click', function () {
  if (headerToggle.classList.contains('toggle--opened')) {
    headerToggle.classList.remove('toggle--opened');
    headerToggle.classList.add('toggle--closed');
    navToggle.classList.remove('navigation--closed');
    navToggle.classList.add('navigation--opened');
  } else {
    headerToggle.classList.remove('toggle--closed');
    headerToggle.classList.add('toggle--opened');
    navToggle.classList.remove('navigation--opened');
    navToggle.classList.add('navigation--closed');
  }
});

