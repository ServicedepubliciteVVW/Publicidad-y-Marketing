let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}


let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}




document.querySelector('.btn-2').addEventListener('click', function (e) {
    e.preventDefault(); // Evita el salto inmediato
      
    const target = document.querySelector(this.getAttribute('href'));
      
    if (target) {
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth' // Hace el desplazamiento suave
        });
    }
});





let index = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[n].classList.add("active");
}

function moveSlide(step) {
    index += step;
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    showSlide(index);
}

// Cambia automáticamente cada 5 segundos
setInterval(() => moveSlide(1), 5000);