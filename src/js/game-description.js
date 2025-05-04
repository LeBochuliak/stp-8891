document.addEventListener('DOMContentLoaded', function () {
    const marquee = document.querySelector('[data-marquee]');
    const marqueeTrack = document.querySelector('[data-marquee]');
    const gameDescription = document.querySelector('[data-game-description]');

    const cloneCount = 100;

    for (let i = 0; i < cloneCount; i++) {
        const clone = marquee.firstElementChild.cloneNode(true);
        marquee.appendChild(clone);
    }

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                marqueeTrack.classList.add('animate');
            } else {
                marqueeTrack.classList.remove('animate');
            }
        },
        {
            threshold: 0.05,
        }
    );

    observer.observe(gameDescription);
});
