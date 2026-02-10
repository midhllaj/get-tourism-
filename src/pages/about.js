import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer.js';

export default class About {
    async mount(container) {
        gsap.registerPlugin(ScrollTrigger);

        container.innerHTML = `
            <div class="about-page-wrapper">
                
                <!-- Intro Section (Parallax) -->
                <div class="parallax-header" style="height: 100vh; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <div class="bg-image-container" style="position: absolute; top: 0; left: 0; width: 100%; height: 120%; z-index: 0;">
                        <img src="/assets/about/snowboarding.jpg" alt="Snowboarding" style="width: 100%; height: 100%; object-fit: cover;">
                        <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.3);"></div>
                    </div>
                    <div class="header-content" style="position: relative; z-index: 1; text-align: center; color: white;">
                        <h1 style="font-family: 'Instrument Serif', serif; font-size: 6rem; margin: 0;">Who We Are</h1>
                        <p style="font-family: 'Inter', sans-serif; font-size: 1.2rem; letter-spacing: 2px; text-transform: uppercase;">Great Escapes Tourism</p>
                    </div>
                </div>

                <!-- Description Section (White Background) -->
                <div class="about-content-section" style="background: white; color: #1a1a1a; position: relative; z-index: 10; padding: 10rem 2rem;">
                    <div class="container" style="max-width: 1000px; margin: 0 auto; text-align: center;">
                        <h2 style="font-family: 'Instrument Serif', serif; font-size: 4rem; margin-bottom: 3rem; line-height: 1.1;">
                            Beauty and quality need the right time to be conceived and realised.
                        </h2>
                        <p style="font-family: 'Inter', sans-serif; font-size: 1.2rem; line-height: 1.8; color: #555;">
                            At Great Escapes Tourism, we believe that travel is not just about visiting places; it's about creating memories, forming connections, and expanding horizons. Our company was born out of a deep passion for exploring the world and sharing those experiences with fellow travelers. <br><br>
                            We curate journeys that go beyond the ordinary, offering you exclusive access to the world's most stunning destinations. Whether it's the thrill of the mountains or the serenity of the ocean, we ensure every moment is crafted to perfection.
                        </p>
                    </div>
                </div>

                <!-- Mission & Vision Section -->
                <div class="mission-vision-section" style="background: #111; color: white; display: flex; flex-wrap: wrap; min-height: 100vh;">
                    <!-- Left Column: Text -->
                    <div class="mv-text-col" style="flex: 1; padding: 6rem 4rem; display: flex; flex-direction: column; justify-content: center; position: relative;">
                        <!-- Decorative Header -->
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4rem; opacity: 0.5;">
                            <span style="font-family: 'Instrument Serif', serif; font-size: 3rem; -webkit-text-stroke: 1px white; color: transparent;">04</span>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="transform: rotate(45deg);">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </div>

                        <!-- Vision -->
                        <div class="mv-block" style="margin-bottom: 5rem;">
                            <h2 style="font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: clamp(3rem, 5vw, 5rem); line-height: 0.9; color: #ff6b6b; margin-bottom: 2rem; text-transform: uppercase;">
                                Our <br> Vision
                            </h2>
                            <p style="font-family: 'Inter', sans-serif; font-size: 1.1rem; line-height: 1.6; max-width: 500px; opacity: 0.9;">
                                A vision that is clear and compelling can inspire not only employees, but also customers and stakeholders. It should be ambitious, while still being realistic, and should align with the company’s values and mission. Ultimately, it should guide decision-making and strategy development.
                            </p>
                        </div>

                        <!-- Mission -->
                        <div class="mv-block">
                            <h2 style="font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: clamp(3rem, 5vw, 5rem); line-height: 0.9; color: #ff6b6b; margin-bottom: 2rem; text-transform: uppercase;">
                                Our <br> Mission
                            </h2>
                            <p style="font-family: 'Inter', sans-serif; font-size: 1.1rem; line-height: 1.6; max-width: 500px; opacity: 0.9;">
                                A company’s mission plays a pivotal role in shaping its decision-making and strategy development. While the specifics of a company’s mission can vary based on factors such as industry, size, and organizational culture, it serves as a guiding principle for the company’s overall direction.
                            </p>
                        </div>

                        <!-- Footer/Deco -->
                        <div style="margin-top: 6rem; opacity: 0.5; font-family: 'Inter', sans-serif; font-size: 0.9rem; letter-spacing: 1px;">
                            GREAT ESCAPES TOURISM / 2026
                        </div>
                    </div>

                    <!-- Right Column: Image -->
                    <div class="mv-image-col" style="flex: 1; min-width: 400px; position: relative;">
                        <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Office Space" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                </div>

                <!-- Outro Section (Reveal Parallax) -->
                <div class="parallax-footer" style="height: 100vh; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <div class="footer-bg-container" style="position: absolute; top: 0; left: 0; width: 100%; height: 120%; z-index: 0;">
                        <img src="/assets/about/cliff-ocean.jpg" alt="Cliff Ocean" style="width: 100%; height: 100%; object-fit: cover;">
                         <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.2);"></div>
                    </div>
                    <div class="footer-content" style="position: relative; z-index: 1; text-align: center; color: white;">
                        <h2 style="font-family: 'Instrument Serif', serif; font-size: 5rem;">Your Journey Begins Here</h2>
                    </div>
                </div>

            </div>
            
            <link rel="stylesheet" href="/about.css" />
        `;

        // --- Animations ---

        // 1. Intro Parallax
        gsap.to('.parallax-header .bg-image-container', {
            yPercent: 30, // Move image down slightly as we scroll down (parallax)
            ease: 'none',
            scrollTrigger: {
                trigger: '.parallax-header',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });

        // 2. Intro Text Reveal
        gsap.fromTo('.parallax-header h1, .parallax-header p',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: 'power3.out', delay: 0.5 }
        );

        // 3. Content Text Reveal (ScrollTrigger)
        const contentTexts = container.querySelectorAll('.about-content-section h2, .about-content-section p');
        gsap.fromTo(contentTexts,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.about-content-section',
                    start: 'top 70%'
                }
            }
        );

        // 3.5. Mission/Vision Animations
        const mvBlocks = container.querySelectorAll('.mv-block');
        mvBlocks.forEach((block, i) => {
            gsap.fromTo(block.children,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: block,
                        start: 'top 75%'
                    }
                }
            );
        });

        // 4. Outro Parallax
        gsap.fromTo('.parallax-footer .footer-bg-container',
            { yPercent: -20 }, // Start slightly up
            {
                yPercent: 10,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.parallax-footer',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            }
        );

        // 5. Outro Text Reveal
        const footerText = container.querySelector('.parallax-footer h2');
        gsap.fromTo(footerText,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: '.parallax-footer',
                    start: 'top 60%'
                }
            }
        );

        // Mount Footer
        this.footer = new Footer();
        this.footer.mount(document.body, { type: 'reveal' });
    }

    unmount() {
        if (this.footer) {
            this.footer.destroy();
        }
        ScrollTrigger.getAll().forEach(t => t.kill());
    }
}
