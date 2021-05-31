const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'), 
    closeElem = document.querySelector('.menu__close');
    menuItem = document.querySelectorAll('.menu__link'),
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.classList.toggle('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.toggle('active');
});
menuItem.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    })
})