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
                
                <section class="smooth-scroll-section">
                    <div class="project-description">
                        <div class="image-container" id="pinned-image">
                            <img src="${allItems[0]?.image || this.data.heroImage}" alt="${allItems[0]?.title || this.data.name}" />
                        </div>
                        <div class="column">
                            <p>${this.data.description}</p>
                        </div>
                        <div class="column column-right">
                            <p>${this.data.whyUs || 'Discover unforgettable experiences with personalized service and exclusive access to the best attractions.'}</p>
                        </div>
                    </div>

                    <div class="project-list">
                        ${allItems.map((item, index) => `
                            <div class="project-el" data-index="${index}">
                                <h2>${item.title}</h2>
                            </div>
                        `).join('')}
                    </div>
                </section>
            </div>
            <style>
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

                .smooth-scroll-section {
                    position: relative;
                    color: white;
                    margin-top: 25vh;
                    padding: 10%;
                    background: #000;
                }

                .project-description {
                    display: flex;
                    height: 700px;
                    justify-content: space-between;
                    gap: 5%;
                }

                .image-container {
                    position: relative;
                    height: 100%;
                    width: 40%;
                    overflow: hidden;
                    border-radius: 12px;
                }

                .image-container img {
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                    transition: opacity 0.3s ease;
                }

                .column {
                    display: flex;
                    height: 100%;
                    width: 20%;
                    font-size: 1.6vw;
                    line-height: 1.6;
                    align-items: flex-start;
                }

                .column-right {
                    align-items: flex-end;
                    font-size: 1vw;
                    opacity: 0.8;
                }

                .project-list {
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    margin-top: 200px;
                }

                .project-el {
                    width: 100%;
                    color: white;
                    text-transform: uppercase;
                    font-size: 3vw;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
                    display: flex;
                    justify-content: flex-end;
                    cursor: pointer;
                    transition: opacity 0.3s;
                }

                .project-el:hover {
                    opacity: 0.6;
                }

                .project-el h2 {
                    margin: 0;
                    margin-top: 40px;
                    margin-bottom: 20px;
                    cursor: default;
                    font-family: "Instrument Serif", serif;
                }

                @media (max-width: 1000px) {
                    .project-description {
                        flex-direction: column;
                        height: auto;
                    }
                    .image-container,
                    .column,
                    .column-right {
                        width: 100%;
                        margin-bottom: 2rem;
                    }
                    .column,
                    .column-right {
                        font-size: 1rem;
                    }
                    .project-el {
                        font-size: 6vw;
                    }
                }
            </style>
        `;

        // Store reference for ScrollTrigger
        this.imageContainer = container.querySelector('#pinned-image');
        const allItemsData = allItems;

        // Initialize GSAP ScrollTrigger for pinning the image
        gsap.registerPlugin(ScrollTrigger);

        this.pinTrigger = ScrollTrigger.create({
            trigger: this.imageContainer,
            pin: true,
            start: "top-=100px",
            end: () => document.body.offsetHeight - window.innerHeight - 50,
        });

        // Add hover listeners to change image
        const projectElements = container.querySelectorAll('.project-el');
        projectElements.forEach((el) => {
            el.addEventListener('mouseenter', () => {
                const index = parseInt(el.dataset.index);
                this.changeImage(index, allItemsData);
            });
        });

        // Mount Footer with reveal effect
        this.footer = new Footer();
        this.footer.mount(document.body, { type: 'reveal' });
    }

    changeImage(index, items) {
        if (this.selectedIndex === index) return;
        this.selectedIndex = index;

        const img = this.imageContainer.querySelector('img');
        const newSrc = items[index]?.image || this.data.heroImage;

        // Animate image change
        gsap.to(img, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                img.src = newSrc;
                gsap.to(img, {
                    opacity: 1,
                    duration: 0.3
                });
            }
        });
    }

    unmount() {
        if (this.pinTrigger) {
            this.pinTrigger.kill();
        }
        ScrollTrigger.getAll().forEach(t => t.kill());
        if (this.footer) {
            this.footer.destroy();
        }
    }
}
