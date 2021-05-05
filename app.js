// burger = document.querySelector('.burger')
// navbar = document.querySelector('.navbar')
// navList = document.querySelector('.nav-list')
// rightNav = document.querySelector('.rightNav')
 


// burger.addEventListener('click', ()=>{
//     rightNav.classList.toggle('v-class-resp');
//     navList.classList.toggle('v-class-resp');
//     navbar.classList.toggle('h-nav-resp');
    
// })

burger = document.querySelector('.burger')
nav1 = document.querySelector('.nav1')
nav = document.querySelector('.nav')

burger.addEventListener('click', ()=>{
    nav1.classList.toggle('list1'),
    nav.classList.toggle('list2');
})
