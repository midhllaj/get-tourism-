import { getCountry } from '../data/countries.js';
import Footer from '../components/Footer.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default class CountryDetail {
    constructor(params) {
        this.params = params;
        this.data = getCountry(params.id || 'dubai');
        this.selectedIndex = 0;
    }

    async mount(container) {
        if (!this.data) {
            container.innerHTML = `<div class="container section flex-center"><h1>Country Not Found</h1></div>`;
            return;
        }

        // Combine highlights and activities for the list
        const allItems = [
            ...(this.data.highlights || []),
            ...(this.data.activities || [])
        ];

        container.innerHTML = `
            <div class="country-page">
                <section class="country-hero">
                    <div class="hero-bg">
                        <img src="${this.data.heroImage}" alt="${this.data.name}" />
                        <div class="overlay"></div>
                    </div>
                    <div class="hero-content">
                         <h2 class="fade-in">Destination</h2>
                         <h1 class="hero-title fade-in" style="animation-delay: 0.2s">${this.data.name}</h1>
                         <p class="hero-tagline fade-in" style="animation-delay: 0.4s">${this.data.tagline}</p>
                    </div>
                </section>
                
                <section class="smooth-scroll-section">
                    <div class="content-wrapper">
                        <div class="pinned-image" id="pinned-image">
                            <img src="${allItems[0]?.image || this.data.heroImage}" alt="${allItems[0]?.title || this.data.name}" />
                        </div>
                        <div class="text-column">
                            <p>${this.data.description}</p>
                        </div>
                        <div class="text-column text-column-small">
                            <p>${this.data.whyUs || 'Discover unforgettable experiences with personalized service and exclusive access to the best attractions.'}</p>
                        </div>
                    </div>

                    <div class="destinations-list">
                        ${allItems.map((item, index) => `
                            <div class="destination-item" data-index="${index}">
                                <h2>${item.title}</h2>
                            </div>
                        `).join('')}
                    </div>
                </section>
            </div>
            <style>
                .country-page {
                    min-height: 100vh;
                    background: #fff;
                }

                /* Hero Section */
                .country-hero {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    color: white;
                    text-align: center;
                }

                .hero-bg {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                }

                .hero-bg img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .hero-bg .overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.4);
                }

                .hero-content {
                    position: relative;
                    z-index: 1;
                }

                .hero-tagline {
                    font-size: 1.5rem;
                    margin-top: 1rem;
                    color: var(--gold);
                    font-family: "Instrument Serif", serif;
                    font-style: italic;
                }

                /* Smooth Scroll Section */
                .smooth-scroll-section {
                    position: relative;
                    padding: 10% 10% 20%;
                    color: #1a1a1a;
                    background: #fff;
                    min-height: 200vh;
                }

                .content-wrapper {
                    display: flex;
                    justify-content: space-between;
                    gap: 5%;
                    height: 700px;
                    margin-bottom: 100px;
                }

                .pinned-image {
                    position: relative;
                    width: 40%;
                    height: 100%;
                    overflow: hidden;
                    border-radius: 12px;
                }

                .pinned-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: opacity 0.3s ease;
                }

                .text-column {
                    display: flex;
                    width: 20%;
                    height: 100%;
                    font-size: clamp(14px, 1.6vw, 24px);
                    line-height: 1.6;
                    align-items: flex-start;
                }

                .text-column-small {
                    font-size: clamp(12px, 1vw, 18px);
                    opacity: 0.8;
                    align-items: flex-end;
                }

                /* Destinations List */
                .destinations-list {
                    display: flex;
                    flex-direction: column;
                }

                .destination-item {
                    width: 100%;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
                    display: flex;
                    justify-content: flex-end;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .destination-item:hover {
                    opacity: 0.6;
                    padding-right: 20px;
                }

                .destination-item h2 {
                    margin: 40px 0 20px;
                    color: #1a1a1a;
                    text-transform: uppercase;
                    font-size: clamp(24px, 3vw, 60px);
                    font-family: "Instrument Serif", serif;
                    font-weight: 400;
                    cursor: pointer;
                }

                /* Responsive Design */
                @media (max-width: 1000px) {
                    .smooth-scroll-section {
                        padding: 10%;
                        min-height: auto;
                    }
                    
                    .content-wrapper {
                        flex-direction: column;
                        height: auto;
                    }

                    .pinned-image,
                    .text-column {
                        width: 100%;
                        margin-bottom: 2rem;
                    }

                    .text-column,
                    .text-column-small {
                        font-size: 1rem;
                        align-items: flex-start;
                    }

                    .destination-item {
                        justify-content: flex-start;
                    }

                    .destination-item:hover {
                        padding-left: 20px;
                        padding-right: 0;
                    }

                    .destination-item h2 {
                        font-size: 8vw;
                    }
                }
            </style>
        `;

        // Initialize GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Store references
        this.imageContainer = container.querySelector('#pinned-image');
        const scrollSection = container.querySelector('.smooth-scroll-section');

        // Create pin trigger for image
        this.pinTrigger = ScrollTrigger.create({
            trigger: this.imageContainer,
            pin: true,
            start: "top 100px",
            end: () => `+=${scrollSection.offsetHeight - 800}`,
            pinSpacing: false
        });

        // Add hover listeners for image switching
        const destinationItems = container.querySelectorAll('.destination-item');
        destinationItems.forEach((item) => {
            item.addEventListener('mouseenter', () => {
                const index = parseInt(item.dataset.index);
                this.changeImage(index, allItems);
            });
        });

        // Mount Footer
        this.footer = new Footer();
        this.footer.mount(document.body, { type: 'reveal' });
    }

    changeImage(index, items) {
        if (this.selectedIndex === index) return;
        this.selectedIndex = index;

        const img = this.imageContainer.querySelector('img');
        const newSrc = items[index]?.image || this.data.heroImage;

        // Smooth image transition
        gsap.to(img, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                img.src = newSrc;
                gsap.to(img, { opacity: 1, duration: 0.3 });
            }
        });
    }

    unmount() {
        if (this.pinTrigger) this.pinTrigger.kill();
        ScrollTrigger.getAll().forEach(t => t.kill());
        if (this.footer) this.footer.destroy();
    }
}
