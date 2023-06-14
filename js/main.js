(function(){
    let $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');

    function menu(){
        let $menu = document.querySelector('.hamburguer-btn');
        let $nav = document.querySelector('nav')
        let open = false;

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

    menu();
})()