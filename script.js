document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100
