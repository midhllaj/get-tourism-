import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Home page component with complex ScrollTrigger animations.
 * Features:
 * - 3D Window Zoom effect.
 * - Dynamic color transitions for Navbar.
 * - Parallax sky and cloud animations.
 * - Sticky/Floating CTA button.
 */
export default class Home {
    constructor(params) {
        this.params = params;
    }

    async mount(container) {
        container.innerHTML = `
            <section class="hero">
                <div class="sky-container">
                    <img src="/assets/home page bg.jpg" alt="Sky Background" />
                    <div class="clouds-container">
                        <img src="/assets/cloud-left-1.png" class="cloud-image cloud-left-1" alt="Cloud" />
                        <img src="/assets/cloud-left-1.png" class="cloud-image cloud-left-2" alt="Cloud" />
                        <img src="/assets/cloud-right-1.png" class="cloud-image cloud-right-1" alt="Cloud" />
                        <img src="/assets/cloud-right-1.png" class="cloud-image cloud-right-2" alt="Cloud" />
                    </div>
                    <img src="/assets/get%20logo%202.png" class="window-logo" alt="Great Escapes Logo" />

                    <div class="sky-text-overlay">
                        <h1 class="hero-title">Discover The World</h1>
                        <p class="hero-subtitle">Create Memories with Great Escapes Tourism!</p>
                    </div>
                </div>

                <div class="hero-copy">
                    <h1 style="color: black; text-align: center; margin-top: 5vh;">
                        What begins here is not just a journey, but an experience. A moment where
                        routine fades, horizons widen, and every destination invites you to stay
                        longer than planned. Great Escape Tourism opens the frame — while the
                        world beyond it unfolds.
                    </h1>
                </div>

                <div class="window-container">
                    <img src="/assets/window.png" alt="Window Frame" />
                </div>
            </section>

            <section class="about-us">
                <div class="about-content">
                    <h2 class="section-label">About Us</h2>
                    <h1 class="section-title">Welcome to <br> Great Escapes Tourism</h1>
                    <p class="section-text">
                        At Great Escapes Tourism, we believe that travel is not just about visiting places; it's about creating
                        memories, forming connections, and expanding horizons. Our company was born out of a deep passion for 
                        exploring the world and sharing those experiences with fellow travelers.
                    </p>
                    <button class="enquire-btn">ENQUIRE NOW</button>
                </div>
            </section>

            <section class="outro">
                <h1>Ready for your next adventure?</h1>
            </section>

            <div class="cta-container">
                <div class="cta-button">
                    <span class="btn-wrapper">
                        <span class="btn-text">Start Your Journey</span>
                        <span class="btn-text-hover">Start Your Journey</span>
                    </span>
                    <div class="cta-icon-circle">
                        <svg viewBox="0 0 24 24" fill="currentColor" class="plane-icon">
                            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                        </svg>
                    </div>
                </div>
            </div>
        `;

        this.initAnimations();
    }

    initAnimations() {
        const windowContainer = document.querySelector(".window-container");
        const skyContainer = document.querySelector(".sky-container");
        const heroCopy = document.querySelector(".hero-copy");
        const heroHeader = document.querySelector(".hero-header");
        const navLogo = document.querySelector('.nav-logo');
        const navLinks = document.querySelectorAll('.nav-btn, .contact-info');
        const navbar = document.querySelector('.navbar');
        const ctaContainer = document.querySelector('.cta-container');

        // Initial States
        if (navLogo) gsap.set(navLogo, { opacity: 0 });
        if (navLinks.length > 0) gsap.set(navLinks, { color: 'rgb(255, 255, 255)' });
        if (navbar) {
            gsap.set(navbar, {
                backgroundColor: 'rgba(255, 255, 255, 0)',
                backdropFilter: 'blur(0px)',
                borderBottom: '1px solid rgba(0, 0, 0, 0)'
            });
        }

        if (ctaContainer) {
            gsap.set(ctaContainer, {
                position: 'fixed',
                left: '50%',
                xPercent: -50,
                top: '61vh',
                bottom: 'auto',
                zIndex: 100
            });

            const ctaButton = ctaContainer.querySelector('.cta-button');
            if (ctaButton) {
                ctaButton.style.cursor = 'pointer';
                ctaButton.addEventListener('click', () => {
                    window.location.hash = '#/services';
                });
            }
        }

        if (!windowContainer || !skyContainer) return;

        const skyContainerHeight = skyContainer.offsetHeight;
        const viewportHeight = window.innerHeight;
        const skyMoveDistance = skyContainerHeight - viewportHeight;

        gsap.set(heroCopy, { yPercent: 100 });

        // Hero Entrance
        gsap.from(".hero-title", {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
            delay: 0.5
        });

        gsap.to(".hero-subtitle", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            delay: 1.5
        });

        // Main Scroll Animation
        ScrollTrigger.create({
            trigger: ".hero",
            start: "top top",
            end: `+=${viewportHeight * 3}px`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;

                // Window Zoom
                const windowScale = progress <= 0.5 ? 1 + (progress / 0.5) * 3 : 4;
                gsap.set(windowContainer, { scale: windowScale });
                if (heroHeader) gsap.set(heroHeader, { scale: windowScale, z: progress * 500 });

                // Sky Parallax
                gsap.set(skyContainer, { y: -progress * skyMoveDistance });

                // Text Reveal
                let heroCopyY = progress <= 0.66 ? 100 : (progress >= 1 ? 0 : 100 * (1 - (progress - 0.66) / 0.34));
                if (heroCopy) gsap.set(heroCopy, { yPercent: heroCopyY });

                // Navbar Transitions
                if (navLogo) {
                    let logoOpacity = progress > 0.2 ? Math.min(1, (progress - 0.2) / 0.15) : 0;
                    gsap.set(navLogo, { opacity: logoOpacity });
                }

                if (navLinks.length > 0) {
                    let t = progress > 0.2 ? Math.min(1, (progress - 0.2) / 0.15) : 0;
                    let colorValue = Math.round(255 * (1 - t));
                    gsap.set(navLinks, { color: `rgb(${colorValue}, ${colorValue}, ${colorValue})` });
                }

                // CTA Position
                if (ctaContainer) {
                    let ctaTop = progress < 0.15 ? 61 + (29 * (progress / 0.15)) : 90;
                    gsap.set(ctaContainer, { top: `${ctaTop}vh` });
                }

                // Navbar Scrolled Class (for mobile hamburger color)
                if (navbar) {
                    navbar.classList.toggle('scrolled', progress > 0.2);
                }
            },
        });

        // Window Logo Fade
        const windowLogo = document.querySelector('.window-logo');
        if (windowLogo) {
            ScrollTrigger.create({
                trigger: ".hero",
                start: "top top",
                end: "5% top",
                scrub: 1,
                animation: gsap.to(windowLogo, { opacity: 0, ease: "power1.out" })
            });
        }

        // Footer CTA Hide
        if (ctaContainer) {
            ScrollTrigger.create({
                trigger: ".footer",
                start: "top bottom",
                end: "bottom bottom",
                scrub: 1,
                onEnter: () => gsap.to(ctaContainer, { opacity: 0, duration: 0.3 }),
                onLeaveBack: () => gsap.to(ctaContainer, { opacity: 1, duration: 0.3 })
            });
        }

        // Navbar Hide on Scroll Down
        if (navbar) {
            ScrollTrigger.create({
                start: `top+=${viewportHeight * 3} top`,
                end: 99999,
                onUpdate: (self) => {
                    if (self.direction === 1) {
                        gsap.to(navbar, { yPercent: -100, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
                    } else {
                        gsap.to(navbar, { yPercent: 0, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
                    }
                },
                onLeaveBack: () => {
                    gsap.to(navbar, { yPercent: 0, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
                }
            });
        }
    }

    unmount() {
        ScrollTrigger.getAll().forEach(t => t.kill());

        const selectors = ['.nav-logo', '.nav-btn', '.contact-info', '.navbar', '.menu-button', '.mobile-side-menu'];
        selectors.forEach(selector => {
            const els = document.querySelectorAll(selector);
            els.forEach(el => gsap.set(el, { clearProps: "all" }));
        });
    }
}
