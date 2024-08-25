const burger = document.getElementById('burger');
const navbar = document.querySelector('.navbar');
const list = document.querySelector('.list');


function toggleList(){
    if(window.innerWidth <= 800){
        list.classList.toggle('open')
    }
}

burger.addEventListener('click', function(){
    toggleList();
    if(navbar.style.boxShadow == 'none'){
        navbar.style.boxShadow = '';
    }else {
        navbar.style.boxShadow = 'none';
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 800) {
        list.classList.remove('open');
        navbar.style.boxShadow = '';
    }
});