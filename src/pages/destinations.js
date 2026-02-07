import Footer from '../components/Footer.js';
import { countries } from '../data/countries.js';
import gsap from 'gsap';

export default class Destinations {
    async mount(container) {
        container.innerHTML = `
            <div class="destinations-page" style="position: relative; z-index: 2;">
                <section class="page-header section flex-center">
                    <div class="text-center">
                        <h1 class="fade-in">Our Destinations</h1>
                        <p class="fade-in" style="animation-delay: 0.2s; margin-top: 1rem; opacity: 0.7;">Explore our curated selection of global wonders.</p>
                    </div>
                </section>
                
                <section class="destinations-grid container section">
                    <div class="grid">
                        ${Object.values(countries).map(country => `
                            <a href="#/country/${country.id}" class="destination-card" data-link>
                                <div class="card-image">
                                    <img src="${country.heroImage}" alt="${country.name}">
                                </div>
                                <div class="card-content">
                                    <h3>${country.name}</h3>
                                    <p>${country.tagline}</p>
                                    <span class="explore-btn">Explore &rarr;</span>
                                </div>
                            </a>
                        `).join('')}
                    </div>
                </section>
            </div>
            <style>
                .page-header {
                    height: 50vh;
                    background: linear-gradient(to bottom, #000, #111);
                }
                .grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 2rem;
                    padding-bottom: 5rem;
                }
                .destination-card {
                    display: block;
                    background: var(--surface);
                    border-radius: 8px;
                    overflow: hidden;
                    transition: transform 0.3s ease;
                    border: 1px solid var(--glass-border);
                    text-decoration: none;
                }
                .destination-card:hover {
                    transform: translateY(-10px);
                }
                .card-image {
                    height: 250px;
                    overflow: hidden;
                }
                .card-image img {
                    transition: transform 0.5s ease;
                }
                .destination-card:hover .card-image img {
                    transform: scale(1.1);
                }
                .card-content {
                    padding: 1.5rem;
                    color: var(--text-color);
                }
                .card-content h3 {
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                }
                .card-content p {
                    font-size: 0.9rem;
                    opacity: 0.7;
                    margin-bottom: 1rem;
                    font-family: "Inter", sans-serif;
                }
                .explore-btn {
                    color: var(--gold);
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
            </style>
        `;

        // Stagger Animation
        gsap.from('.destination-card', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.grid',
                start: 'top 80%'
            }
        });
        this.footer = new Footer();
        this.footer.mount(container, { type: 'sticky' });
    }
    unmount() {
        if (this.footer) this.footer.destroy();
    }
}
