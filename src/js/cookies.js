const cookiesBtnAccept = document.querySelector('[data-action-cookies-accept]');
const cookiesBtnDecline = document.querySelector(
    '[data-action-cookies-decline]'
);
const cookies = document.querySelector('[data-cookies]');
const body = document.body;
const cookiesDecision = localStorage.getItem('cookiesConsent');

const heroBlur = document.querySelector('[data-blur-ellipse]');
const heroEllipse = document.querySelector('[data-ellipse]');
const heroTitle = document.querySelector('[data-animated-hero-title]');
const header = document.querySelector('[data-header]');

if (!cookiesDecision) {
    cookies.classList.add('show');
    body.classList.add('no-scroll');
    createCookiesOverlay();
} else if (cookiesDecision === 'accepted' || cookiesDecision === 'declined') {
    header.classList.add('z-index-header');
    animateHeroElements();
}

function createCookiesOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('cookies-overlay');
    document.body.appendChild(overlay);
}

function cookiesChoice(choice) {
    localStorage.setItem('cookiesConsent', choice);
    body.classList.remove('no-scroll');
    header.classList.add('z-index-header');

    const overlay = document.querySelector('.cookies-overlay');
    if (overlay) overlay.remove();

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

document.addEventListener('click', stopHeroAnimation);
