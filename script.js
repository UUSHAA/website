document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = 'opacity 1.5s ease-in-out';
    });
    
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const sectionPos = section.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.5;
            if (sectionPos < screenPos) {
                section.style.opacity = 1;
            }
        });
    });
});
