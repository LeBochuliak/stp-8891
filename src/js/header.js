document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('[data-action="open-menu"]');
    const closeButton = document.querySelector('[data-action="close-menu"]');
    const menuBackground = document.querySelector('[data-menu-background]');
    const menuLinks = document.querySelectorAll('[data-mobile-link]');

    function openMobileMenu() {
        console.log('Open menu clicked');
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
            const targetSection = document.getElementById(
                link.getAttribute('href').substring(1)
            );
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
            closeMobileMenu();
        });
    });

    if (menuBackground) {
        menuBackground.addEventListener('click', event => {
            if (!event.target.closest('.mobile-menu-wrapper')) {
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
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
});
