import Footer from '../components/Footer.js';
import gsap from 'gsap';

export default class About {
    async mount(container) {
        container.innerHTML = `
            <div class="about-page" style="position: relative; z-index: 2;">
                <section class="page-header section flex-center">
                    <div class="text-center container">
                        <h2 class="section-label fade-in">Our Story</h2>
                        <h1 class="fade-in" style="font-size: 4rem; margin-top: 1rem; animation-delay: 0.2s">Curating the Unforgettable</h1>
                    </div>
                </section>
                
                <section class="about-content container">
                    <div class="content-block">
                        <p class="large-text">Great Escapes Tourism was born from a simple belief: that travel is the only thing you buy that makes you richer. For over a decade, we have been crafting bespoke journeys for those who seek not just to see the world, but to feel it.</p>
                        <hr class="separator">
                        <div class="stats-grid">
                            <div class="stat">
                                <span class="number">10+</span>
                                <span class="label">Years of Excellence</span>
                            </div>
                            <div class="stat">
                                <span class="number">150+</span>
                                <span class="label">Destinations</span>
                            </div>
                            <div class="stat">
                                <span class="number">10k+</span>
                                <span class="label">Happy Travelers</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <style>
                .page-header {
                    height: 60vh;
                }
                .section-label {
                    color: var(--gold);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-size: 0.9rem;
                    font-family: "Inter", sans-serif;
                }
                .about-content {
                    padding-bottom: 5rem;
                }
                .large-text {
                    font-size: 1.5rem;
                    line-height: 1.6;
                    opacity: 0.9;
                    max-width: 800px;
                    margin: 0 auto;
                    text-align: center;
                }
                .separator {
                    border: 0;
                    height: 1px;
                    background: var(--glass-border);
                    margin: 4rem 0;
                }
                .stats-grid {
                    display: flex;
                    justify-content: space-around;
                    text-align: center;
                }
                .number {
                    display: block;
                    font-size: 4rem;
                    font-family: "Instrument Serif", serif;
                    color: var(--gold);
                }
                .label {
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    opacity: 0.7;
                    letter-spacing: 1px;
                }
                @media(max-width: 768px) {
                    .stats-grid {
                        flex-direction: column;
                        gap: 2rem;
                    }
                }
            </style>
        `;

        gsap.from('.large-text', {
            scrollTrigger: {
                trigger: '.about-content',
                start: 'top 70%'
            },
            y: 30,
            opacity: 0,
            duration: 1
        });

        gsap.from('.stat', {
            scrollTrigger: {
                trigger: '.stats-grid',
                start: 'top 80%'
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2
        });
        this.footer = new Footer();
        this.footer.mount(container, { type: 'sticky' });
    }
    unmount() {
        if (this.footer) this.footer.destroy();
    }
}
