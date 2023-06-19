(function(){
    let $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');

    let $menu = document.querySelector('.hamburguer-btn');
    let $nav = document.querySelector('nav');

    function desabilitaHbgMenu(){
        $menu.style.display = 'none';
        $nav.style.display = 'block';
    }

    if(window.innerWidth >= 1024){
        desabilitaHbgMenu();
    }else{
        menu();
    }

    window.addEventListener('resize', function(){
        if(window.innerWidth >= 1024){
            desabilitaHbgMenu();
        }else{
            menu();
        }
    });

    function menu(){
        let open = false;

        $menu.style.display = 'block';

        $menu.addEventListener('click', function(){
            if(!open){
                open = true;
                $nav.classList.add('open');
            }else{
                open = false;
                $nav.classList.remove('open');
            }
        })
    }
   
})()