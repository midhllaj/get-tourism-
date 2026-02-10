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
                        </div>
                        <div class="about-logo-aside">
                            <img src="/assets/about%20us%20logo.png" alt="GET Logo" class="about-logo-img">
                            <button class="enquire-btn">
                                <span>MORE</span>
                                <svg class="btn-arrow" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>


                <section class="featured-trips">
                    <div class="featured-trips-container container">
                        <div class="featured-trips-header">
                            <h2 class="section-label">Explore</h2>
                            <h1 class="section-title">Featured Trips</h1>
                            <p class="section-subtitle">Discover our handpicked travel experiences</p>
                        </div>

                        <div class="trips-grid trips-grid-two">
                            <div class="trip-card trip-card-featured" data-destination="kerala">
                                <div class="trip-image-wrapper">
                                    <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80" alt="Kerala Backwaters" class="trip-image" />
                                    <div class="trip-overlay"></div>
                                </div>
                                <div class="trip-content">
                                    <div class="trip-header">
                                        <h3 class="trip-name">Kerala</h3>
                                    </div>
                                    <p class="trip-description">Experience the serene backwaters, lush tea plantations, and pristine beaches of God's Own Country.</p>
                                    <button class="trip-cta">
                                        <span>Explore Kerala</span>
                                        <svg class="cta-arrow" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="trip-card trip-card-featured" data-destination="dubai">
                                <div class="trip-image-wrapper">
                                    <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80" alt="Dubai Skyline" class="trip-image" />
                                    <div class="trip-overlay"></div>
                                </div>
                                <div class="trip-content">
                                    <div class="trip-header">
                                        <h3 class="trip-name">Dubai</h3>
                                    </div>
                                    <p class="trip-description">Discover luxury, innovation, and adventure in the jewel of the Middle East with iconic landmarks and world-class experiences.</p>
                                    <button class="trip-cta">
                                        <span>Explore Dubai</span>
                                        <svg class="cta-arrow" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="flex-center" style="margin-top: 1rem; width: 100%;">
                            <button class="enquire-btn featured-more-btn">
                                <span>MORE</span>
                                <svg class="btn-arrow" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>

                <section class="parallax-section">
                    <div class="parallax-container">
                        <video class="parallax-background" autoplay loop muted playsinline poster="/assets/pexels-paulsan-8479826.jpg">
                            <source src="/assets/parallax bg.mp4" type="video/mp4">
                        </video>
                        <div class="parallax-content">
                            <h2 class="parallax-title">Ready<br>for your next<br>adventure?</h2>
                        </div>
                    </div>
                </section>

                <section class="our-services-new">
                    <div class="services-header-home">
                        <h1>Our Services</h1>
                    </div>
                    
                    <div class="services-tiles-home">
                        <div class="service-tile-home" id="visit-visa">
                            <div class="tile-content-home">
                                <h3>Visit Visa</h3>
                                <p>Hassle-free visa processing for all destinations.</p>
                            </div>
                        </div>

                        <div class="service-tile-home" id="tour-packages">
                            <div class="tile-content-home">
                                <h3>Tour Packages</h3>
                                <p>Curated holiday packages tailored to your dreams.</p>
                            </div>
                        </div>

                        <div class="service-tile-home" id="flight-tickets">
                            <div class="tile-content-home">
                                <h3>Flight Tickets</h3>
                                <p>Best deals on flights to anywhere in the world.</p>
                            </div>
                        </div>
                    </div>

                    <div class="services-more-container">
                        <button class="enquire-btn services-more-btn">
                            <span>MORE</span>
                            <svg class="btn-arrow" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                            </svg>
                        </button>
                    </div>
                </section>

                <section class="why-choose-us">
                    <div class="why-choose-container">
                        <div class="why-choose-header">
                            <h2 class="section-label">Why Choose Us</h2>
                            <h1 class="section-title">More Than Just Travel, It's an Experience.</h1>
                            <p class="section-text">
                                At Great Escapes Tourism, we think that traveling is about more than simply seeing new places; it's also about making relationships, broadening one's horizons, and making memories. Our business was established as a result of a strong desire to explore the world and share those experiences with others. We are motivated by a desire to provide you with unmatched travel encounters that have a profound impact on your heart and spirit.
                            </p>
                        </div>
                    </div>
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

        // Featured Trips CTA Event Listeners
        const tripCtas = document.querySelectorAll('.trip-cta');
        tripCtas.forEach(cta => {
            cta.addEventListener('click', (e) => {
                e.stopPropagation();
                window.location.hash = '#/destinations';
            });
        });

        this.prepareTextReveal();
        this.initAnimations();
    }



    prepareTextReveal() {
        const container = document.querySelector('.reveal-text-container');
        if (!container) return;

        const text = "What begins here is not just a journey, but an experience. A moment where routine fades, horizons widen, and every destination invites you to stay longer than planned. Great Escape Tourism opens the frame — while the world beyond it unfolds.";
        const words = text.split(' ');

        container.innerHTML = words.map(word => `
            <span class="word-wrapper">${word}</span>
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

        const featuredMoreBtn = document.querySelector('.featured-more-btn');
        if (featuredMoreBtn) {
            featuredMoreBtn.addEventListener('click', () => {
                window.location.hash = '#/destinations';
            });
        }

        const servicesMoreBtn = document.querySelector('.services-more-btn');
        if (servicesMoreBtn) {
            servicesMoreBtn.addEventListener('click', () => {
                window.location.hash = '#/services';
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

                // Navbar Transitions
                if (navLogo) {
                    let logoOpacity = progress > 0.2 ? Math.min(1, (progress - 0.2) / 0.15) : 0;
                    gsap.set(navLogo, { opacity: logoOpacity });
                }

                if (navLinks.length > 0) {
                    let t = progress > 0.2 ? Math.min(1, (progress - 0.2) / 0.15) : 0;
                    let r = Math.round(255 - (253 * t));
                    let g = Math.round(255 - (231 * t));
                    let b = Math.round(255 - (179 * t));
                    gsap.set(navLinks, { color: `rgb(${r}, ${g}, ${b})` });
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

        // New Text Reveal Animation with Rotation, Blur, and Opacity
        const revealContainer = document.querySelector('.reveal-text-container');
        const wordWrappers = document.querySelectorAll('.word-wrapper');

        if (revealContainer && wordWrappers.length > 0) {
            // Container rotation animation
            gsap.fromTo(
                revealContainer,
                {
                    transformOrigin: '0% 50%',
                    rotate: 3
                },
                {
                    ease: 'none',
                    rotate: 0,
                    scrollTrigger: {
                        trigger: revealContainer,
                        start: 'top bottom',
                        end: 'bottom center',
                        scrub: 2
                    }
                }
            );

            // Word opacity animation with stagger
            gsap.fromTo(
                wordWrappers,
                {
                    opacity: 0.1,
                    willChange: 'opacity, filter'
                },
                {
                    ease: 'none',
                    opacity: 1,
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: revealContainer,
                        start: 'top bottom-=20%',
                        end: 'bottom center',
                        scrub: 2
                    }
                }
            );

            // Word blur animation with stagger
            gsap.fromTo(
                wordWrappers,
                { filter: 'blur(4px)' },
                {
                    ease: 'none',
                    filter: 'blur(0px)',
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: revealContainer,
                        start: 'top bottom-=20%',
                        end: 'bottom center',
                        scrub: 2
                    }
                }
            );
        }


        // Parallax Section Animation
        const parallaxSection = document.querySelector('.parallax-section');
        const parallaxBg = document.querySelector('.parallax-background');

        if (parallaxSection && parallaxBg) {
            ScrollTrigger.create({
                trigger: parallaxSection,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                onUpdate: (self) => {
                    gsap.set(parallaxBg, {
                        y: -(self.progress * 100)
                    });
                }
            });
        }

        /* Refined CTA Locking Logic */
        const whyChooseHeader = document.querySelector('.why-choose-header');
        const whyChooseText = document.querySelector('.why-choose-header .section-text');
        if (ctaContainer && whyChooseHeader && whyChooseText) {
            ScrollTrigger.create({
                trigger: whyChooseHeader,
                start: "bottom bottom", // Lock when the header bottom reaches viewport bottom
                onEnter: () => {
                    // Lock button at the exact position where Enquire Now button was
                    const rect = whyChooseText.getBoundingClientRect();
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    // Position it centered, 3rem (48px) below the text (where the button was)
                    const absoluteTop = scrollTop + rect.bottom + 48;

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
