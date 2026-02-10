import Footer from '../components/Footer.js';
import gsap from 'gsap';
import { getCountry } from '../data/countries.js';

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
            <div class="page-container country-page">
                <section class="hero-subpage">
                    <img src="${this.data.image || '/assets/home%20page%20bg.jpg'}" alt="${this.data.name}" />
                    <h1>${this.data.name}</h1>
                </section>

                <div class="content-section">
                    <h2>Explore ${this.data.name}</h2>
                    <p>${this.data.description || 'Experience the beauty and culture of this incredible destination with our luxury travel packages.'}</p>
                </div>

                <div class="content-section">
                    <h2>Top Attractions</h2>
                    <p>
                        Discover the must-see landmarks and hidden gems that make ${this.data.name} a unique destination. 
                        From historical sites to modern marvels, there's something for every type of traveler.
                    </p>
                    <p>
                        Our expert guides will ensure you experience the very best this destination has to offer, with 
                        exclusive access to popular attractions and insider knowledge of local favorites.
                    </p>
                </div>

                <div class="content-section">
                    <h2>Cultural Experiences</h2>
                    <p>
                        Immerse yourself in the local culture with authentic experiences that go beyond typical tourist activities. 
                        From traditional cuisine to cultural performances, we bring you closer to the heart of ${this.data.name}.
                    </p>
                    <p>
                        Participate in local festivals, visit artisan workshops, and engage with communities to gain a deeper 
                        understanding of the destination's rich heritage.
                    </p>
                </div>

                <div class="content-section">
                    <h2>Travel Tips</h2>
                    <p>
                        Planning your trip to ${this.data.name}? Here are some essential tips to make your journey smooth and enjoyable. 
                        From the best time to visit to local customs and etiquette, we've got you covered.
                    </p>
                    <p>
                        Our travel experts are always available to answer your questions and provide personalized recommendations 
                        based on your interests and travel style.
                    </p>
                </div>
            </div>
        `;

        // Mount Footer
        this.footer = new Footer();
        this.footer.mount(container, { type: 'fixed' });

        // Animation
        gsap.from('.hero-subpage h1', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    }

    unmount() {
        if (this.footer) this.footer.destroy();
    }
}

