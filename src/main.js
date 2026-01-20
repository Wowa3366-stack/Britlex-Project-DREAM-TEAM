const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('lock');
  });
}
