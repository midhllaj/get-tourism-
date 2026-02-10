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

        // Combine highlights and activities, removing duplicates
        const highlights = this.data.highlights || [];
        const activities = this.data.activities || [];

        const allItems = [
            ...highlights,
            ...activities
        ].filter((item, index, self) =>
            index === self.findIndex((t) => (
                t.title === item.title
            ))
        );

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
                    </div>
                    <div class="content-wrapper" style="margin-top: -390px;">
                        <div style="width: 40%;"></div>
                        <div class="text-column text-column-small" style="flex-direction: column; align-items: flex-start; width: 55%;">
                            <h2 style="font-family: 'Instrument Serif', serif; font-size: 1.5rem; color: #1a1a1a; margin-bottom: 0.5rem;">Why Us</h2>
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

                <section class="contact-section">
                    <div class="contact-content">
                        <h2>Contact for more details</h2>
                        <a href="/contact" class="contact-btn">Enquire Now</a>
                    </div>
                </section>
            </div>
            <link rel="stylesheet" href="/countryDetail.css" />
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
            endTrigger: scrollSection,
            end: "bottom bottom",
            pinSpacing: false
        });

        // Add hover and touch listeners for image switching
        const destinationItems = container.querySelectorAll('.destination-item');
        destinationItems.forEach((item) => {
            const handleInteraction = () => {
                const index = parseInt(item.dataset.index);
                this.changeImage(index, allItems);
            };

            // Support both mouse and touch interactions
            item.addEventListener('mouseenter', handleInteraction);
            item.addEventListener('click', handleInteraction);
            item.addEventListener('touchstart', handleInteraction, { passive: true });
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
