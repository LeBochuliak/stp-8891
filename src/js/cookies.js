const cookiesBtnAccept = document.querySelector('[data-action-cookies-accept]');
const cookiesBtnDecline = document.querySelector(
    '[data-action-cookies-decline]'
);
const cookies = document.querySelector('[data-cookies]');
const body = document.body;
const cookiesDecision = localStorage.getItem('cookiesConsent');

const heroBlur = document.querySelector('.hero-blur-circle');
const heroEllipse = document.querySelector('.hero-ellipse');
const heroTitle = document.querySelector('.animated-container ');
const header = document.querySelector('.header');

if (!cookiesDecision) {
    cookies.classList.add('show');
    body.classList.add('no-scroll');
} else if (cookiesDecision === 'accepted' || choice === 'declined') {
    animateHeroElements();
}

function cookiesChoice(choice) {
    localStorage.setItem('cookiesConsent', choice);
    body.classList.remove('no-scroll');

    if (choice === 'accepted' || choice === 'declined') {
        animateHeroElements();
    }
    cookies.classList.remove('show');
}

function animateHeroElements() {
    setTimeout(() => {
        heroBlur?.classList.add('cookies-hidden-hero-blur');
        heroEllipse?.classList.add('cookies-hidden-hero');
        heroTitle?.classList.add('cookies-hidden-hero-title');
        header?.classList.add('cookies-hidden-header');
    }, 500);
}

cookiesBtnAccept.addEventListener('click', () => cookiesChoice('accepted'));
cookiesBtnDecline.addEventListener('click', () => cookiesChoice('declined'));
