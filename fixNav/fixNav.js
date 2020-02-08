const nav = document.querySelector('#main');

let navTop=nav.offsetTop;

function fixNav(){
    if(window.scrollY>=navTop){
        document.body.style.paddingTop = nav.offsetHeight+'px';
        document.body.classList.add('nav-fixed');
    }else{
        document.body.classList.remove('nav-fixed');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);