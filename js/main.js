(function(){
    let $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');

    let $nav = document.querySelector('nav');
    let $btn = document.querySelector('.hamburguer-btn');

    let maxWidth = 1024;

    let _opened = false;
    let _this = this;

    $btn.removeAttribute('style');

    window.addEventListener('resize', e => {
        if(window.innerWidth > maxWidth){
            $nav.removeAttribute('style');
            _opened = true;
        }else if(!$nav.getAttribute('style')){
            closeMenu();
        }       
    })

    if(window.innerWidth <= maxWidth){
        closeMenu();
    }

    $btn.addEventListener('click', openOrClose);

    function openOrClose(){
        if(!_opened){
            openMenu()
        }else{
            closeMenu();
        }
    }

    function openMenu(){
        let _top = $nav.getBoundingClientRect().top + 'px';

        let _style = {
            maxHeight: 'calc(100vh - ' + _top + ')',
            overflow: 'hidden'
        };

        applyStyleToNav(_style);

        _opened = true;
    }

    function applyStyleToNav(_style){
        Object.keys(_style).forEach( stl => {
            $nav.style[stl] = _style[stl];
        })
    }

    function closeMenu(){
        let _style = {
            maxHeight: '0',
            overflow: 'hidden'
        };

        applyStyleToNav(_style);
            
        _opened = false;
    }    
})()