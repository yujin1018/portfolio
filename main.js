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
    console.log(home.style.opacity= 1-window.scrollY/homeHeight)
})

// const home = document.querySelector('#home');
// const homeHeight = home.getBoundingClientRect().height;
// document.addEventListener('scroll',()=>{
//     if(window.scrollY>homeHeight){
//         home.classList.add('home--clear')
//     }else{
//         home.classList.remove('home--dark')
//     }
// })

