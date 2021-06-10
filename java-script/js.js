burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
leftnav = document.querySelector('.leftnav')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('nav-height');
    rightnav.classList.toggle('d-none');
    leftnav.classList.toggle('d-flex');
})