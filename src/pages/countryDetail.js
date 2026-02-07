import { getCountry } from '../data/countries.js';
import Footer from '../components/Footer.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default class CountryDetail {
    constructor(params) {
        this.params = params;
        this.data = getCountry(params.id || 'dubai');
    }

    async mount(container) {
        if (!this.data) {
            container.innerHTML = `<div class="container section flex-center"><h1>Country Not Found</h1></div>`;
            return;
        }

        container.innerHTML = `
            <div class="country-page">
                <section class="country-hero section">
                    <div class="hero-bg">
                        <img src="${this.data.heroImage}" alt="${this.data.name}" />
                        <div class="overlay"></div>
                    </div>
                    <div class="country-hero-content container">
                         <h2 class="fade-in">Destination</h2>
                         <h1 class="hero-title fade-in" style="animation-delay: 0.2s">${this.data.name}</h1>
                         <p class="hero-tagline fade-in" style="animation-delay: 0.4s">${this.data.tagline}</p>
                    </div>
                </section>
                
                <section class="country-info section container">
                    <div class="info-grid">
                        <div class="info-text">
                            <h3>Overview</h3>
                            <p>${this.data.description}</p>
                            <button class="enquire-btn" style="background: var(--gold); color: black; margin-top: 2rem;">Book This Trip</button>
                        </div>
                        <div class="info-highlights">
                            <h3>Highlights</h3>
                            <ul>
                                ${this.data.highlights.map(h => `
                                    <li>
                                        <strong>${h.title}</strong>
                                        <span>${h.desc}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <style>
                .country-page {
                    position: relative;
                    z-index: 2;
                }
                .country-hero {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    text-align: center;
                }
                .hero-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                }
                .hero-bg .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.4);
                }
                .hero-tagline {
                    font-size: 1.5rem;
                    margin-top: 1rem;
                    color: var(--gold);
                    font-family: "Instrument Serif", serif;
                    font-style: italic;
                }
                .info-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    margin-top: 5rem;
                }
                .info-highlights ul {
                    list-style: none;
                    margin-top: 1rem;
                }
                .info-highlights li {
                    border-bottom: 1px solid var(--glass-border);
                    padding: 1rem 0;
                }
                .info-highlights strong {
                    display: block;
                    font-size: 1.2rem;
                    color: var(--gold);
                }
                @media(max-width: 768px) {
                    .info-grid {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
        `;

        // Animations
        gsap.from('.info-text', {
            scrollTrigger: {
                trigger: '.country-info',
                start: 'top 70%'
            },
            y: 50,
            opacity: 0,
            duration: 1
        });

        gsap.from('.info-highlights li', {
            scrollTrigger: {
                trigger: '.info-highlights',
                start: 'top 80%'
            },
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1
        });

        this.footer = new Footer();
        this.footer.mount(container, { type: 'sticky' });
    }

    unmount() {
        ScrollTrigger.getAll().forEach(t => t.kill());
        if (this.footer) this.footer.destroy();
    }
}
