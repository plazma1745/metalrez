// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle (can be added later)
// const menuToggle = document.querySelector('.menu-toggle');
// const nav = document.querySelector('.nav');
// 
// menuToggle.addEventListener('click', () => {
//     nav.classList.toggle('active');
// });