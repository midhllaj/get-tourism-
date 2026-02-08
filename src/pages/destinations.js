import { countries } from '../data/countries.js';
import gsap from 'gsap';

export default class Destinations {
    async mount(container) {
        const countriesList = Object.values(countries);

        container.innerHTML = `
            <div class="destinations-page">
                <!-- Hero Section -->
                <section class="page-hero" style="position: relative; height: 60vh; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                    <div class="hero-bg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;">
                        <img src="/assets/tour-package.png" alt="Tour Packages" style="width: 100%; height: 100%; object-fit: cover;">
                        <div class="overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.4);"></div>
                    </div>
                    <div class="hero-content text-center" style="position: relative; z-index: 2; color: white;">
                        <h1 style="font-family: 'Instrument Serif', serif; font-size: 5rem; text-shadow: 0 4px 10px rgba(0,0,0,0.5);">Tour Packages</h1>
                    </div>
                </section>

                <!-- Intro Section -->
                <section class="intro-section" style="background: #fff; color: #1a1a1a; padding: 6rem 2rem; text-align: center;">
                    <div class="container" style="max-width: 800px; margin: 0 auto;">
                        <h2 style="font-family: 'Instrument Serif', serif; font-size: 3.5rem; margin-bottom: 1.5rem;">Our Destinations</h2>
                        <p style="font-size: 1.1rem; line-height: 1.8; color: #555; font-family: 'Inter', sans-serif;">
                            Experience the essence of each destination through our meticulously designed tour packages. Explore the iconic attractions while also delving into the hidden gems that make each place truly special. Whether it’s a Dubai city tour with all excursions or a journey to the exotic landscapes of Kerala, our packages ensure a holistic and immersive travel experience.
                        </p>
                    </div>
                </section>
                
                <!-- Destinations Grid -->
                <section class="destinations-grid-section" style="background: #fff; padding: 0 2rem 6rem;">
                    <div class="container" style="max-width: 1400px; margin: 0 auto;">
                        <div class="grid">
                            ${countriesList.map(country => `
                                <a href="#/country/${country.id}" class="destination-card" data-continent="${country.continent || 'World'}" data-link>
                                    <div class="card-image">
                                        <img src="${country.heroImage}" alt="${country.name}">
                                        <div class="card-overlay"></div>
                                    </div>
                                    <div class="card-content">
                                        <h3>${country.name}</h3>
                                        <span class="explore-btn">Explore</span>
                                    </div>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                </section>
            </div>
            <style>
                .grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                }
                @media (max-width: 1024px) {
                    .grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 768px) {
                    .grid { grid-template-columns: 1fr; }
                }

                .destination-card {
                    display: block;
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    height: 400px;
                    text-decoration: none;
                }

                .card-image {
                    width: 100%;
                    height: 100%;
                    position: relative;
                }

                .card-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s ease;
                }

                .card-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 50%;
                    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
                    transition: opacity 0.3s ease;
                }

                .destination-card:hover .card-image img {
                    transform: scale(1.05);
                }

                .card-content {
                    position: absolute;
                    bottom: 30px;
                    left: 30px;
                    z-index: 2;
                    color: white;
                }

                .card-content h3 {
                    font-family: 'Instrument Serif', serif;
                    font-size: 2.5rem;
                    margin-bottom: 0.5rem;
                }

                .explore-btn {
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    border: 1px solid rgba(255,255,255,0.6);
                    padding: 8px 20px;
                    border-radius: 30px;
                    transition: all 0.3s ease;
                    background: rgba(255,255,255,0.1);
                    backdrop-filter: blur(5px);
                }

                .destination-card:hover .explore-btn {
                    background: white;
                    color: black;
                }
                
                /* Override global section styles */
                .intro-section, .destinations-grid-section {
                    height: auto !important;
                    overflow: visible !important;
                }
            </style>
        `;

        // Animation
        gsap.from('.page-hero h1', { opacity: 0, y: 30, duration: 1, delay: 0.2 });
        gsap.from('.intro-section', { opacity: 0, y: 30, duration: 1, delay: 0.4, scrollTrigger: '.intro-section' });
        gsap.from('.destination-card', {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.grid',
                start: 'top 80%'
            }
        });
    }
    unmount() { }
}
