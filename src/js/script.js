window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    }
});
