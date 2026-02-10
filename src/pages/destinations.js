import Footer from '../components/Footer.js';
import gsap from 'gsap';

export default class Destinations {
    async mount(container) {
        container.innerHTML = `
            <div class="page-container destinations-page">
                <section class="hero-subpage">
                    <img src="/assets/tour%20packages.jpg" alt="Destinations" />
                    <h1>Destinations</h1>
                </section>

                <div class="content-section">
                    <h2>World-Class Travel</h2>
                    <p>
                        Discover our curated list of destinations. From the futuristic skyline of Dubai to the 
                        cultural treasures of Europe, we bring you the best the world has to offer.
                    </p>
                    <p>
                        Explore our exclusive packages designed for luxury and comfort. Whether you're looking for 
                        beach resorts, mountain escapes, or city tours, we have the perfect destination for you.
                    </p>
                </div>

                <div class="content-section">
                    <h2>Middle East Adventures</h2>
                    <p>
                        Experience the magic of the Middle East with our specially designed tours to Dubai, Abu Dhabi, and beyond. 
                        Marvel at architectural wonders, shop in world-class malls, and immerse yourself in rich cultural heritage.
                    </p>
                    <p>
                        From desert safaris to luxury yacht cruises, the Middle East offers endless opportunities for adventure 
                        and relaxation in equal measure.
                    </p>
                </div>

                <div class="content-section">
                    <h2>European Escapes</h2>
                    <p>
                        Journey through the romantic streets of Paris, the historic landmarks of Rome, or the vibrant nightlife 
                        of Barcelona. Our European tours are crafted to showcase the continent's diverse beauty and timeless charm.
                    </p>
                    <p>
                        Whether you're seeking art and culture, culinary delights, or scenic countryside, Europe has something 
                        special waiting for every traveler.
                    </p>
                </div>

                <div class="content-section">
                    <h2>Tropical Paradises</h2>
                    <p>
                        Escape to the pristine beaches of the Maldives, Seychelles, or Mauritius. Our tropical destinations offer 
                        the perfect blend of relaxation and adventure, with crystal-clear waters and world-class resorts.
                    </p>
                    <p>
                        Dive into vibrant coral reefs, indulge in spa treatments, or simply unwind with a cocktail as you watch 
                        the sunset over the Indian Ocean.
                    </p>
                </div>
                <div class="content-section">
                    <h2>Kerala: God's Own Country</h2>
                    <p>
                        Discover the serene backwaters, lush hill stations, and pristine beaches of Kerala. Often called 
                        "God's Own Country," this tropical paradise in India offers a unique blend of nature, culture, and wellness.
                    </p>
                    <p>
                        Experience a houseboat cruise in Alleppey, explore the tea gardens of Munnar, or rejuvenate with 
                        authentic Ayurveda treatments. Kerala promises a journey of tranquility and beauty.
                    </p>
                </div>

                <div class="content-section">
                    <h2>Dubai: The City of Gold</h2>
                    <p>
                        Step into the future with a visit to Dubai, a city that redefines luxury and innovation. From the 
                        soaring heights of the Burj Khalifa to the man-made wonder of Palm Jumeirah, Dubai is a marvel of modern engineering.
                    </p>
                    <p>
                        Indulge in world-class shopping, thrilling desert safaris, and exquisite dining experiences. Whether 
                        you seek adventure or relaxation, Dubai offers an unforgettable escape.
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

        gsap.from('.content-section > *', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            delay: 0.3
        });
    }

    unmount() {
        if (this.footer) this.footer.destroy();
    }
}

