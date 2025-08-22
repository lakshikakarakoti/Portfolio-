let nemuIcon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

let sections= document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a ');

window.onscroll=()=>{
    sections.foeEach(sec=>{
        let top=window.scrollY;
        let offset=sec.sec.offsetTop-150;
        let height= sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach.apply(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+ ']').classList.add('active');
            });
        };
    });

    let header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};

const form = document.querySelector("form");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup");


form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    popup.classList.add("visible"); 
});


closePopup.addEventListener("click", () => {
    popup.classList.remove("visible"); 
});



ScrollReveal({
    distance:'80px',
    duration: 2000,
    delay:200,
 });
 ScrollReveal().reveal('.home-content, headding', { origin:'top' });
 ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact-form', { origin:'buttom' });
 ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
 ScrollReveal().reveal('.home-cintact p', {origin: 'right' });



