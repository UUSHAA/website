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

    fadeInOnScroll();  // Run initially to fade in sections visible on load
    window.addEventListener('scroll', fadeInOnScroll);

    // Particles effect
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');

    let particlesArray = [];
    const numberOfParticles = 100;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.size > 0.2) this.size -= 0.1;
        }

        draw() {
            ctx.fillStyle = '#00f2ff';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
    }

    function init() {
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particlesArray.forEach((particle, index) => {
            particle.update();
            particle.draw();

            if (particle.size <= 0.2) {
                particlesArray.splice(index, 1);
                particlesArray.push(new Particle());
            }
        });

        requestAnimationFrame(animateParticles);
    }

    init();
    animateParticles();
});
