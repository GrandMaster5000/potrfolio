const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'), 
    closeElem = document.querySelector('.menu__close');
    menuItem = document.querySelectorAll('.menu__link'),
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
menuItem.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    })
})

const persent = document.querySelectorAll('.scales__persent'),
    lines = document.querySelectorAll('.scales__inside-scales');
persent.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};


