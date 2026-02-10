import Footer from '../components/Footer.js';
import gsap from 'gsap';

export default class About {
    async mount(container) {
        container.innerHTML = `
            <div class="page-container about-page">
                <section class="hero-subpage">
                    <img src="/assets/home%20page%20bg.jpg" alt="About Us" />
                    <h1>About Us</h1>
                </section>

                <div class="content-section">
                    <h2>Our Story</h2>
                    <p>
                        At Great Escapes Tourism, we believe that travel is not just about visiting places; it's about creating memories, 
                        forming connections, and expanding horizons. Our company was born out of a deep passion for exploring the world 
                        and sharing those experiences with fellow travelers.
                    </p>
                    <p>
                        With years of experience in the travel industry, our team of dedicated professionals works tirelessly to curate 
                        bespoke journeys that cater to your unique preferences and interests. Whether you're seeking a soul-searching solo 
                        retreat, a romantic getaway, or an action-packed family adventure, we have the expertise to make it happen.
                    </p>
                </div>

                <div class="content-section">
                    <h2>Our Mission</h2>
                    <p>
                        We are committed to delivering exceptional travel experiences that go beyond the ordinary. Our mission is to 
                        inspire wanderlust, facilitate meaningful connections, and showcase the beauty and diversity of our planet.
                    </p>
                    <p>
                        Every destination has a story, and we're here to help you discover it. From the bustling streets of Dubai to 
                        the serene beaches of the Maldives, we bring the world closer to you with personalized itineraries and 
                        unparalleled service.
                    </p>
                </div>

                <div class="content-section">
                    <h2>Why Choose Us</h2>
                    <p>
                        <strong>Expert Guidance:</strong> Our travel consultants have extensive knowledge and firsthand experience of the destinations we offer.
                    </p>
                    <p>
                        <strong>Tailored Experiences:</strong> We understand that no two travelers are alike, which is why we customize every trip to match your vision.
                    </p>
                    <p>
                        <strong>24/7 Support:</strong> From the moment you book to the day you return home, we're here to assist you every step of the way.
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

