document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.classList.add('fade-in');
            }
        });
    };

    fadeInOnScroll();  // Run initially to fade in sections that are visible on load

    window.addEventListener('scroll', fadeInOnScroll);
});
