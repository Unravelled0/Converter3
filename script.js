function mainLogic(ifMobile)
{    
    if(ifMobile.matches)
    {        
        header.innerHTML = `<img src="Photos\png1.svg" class="logo">
        <div class="dropdown">
            <button>МЕНЮ</button>
            <div class="dropdown-content">
            <a>БАНК</a>
            <a>БИЗНЕС</a>
            <a>ИНВЕСТИЦИИ</a>
            <a>СТРАХОВАНИЕ</a>
            <a>МОБАЙЛ</a>
            <a>ПУТЕШЕСТВИЯ</a>
            <a>РАЗВЛЕЧЕНИЯ</a>
            </div>
        </div>
        <button class="login">ВОЙТИ</button>`
    }
    else
    {        
        header.innerHTML = `<img src="Photos\png1.svg" class="logo">
        <div class="upper-text">
        <span>БАНК</span>
        <span>БИЗНЕС</span>
        <span>ИНВЕСТИЦИИ</span>
        <span>СТРАХОВАНИЕ</span>
        <span>МОБАЙЛ</span>
        <span>ПУТЕШЕСТВИЯ</span>
        <span>РАЗВЛЕЧЕНИЯ</span>
        <button class="login">ВОЙТИ</button>
        </div>`
    }
}

let ifMobile = window.matchMedia('(max-width: 992px)');
const header = document.querySelector('.upper-container');

window.addEventListener('resize', function(event) {
    mainLogic(ifMobile);
}, true);
