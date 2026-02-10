import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Navbar component with integrated mobile side menu.
 * Features:
 * - Desktop: Sticky header with navigation links and contact info.
 * - Mobile: Hamburger menu that opens a white side panel with perspective link animations.
 * - Scroll: Transitions from white to black on scroll.
 */
export default class Navbar {
    constructor() {
        this.element = document.createElement('nav');
        this.element.className = 'navbar';
        this.element.innerHTML = `
            <div class="nav-container">
                <!-- Mobile Menu Toggle (Left Side) -->
                <div class="menu-toggle mobile-only">
                    <div class="menu-button">
                        <div class="hamburger-box">
                            <span class="burger-line line-1"></span>
                            <span class="burger-line line-2"></span>
                            <span class="burger-line line-3"></span>
                        </div>
                    </div>
                </div>

                <!-- Center Logo -->
                <div class="nav-center">
                    <a href="#/" data-link class="logo-link">
                        <img src="/assets/get logo.png" alt="Get Tourism" class="nav-logo" />
                    </a>
                </div>

                <!-- Desktop Left Links -->
                <div class="nav-left desktop-only">
                    <a href="#/" data-link class="nav-btn featured-link">
                        <span class="btn-wrapper">
                            <span class="btn-text">Featured</span>
                            <span class="btn-text-hover">Featured</span>
                        </span>
                        <svg class="nav-arrow" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                        </svg>
                    </a>
                    <a href="#/services" data-link class="nav-btn">
                        <span class="btn-wrapper">
                            <span class="btn-text">Services</span>
                            <span class="btn-text-hover">Services</span>
                        </span>
                        <svg class="nav-arrow" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                        </svg>
                    </a>
                </div>

                <!-- Desktop Right Links -->
                <div class="nav-right desktop-only">
                    <a href="#/about" data-link class="nav-btn">
                        <span class="btn-wrapper">
                            <span class="btn-text">About</span>
                            <span class="btn-text-hover">About</span>
                        </span>
                        <svg class="nav-arrow" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                        </svg>
                    </a>
                    <a href="#/contact" data-link class="nav-btn">
                        <span class="btn-wrapper">
                            <span class="btn-text">Contact</span>
                            <span class="btn-text-hover">Contact</span>
                        </span>
                        <svg class="nav-arrow" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Mobile Side Menu Overlay -->
            <div class="mobile-side-menu">
                <div class="menu-overlay"></div>
                <div class="menu-content">
                    <div class="menu-body">
                        <div class="menu-links">
                            <div class="menu-link-item">
                                <a href="#/" data-link>Home</a>
                            </div>
                            <div class="menu-link-item">
                                <a href="#/about" data-link>About</a>
                            </div>
                            <div class="menu-link-item">
                                <a href="#/" class="featured-link-mobile">Featured</a>
                            </div>
                            <div class="menu-link-item">
                                <a href="#/services" data-link>Services</a>
                            </div>
                            <div class="menu-link-item">
                                <a href="#/contact" data-link>Contact</a>
                            </div>
                        </div>
                        <div class="menu-footer">
                            <div class="menu-socials">
                                <a href="#" target="_blank">Facebook</a>
                                <a href="#" target="_blank">LinkedIn</a>
                                <a href="#" target="_blank">Instagram</a>
                                <a href="#" target="_blank">Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Inject Styles
        const style = document.createElement('style');
        style.textContent = `
            .navbar {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: var(--nav-height);
                z-index: 1000;
                background: transparent;
                display: flex;
                align-items: center;
                padding: 1.5rem 0;
            }
            
            .nav-container {
                width: 100%;
                max-width: 1600px;
                margin: 0 auto;
                padding: 0 3rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: relative;
            }
            
            .desktop-only { display: flex; }
            .mobile-only { display: none; }
            
            .nav-center {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1001;
            }

            .nav-logo {
                height: 40px;
                width: auto;
            }

            .nav-btn {
                font-size: 1.1rem;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                color: var(--text-color, #fff);
                padding: 0.8rem 2rem;
                text-decoration: none;
                overflow: hidden;
                display: inline-flex;
                align-items: center;
                gap: 0.4rem;
            }

            .nav-arrow {
                width: 16px;
                height: 16px;
                opacity: 0;
                transform: translateX(-8px);
                transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }

            .nav-btn:hover .nav-arrow {
                opacity: 1;
                transform: translateX(0);
            }


            .btn-wrapper {
                position: relative;
                display: block;
                overflow: hidden;
            }

            .btn-text, .btn-text-hover {
                display: block;
                transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1);
            }

            .btn-text-hover {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                transform: translateY(100%);
                opacity: 0;
            }

            .nav-btn:hover .btn-text { transform: translateY(-100%); opacity: 0; }
            .nav-btn:hover .btn-text-hover { transform: translateY(0%); opacity: 1; }

            .contact-info {
                display: flex;
                align-items: center;
                gap: 0.8rem;
                font-size: 1rem;
                color: var(--text-color, #fff);
                text-decoration: none;
                padding: 0.6rem 1.2rem;
            }

            /* Hamburger Menu Button */
            .menu-button {
                width: 40px;
                height: 40px;
                cursor: pointer;
                position: relative;
                z-index: 1100;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .hamburger-box {
                width: 24px;
                height: 18px;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            .burger-line {
                width: 100%;
                height: 2px;
                background-color: #fff;
                transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), 
                            background-color 0.3s ease,
                            opacity 0.3s ease;
            }

            .navbar.scrolled .burger-line {
                background-color: #02184C;
            }
            
            .navbar .menu-button.active .burger-line {
                background-color: #02184C !important;
            }

            /* Side Menu Styles */
            .mobile-side-menu {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                z-index: 1050;
                visibility: hidden;
                pointer-events: none;
                display: flex;
                justify-content: flex-start;
            }

            .menu-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.4);
                backdrop-filter: blur(15px);
                opacity: 0;
            }

            .menu-content {
                width: 480px;
                height: 100%;
                background: #ffffff;
                padding: 120px 60px 60px;
                transform: translateX(-100%);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                box-shadow: 20px 0 50px rgba(0,0,0,0.1);
                position: relative;
                text-align: left;
            }

            .menu-links {
                display: flex;
                flex-direction: column;
                gap: 2.5rem;
            }

            .menu-link-item {
                overflow: hidden;
                perspective: 1000px;
            }

            .menu-link-item a {
                display: block;
                font-size: 4rem;
                font-family: "Montserrat", sans-serif;
                font-weight: 700;
                color: #1a1a1a;
                text-decoration: none;
                line-height: 1;
                transform-origin: left center;
                transition: color 0.3s ease;
            }

            .menu-link-item a:hover {
                color: #666;
            }

            .menu-socials {
                display: flex;
                gap: 2rem;
                justify-content: flex-start;
                margin-top: auto;
                border-top: 1px solid rgba(0,0,0,0.1);
                padding-top: 2rem;
            }

            .menu-socials a {
                color: rgba(0,0,0,0.6);
                text-decoration: none;
                font-size: 0.85rem;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                transition: color 0.3s ease;
            }

            .menu-socials a:hover {
                color: #000;
            }

            @media (max-width: 768px) {
                .desktop-only { display: none; }
                .mobile-only { display: block; }
                .nav-container { padding: 0 1.5rem; }
                .menu-content { width: 85%; padding: 100px 30px 40px; }
                .menu-link-item a { font-size: 2.5rem; }
            }
        `;
        document.head.appendChild(style);

        this.isMenuOpen = false;
        this.initEvents();
    }

    initEvents() {
        const toggle = this.element.querySelector('.menu-button');
        if (toggle) {
            toggle.addEventListener('click', () => this.toggleMenu());
        }

        const links = this.element.querySelectorAll('.menu-link-item a');
        links.forEach(link => {
            link.addEventListener('click', () => this.toggleMenu(false));
        });

        const overlay = this.element.querySelector('.menu-overlay');
        if (overlay) {
            overlay.addEventListener('click', () => this.toggleMenu(false));
        }

        // Featured link scroll functionality
        const featuredLink = this.element.querySelector('.featured-link');
        if (featuredLink) {
            featuredLink.addEventListener('click', (e) => {
                e.preventDefault();

                // Check if we're already on home page
                const isHomePage = window.location.hash === '' || window.location.hash === '#/' || window.location.hash === '#';

                if (isHomePage) {
                    // Scroll to featured section if already on home
                    const featuredSection = document.querySelector('.featured-trips');
                    if (featuredSection) {
                        featuredSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                } else {
                    // Navigate to home first, then scroll (handled in home.js)
                    window.location.hash = '#/';
                    setTimeout(() => {
                        const featuredSection = document.querySelector('.featured-trips');
                        if (featuredSection) {
                            featuredSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }, 500); // Wait for page to load
                }
            });
        }

        // Featured link scroll functionality (Mobile)
        const featuredLinkMobile = this.element.querySelector('.featured-link-mobile');
        if (featuredLinkMobile) {
            featuredLinkMobile.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleMenu(false); // Close mobile menu first

                // Check if we're already on home page
                const isHomePage = window.location.hash === '' || window.location.hash === '#/' || window.location.hash === '#';

                if (isHomePage) {
                    // Scroll to featured section if already on home
                    setTimeout(() => {
                        const featuredSection = document.querySelector('.featured-trips');
                        if (featuredSection) {
                            featuredSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }, 300); // Small delay for menu close animation
                } else {
                    // Navigate to home first, then scroll
                    window.location.hash = '#/';
                    setTimeout(() => {
                        const featuredSection = document.querySelector('.featured-trips');
                        if (featuredSection) {
                            featuredSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }, 800); // Longer wait for page load
                }
            });
        }
    }

    /**
     * Toggles the side menu state and animates elements.
     * @param {boolean} force - Optional boolean to force open/close state.
     */
    toggleMenu(force) {
        this.isMenuOpen = force !== undefined ? force : !this.isMenuOpen;

        const menu = this.element.querySelector('.mobile-side-menu');
        const overlay = this.element.querySelector('.menu-overlay');
        const content = this.element.querySelector('.menu-content');
        const linkItems = this.element.querySelectorAll('.menu-link-item a');
        const socials = this.element.querySelector('.menu-socials');
        const toggleButton = this.element.querySelector('.menu-button');

        const line1 = this.element.querySelector('.line-1');
        const line2 = this.element.querySelector('.line-2');
        const line3 = this.element.querySelector('.line-3');

        if (this.isMenuOpen) {
            if (toggleButton) toggleButton.classList.add('active');
            gsap.set(menu, { visibility: 'visible', pointerEvents: 'auto' });
            gsap.to(overlay, { opacity: 1, duration: 0.8 });
            gsap.to(content, { x: '0%', duration: 0.8, ease: "power4.out" });

            // Burger to X animation
            gsap.to(line1, { y: 8, rotate: 45, duration: 0.4, ease: "power2.inOut" });
            gsap.to(line2, { opacity: 0, duration: 0.3 });
            gsap.to(line3, { y: -8, rotate: -45, duration: 0.4, ease: "power2.inOut" });

            // Entrance animation for links
            gsap.fromTo(linkItems,
                { opacity: 0, rotateX: 90, y: 80, x: -50 },
                {
                    opacity: 1, rotateX: 0, y: 0, x: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    delay: 0.3,
                    ease: "power4.out"
                }
            );

            gsap.fromTo(socials,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, delay: 0.7, ease: "power3.out" }
            );
        } else {
            if (toggleButton) toggleButton.classList.remove('active');
            gsap.to(overlay, { opacity: 0, duration: 0.6 });

            // X to Burger animation
            gsap.to(line1, { y: 0, rotate: 0, duration: 0.4, ease: "power2.inOut" });
            gsap.to(line2, { opacity: 1, duration: 0.3 });
            gsap.to(line3, { y: 0, rotate: 0, duration: 0.4, ease: "power2.inOut" });

            gsap.to(content, {
                x: '-100%',
                duration: 0.6,
                ease: "power4.in",
                onComplete: () => {
                    gsap.set(menu, { visibility: 'hidden', pointerEvents: 'none' });
                }
            });

            gsap.to(linkItems, { opacity: 0, duration: 0.3 });
        }
    }

    mount(parent, options = {}) {
        parent.insertBefore(this.element, parent.firstChild);

        if (options.solid) {
            this.setSolid(true);
        }

        // Internal Animation to hide/show
        this.scrollTriggerAnim = gsap.to(this.element, {
            yPercent: -100,
            paused: true,
            duration: 0.5,
            ease: 'power3.inOut'
        });

        // Global trigger for non-home pages
        if (options.globalScroll !== false) {
            this.createGlobalTrigger();
        }
    }

    createGlobalTrigger() {
        if (this.globalTrigger) this.globalTrigger.kill();
        this.globalTrigger = ScrollTrigger.create({
            start: 'top top',
            end: 99999,
            onUpdate: (self) => {
                if (self.direction === 1) {
                    this.scrollTriggerAnim.play();
                } else {
                    this.scrollTriggerAnim.reverse();
                }
            }
        });
    }

    setSolid(isSolid) {
        if (isSolid) {
            this.element.classList.add('solid');
            const navLinks = this.element.querySelectorAll('.nav-btn, .contact-info');
            const navLogo = this.element.querySelector('.nav-logo');
            if (navLogo) {
                gsap.to(navLogo, {
                    opacity: 1,
                    duration: 0.6,
                    ease: 'power2.out'
                });
            }
            if (navLinks.length > 0) {
                gsap.to(navLinks, {
                    color: 'rgb(2, 24, 76)',
                    duration: 0.6,
                    ease: 'power2.out'
                });
            }
        } else {
            this.element.classList.remove('solid');
            const navLinks = this.element.querySelectorAll('.nav-btn, .contact-info');
            const navLogo = this.element.querySelector('.nav-logo');
            if (navLogo) {
                gsap.to(navLogo, {
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power2.out'
                });
            }
            if (navLinks.length > 0) {
                gsap.to(navLinks, {
                    color: 'rgb(255, 255, 255)',
                    duration: 0.6,
                    ease: 'power2.out'
                });
            }
        }
    }

    setVisible(visible) {
        if (visible) {
            this.element.style.display = 'flex';
        } else {
            this.element.style.display = 'none';
        }
    }
}
