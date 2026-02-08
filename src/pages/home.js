import Footer from '../components/Footer.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Home page component with complex ScrollTrigger animations.
 * Features:
 * - 3D Window Zoom effect.
 * - Dynamic color transitions for Navbar.
 * - Parallax sky and cloud animations.
 * - Sticky/Floating CTA button.
 * - Text Reveal Animation
 */
export default class Home {
    constructor(params) {
        this.params = params;
    }

    async mount(container) {
        container.innerHTML = `
            <div class="main-content">
                <section class="hero">
                    <div class="sky-container">
                        <img src="/assets/home%20page%20bg%201.png" alt="Sky Background" />
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
                            <div class="reveal-text-container">
                                <!-- Words will be injected here by JS -->
                            </div>
                        </div>
                    </div>

                    <div class="window-container">
                        <img src="/assets/window.png" alt="Window Frame" />
                    </div>
                </section>

                <section class="about-us">
                    <div class="about-grid container">
                        <div class="about-content">
                            <h2 class="section-label">About Us</h2>
                            <h1 class="section-title">Welcome to <br> Great Escapes Tourism</h1>
                            <p class="section-text">
                                At Great Escapes Tourism, we believe that travel is not just about visiting places; it's about creating
                                memories, forming connections, and expanding horizons. Our company was born out of a deep passion for 
                                exploring the world and sharing those experiences with fellow travelers.
                            </p>
                            <button class="enquire-btn">MORE</button>
                        </div>
                        <div class="about-logo-aside">
                            <img src="/assets/about%20us%20logo.png" alt="GET Logo" class="about-logo-img">
                        </div>
                    </div>
                </section>

                <section class="our-services">
                    <div class="services-container">
                        <div class="services-left">
                            <h2 class="section-label">Our Section</h2>
                            <h1 class="section-title">Our Services</h1>
                        </div>
                        <div class="services-right">
                            <div class="services-scroll">
                                <div class="service-box" id="visit-visa">
                                    <div class="box-inner">
                                        <div class="box-content">
                                            <h3>Visit Visa</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="service-box" id="tour-packages">
                                    <div class="box-inner">
                                        <div class="box-content">
                                            <h3>Tour Packages</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="service-box" id="flight-tickets">
                                    <div class="box-inner">
                                        <div class="box-content">
                                            <h3>Flight Tickets</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
            </div>
        `;

        // Mount Footer
        this.footer = new Footer();
        this.footer.mount(container, { type: 'fixed' });

        this.prepareTextReveal();
        this.initAnimations();
    }



    prepareTextReveal() {
        const container = document.querySelector('.reveal-text-container');
        if (!container) return;

        const text = "What begins here is not just a journey, but an experience. A moment where routine fades, horizons widen, and every destination invites you to stay longer than planned. Great Escape Tourism opens the frame — while the world beyond it unfolds.";
        const words = text.split(' ');

        container.innerHTML = words.map(word => `
            <span class="word-wrapper">
                <span class="word-base">${word}</span>
                <span class="word-overlay">${word}</span>
            </span>
        `).join('');
    }

    initAnimations() {
        const windowContainer = document.querySelector(".window-container");
        const skyContainer = document.querySelector(".sky-container");
        const heroHeader = document.querySelector(".hero-header");
        const navLogo = document.querySelector('.nav-logo');
        const navLinks = document.querySelectorAll('.nav-btn, .contact-info');
        const navbar = document.querySelector('.navbar');
        const ctaContainer = document.querySelector('.cta-container');

        // Text Reveal Elements
        const overlays = document.querySelectorAll('.word-overlay');

        // Initial States
        if (navLogo) gsap.set(navLogo, { opacity: 0 });
        if (navLinks.length > 0) gsap.set(navLinks, { color: 'rgb(255, 255, 255)' });
        if (overlays.length > 0) gsap.set(overlays, { opacity: 0 }); // Force initial hidden state
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
                top: '55vh',
                bottom: 'auto',
                zIndex: 100
            });

            const ctaButton = ctaContainer.querySelector('.cta-button');
            if (ctaButton) {
                ctaButton.style.cursor = 'pointer';
                ctaButton.addEventListener('click', () => {
                    window.location.hash = '#/contact';
                });
            }
        }

        const aboutBtn = document.querySelector('.about-us .enquire-btn');
        if (aboutBtn) {
            aboutBtn.addEventListener('click', () => {
                window.location.hash = '#/about';
            });
        }

        const visitVisaBox = document.getElementById('visit-visa');
        if (visitVisaBox) {
            visitVisaBox.addEventListener('click', () => {
                window.location.hash = '#/contact';
            });
        }

        const tourPackagesBox = document.getElementById('tour-packages');
        if (tourPackagesBox) {
            tourPackagesBox.addEventListener('click', () => {
                window.location.hash = '#/destinations';
            });
        }

        const flightTicketsBox = document.getElementById('flight-tickets');
        if (flightTicketsBox) {
            flightTicketsBox.addEventListener('click', () => {
                window.location.hash = '#/contact';
            });
        }

        if (!windowContainer || !skyContainer) return;

        const skyContainerHeight = skyContainer.offsetHeight;
        const viewportHeight = window.innerHeight;
        const skyMoveDistance = skyContainerHeight - viewportHeight;

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
            end: `+=${viewportHeight * 2}px`, /* Reduced scroll distance to normal animation speed */
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

                // --- Text Reveal Animation (Opacity) ---
                // We want to reveal faster: shorter range
                const startReveal = 0.15; // Slightly later start
                const endReveal = 0.7;   // Ends later for slower reveal

                if (overlays.length > 0) {
                    // Ensure we are strictly calculating opacity based on progress
                    if (progress < startReveal) {
                        gsap.set(overlays, { opacity: 0 });
                    } else if (progress > endReveal) {
                        gsap.set(overlays, { opacity: 1 });
                    } else {
                        const normalizedProgress = (progress - startReveal) / (endReveal - startReveal);
                        const totalWords = overlays.length;
                        const exactWordIndex = normalizedProgress * totalWords;

                        overlays.forEach((overlay, index) => {
                            const dist = exactWordIndex - index;
                            if (dist > 0.5) {
                                overlay.style.opacity = 1;
                            } else if (dist < -0.5) {
                                overlay.style.opacity = 0;
                            } else {
                                // Smooth transition for the current word
                                overlay.style.opacity = Math.max(0, Math.min(1, dist + 0.5));
                            }
                        });
                    }
                }

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
                    let ctaTop = progress < 0.15 ? 55 + (35 * (progress / 0.15)) : 90;
                    gsap.set(ctaContainer, { top: `${ctaTop}vh` });
                }

                // Navbar Scrolled Class (for mobile hamburger color)
                if (navbar) {
                    navbar.classList.toggle('scrolled', progress > 0.2);
                }
            },
        });

        // Our Services Side Scroll
        const servicesSection = document.querySelector('.our-services');
        const servicesScroll = document.querySelector('.services-scroll');
        const servicesRight = document.querySelector('.services-right');

        if (servicesSection && servicesScroll && servicesRight) {
            const boxes = servicesScroll.querySelectorAll('.service-box');
            const scrollWidth = servicesScroll.scrollWidth;
            const containerWidth = servicesRight.offsetWidth;
            const xTranslation = -(scrollWidth - containerWidth);

            ScrollTrigger.create({
                trigger: ".our-services",
                start: "top top",
                end: () => `+=${scrollWidth}`,
                pin: true,
                scrub: 1,
                snap: boxes.length > 1 ? 1 / (boxes.length - 1) : null,
                animation: gsap.to(servicesScroll, {
                    x: xTranslation,
                    ease: "none"
                })
            });
        }

        /* Refined CTA Locking Logic */
        const outroText = document.querySelector('.outro h1');
        if (ctaContainer && outroText) {
            ScrollTrigger.create({
                trigger: outroText,
                start: "bottom 90%", // Lock exactly when the bottom of the text reaches the floating button (at 90vh)
                onEnter: () => {
                    // Lock button below text in outro
                    const rect = outroText.getBoundingClientRect();
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const absoluteTop = scrollTop + rect.bottom + 48; // 3rem gap (48px)

                    gsap.set(ctaContainer, {
                        position: "absolute",
                        top: absoluteTop,
                        left: "50%",
                        xPercent: -50
                    });
                },
                onLeaveBack: () => {
                    // Revert to fixed floating state
                    gsap.set(ctaContainer, {
                        position: "fixed",
                        top: "90vh",
                        left: "50%",
                        xPercent: -50
                    });
                }
            });
        }

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

        /* Removed CTA Fade Out Logic as requested */

        // About Us Logo Animation
        gsap.from('.about-logo-aside', {
            scrollTrigger: {
                trigger: '.about-us',
                start: 'top 60%',
                toggleActions: 'play none none reverse'
            },
            x: 100,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out'
        });

        // Navbar Hide on Scroll Down - Restored specific logic for Home
        if (navbar) {
            ScrollTrigger.create({
                start: `top+=${viewportHeight * 3} top`,
                end: 99999,
                onUpdate: (self) => {
                    if (self.direction === 1) {
                        if (this.navbarInstance && this.navbarInstance.scrollTriggerAnim) this.navbarInstance.scrollTriggerAnim.play();
                    } else {
                        if (this.navbarInstance && this.navbarInstance.scrollTriggerAnim) this.navbarInstance.scrollTriggerAnim.reverse();
                    }
                },
                onLeaveBack: () => {
                    if (this.navbarInstance && this.navbarInstance.scrollTriggerAnim) this.navbarInstance.scrollTriggerAnim.reverse();
                }
            });
        }
    }

    unmount() {
        ScrollTrigger.getAll().forEach(t => t.kill());
        if (this.footer) this.footer.destroy();

        const selectors = ['.nav-logo', '.nav-btn', '.contact-info', '.navbar', '.menu-button', '.mobile-side-menu'];
        selectors.forEach(selector => {
            const els = document.querySelectorAll(selector);
            els.forEach(el => gsap.set(el, { clearProps: "all" }));
        });
    }
}
