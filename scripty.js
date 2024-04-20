
// Light/Dark mode

document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('header nav a');
    const footer = document.querySelector('footer');

    modeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        footer.classList.toggle('dark-mode');

        navLinks.forEach(link => {
            link.classList.toggle('bold-text');
        });
    });
});



// Prepínanie slidov

let slideIndex = 1;
let slideInterval;

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
    clearInterval(slideInterval); // Stop the automatic slideshow
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    clearInterval(slideInterval); // Stop the automatic slideshow
    showSlides((slideIndex = n));
}

function startAutomaticSlideShow() {
    slideInterval = setInterval(function () {
        plusSlides(1);
    }, 5000); // Change slide every 5 seconds
}

document.addEventListener('DOMContentLoaded', function () {
    showSlides(slideIndex);
    startAutomaticSlideShow(); // Start the automatic slideshow
});

// Optional: Restart automatic slideshow if the user doesn't interact for a certain period
document.addEventListener('mousemove', function () {
    clearInterval(slideInterval); // Stop the automatic slideshow
    startAutomaticSlideShow(); // Restart the automatic slideshow
});