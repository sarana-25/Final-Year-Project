

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');
    const navLinks = document.querySelectorAll('.nav-link li');
    //Toggle Nav
    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    });

} 

navSlide();