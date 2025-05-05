document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('[data-action="open-menu"]');
    const closeButton = document.querySelector('[data-action="close-menu"]');
    const menuBackground = document.querySelector('[data-menu-background]');
    const menuLinks = document.querySelectorAll(
        '[data-mobile-link], [data-nav-link]'
    );

    function openMobileMenu() {
        menuBackground.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        menuBackground.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    if (burgerButton) {
        burgerButton.addEventListener('click', openMobileMenu);
    } else {
        console.warn('Burger button not found');
    }
    if (closeButton) closeButton.addEventListener('click', closeMobileMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId =
                link.getAttribute('data-scroll-to') ||
                link.getAttribute('href').substring(1);
            scrollToSection(targetId);
            closeMobileMenu();
        });
    });

    if (menuBackground) {
        menuBackground.addEventListener('click', event => {
            if (!event.target.closest('[data-mobile-wrapper]')) {
                closeMobileMenu();
            }
        });
    }

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            closeMobileMenu();
        }
    });

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        const isDesktop = window.innerWidth >= 1200;
        const offset = isDesktop ? 96 : 50;
        const offsetInner = isDesktop ? 14 : 0;

        if (sectionId === 'game-description') {
            const offsetTop =
                section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        } else {
            const offsetTop =
                section.getBoundingClientRect().top +
                window.scrollY -
                offsetInner;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    }
});
