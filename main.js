const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    if(window.scrollY >headerHeight){
        header.classList.add('header--dark');
    }else{
        header.classList.remove('header--dark')
    }
})

// Home 섹션을 아래로 스크롤시 투명하게 처리함!

const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', ()=>{
    home.style.opacity= 1-window.scrollY/homeHeight;
})

// Arrow up 버튼을 아래로 스크롤시 투명하게 처리

const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll',()=>{
    if(window.scrollY>homeHeight/2){
        arrowUp.style.opacity =1;
    }else{
        arrowUp.style.opacity =0;
    }
})

// Navbar toggle btn 클릭 처리
const navbarMenu = document.querySelector('.header_menu')
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click',()=>{
    navbarMenu.classList.toggle('open');
})
