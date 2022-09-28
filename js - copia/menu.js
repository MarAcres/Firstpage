(function(){
    const openButtom = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = doccument.querySelector('nav_close');

    openButtom.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
     menu.classList.remove('nav__link--show');
    });

})();