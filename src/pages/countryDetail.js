import { getCountry } from '../data/countries.js';
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
                
                <section class="country-info section container" style="height: auto; min-height: 100vh; overflow: visible;">
                    <div class="info-grid">
                        <div class="info-text">
                            <h3 class="section-title">Overview</h3>
                            <p>${this.data.description}</p>
                            <button class="enquire-btn" style="background: var(--gold); color: black; margin-top: 2rem;">Book This Trip</button>
                        </div>
                        <div class="info-highlights">
                            <h3 class="section-title">Highlights</h3>
                            <div class="highlights-grid">
                                ${this.data.highlights.map(h => `
                                    <div class="highlight-card">
                                        ${h.image ? `<img src="${h.image}" alt="${h.title}" loading="lazy" />` : ''}
                                        <div class="highlight-content">
                                            <strong>${h.title}</strong>
                                            <span>${h.desc}</span>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    ${this.data.whyUs ? `
                        <div class="why-us-section" style="margin-top: 6rem; text-align: center; max-width: 800px; margin-left: auto; margin-right: auto;">
                            <h3 class="section-title">Why Choose Us?</h3>
                            <p style="font-size: 1.1rem; line-height: 1.8; opacity: 0.9;">${this.data.whyUs}</p>
                        </div>
                    ` : ''}

                    ${this.data.activities ? `
                        <div class="activities-section" style="margin-top: 8rem;">
                            <h3 class="section-title" style="text-align: center; margin-bottom: 3rem;">Unforgettable Activities</h3>
                            <div class="activities-grid">
                                ${this.data.activities.map((act, index) => `
                                    <div class="activity-card glass">
                                        <div class="activity-image">
                                            <img src="${act.image}" alt="${act.title}" loading="lazy" />
                                        </div>
                                        <div class="activity-details">
                                            <h4>${act.title}</h4>
                                            <p>${act.desc}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                </section>
            </div>
            <style>
                .section-title {
                    font-family: "Instrument Serif", serif;
                    font-size: 2rem;
                    color: var(--gold);
                    margin-bottom: 1.5rem;
                }
                .country-hero {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    text-align: center;
                    min-height: 80vh;
                }
                .hero-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                }
                .hero-bg img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
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
                
                /* Highlights Styling */
                .highlights-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                }
                .highlight-card {
                    background: rgba(255,255,255,0.05);
                    border: 1px solid var(--glass-border);
                    border-radius: 12px;
                    overflow: hidden;
                    transition: transform 0.3s ease;
                }
                .highlight-card:hover {
                    transform: translateY(-5px);
                }
                .highlight-card img {
                    width: 100%;
                    height: 150px;
                    object-fit: cover;
                }
                .highlight-content {
                    padding: 1rem;
                }
                .highlight-content strong {
                    display: block;
                    color: var(--gold);
                    margin-bottom: 0.5rem;
                    font-size: 1.1rem;
                }

                /* Activities Styling */
                .activities-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 2rem;
                }
                .activity-card {
                    overflow: hidden;
                    border-radius: 16px;
                    background: #111;
                    height: 100%;
                }
                .activity-image {
                    height: 250px;
                    overflow: hidden;
                }
                .activity-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                .activity-card:hover .activity-image img {
                    transform: scale(1.1);
                }
                .activity-details {
                    padding: 1.5rem;
                }
                .activity-details h4 {
                    color: var(--gold);
                    font-size: 1.3rem;
                    font-family: "Instrument Serif", serif;
                    margin-bottom: 0.5rem;
                }
                .activity-details p {
                    color: #ccc;
                    font-size: 0.95rem;
                }

                @media(max-width: 768px) {
                    .info-grid {
                        grid-template-columns: 1fr;
                    }
                    .activities-grid {
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

        gsap.from('.highlight-card', {
            scrollTrigger: {
                trigger: '.info-highlights',
                start: 'top 80%'
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1
        });

        if (this.data.whyUs) {
            gsap.from('.why-us-section', {
                scrollTrigger: {
                    trigger: '.why-us-section',
                    start: 'top 80%'
                },
                y: 50,
                opacity: 0,
                duration: 1
            });
        }

        if (this.data.activities) {
            gsap.from('.activity-card', {
                scrollTrigger: {
                    trigger: '.activities-grid',
                    start: 'top 85%'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15
            });
        }
    }

    unmount() {
        ScrollTrigger.getAll().forEach(t => t.kill());
    }
}
