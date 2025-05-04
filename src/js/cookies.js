const cookiesBtnAccept = document.querySelector('[data-action-cookies-accept]');
const cookiesBtnDecline = document.querySelector(
    '[data-action-cookies-decline]'
);
const cookies = document.querySelector('[data-cookies]');
const body = document.body;
const cookiesDecision = localStorage.getItem('cookiesConsent');

if (!cookiesDecision) {
    cookies.classList.add('show');
    body.classList.add('no-scroll');
}

const cookiesChoice = choice => {
    localStorage.setItem('cookiesConsent', choice);
    cookies.classList.remove('show');
    body.classList.remove('no-scroll');
};
cookiesBtnAccept.addEventListener('click', () => cookiesChoice('accepted'));
cookiesBtnDecline.addEventListener('click', () => cookiesChoice('declined'));
