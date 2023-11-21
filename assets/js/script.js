const btnMobile = document.getElementById('btn-mobile');
const headerLogo = document.querySelector('.header-logo');

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault();
    
    const nav = document.querySelector('.header-nav');
    nav.classList.toggle('active');

    const active = nav.classList.contains('active');

    event.currentTarget.setAttribute('aria-expanded',active);

    if (active){
        event.currentTarget.setAttribute('aria-label','Fechar Menu');
        headerLogo.setAttribute('src','./assets/images/mobile-logo.svg')
    }else{
        event.currentTarget.setAttribute('aria-label','Abrir Menu');
        headerLogo.setAttribute('src','./assets/images/desktop-logo.svg');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);