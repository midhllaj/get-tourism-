import Footer from '../components/Footer.js';
import gsap from 'gsap';

export default class Services {
    async mount(container) {
        container.innerHTML = `
            <div class="services-page-new page-container">
                <div class="services-header">
                    <h1>Our Services</h1>
                </div>

                <div class="services-tiles-container">
                    <div class="service-tile">
                        <div class="tile-image-wrapper">
                            <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80" alt="Visit Visa" class="tile-image" />
                        </div>
                        <div class="tile-content">
                            <h3>Visit Visa</h3>
                        </div>
                    </div>

                    <div class="service-tile">
                        <div class="tile-image-wrapper">
                            <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80" alt="Tour Packages" class="tile-image" />
                        </div>
                        <div class="tile-content">
                            <h3>Tour Packages</h3>
                        </div>
                    </div>

                    <div class="service-tile">
                        <div class="tile-image-wrapper">
                            <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80" alt="Flight Tickets" class="tile-image" />
                        </div>
                        <div class="tile-content">
                            <h3>Flight Tickets</h3>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Inject Styles
        const style = document.createElement('style');
        style.textContent = `
            .services-page-new {
                min-height: 100vh;
                background-color: #f5f5f5;
                background-image: radial-gradient(#d1d5db 1px, transparent 1px);
                background-size: 20px 20px;
                padding: 120px 40px 80px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .services-header {
                text-align: center;
                margin-bottom: 80px;
            }

            .services-header h1 {
                font-size: 3.5rem;
                font-weight: 700;
                color: #1a1a1a;
                margin: 0;
                font-family: "Montserrat", sans-serif;
                letter-spacing: -1px;
            }

            .services-tiles-container {
                display: flex;
                gap: 40px;
                justify-content: center;
                flex-wrap: wrap;
                max-width: 1000px;
            }

            .service-tile {
                width: 280px;
                height: 280px;
                position: relative;
                overflow: hidden;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                cursor: pointer;
                background: #f8f8f8;
            }

            .tile-image-wrapper {
                width: 100%;
                height: 100%;
                overflow: hidden;
                position: relative;
            }

            .tile-image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: none !important;
                transform: none !important;
            }

            .service-tile:hover .tile-image {
                transform: none !important;
            }

            .tile-content {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                padding: 30px 20px;
                background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.3) 70%, transparent 100%);
            }

            .tile-content h3 {
                color: #ffffff;
                font-size: 1.5rem;
                font-weight: 600;
                margin: 0;
                font-family: "Montserrat", sans-serif;
                letter-spacing: 0.5px;
            }

            @media (max-width: 968px) {
                .services-tiles-container {
                    gap: 30px;
                }

                .service-tile {
                    width: 240px;
                    height: 240px;
                }

                .services-header h1 {
                    font-size: 2.5rem;
                }
            }

            @media (max-width: 768px) {
                .services-page-new {
                    padding: 100px 20px 60px;
                }

                .services-header {
                    margin-bottom: 50px;
                }

                .services-tiles-container {
                    flex-direction: column;
                    align-items: center;
                    gap: 25px;
                }

                .service-tile {
                    width: 90%;
                    max-width: 320px;
                    height: 280px;
                }

                .services-header h1 {
                    font-size: 2rem;
                }
            }
        `;
        document.head.appendChild(style);

        // Mount Footer
        this.footer = new Footer();
        this.footer.mount(container, { type: 'fixed' });

        // Entrance Animations
        gsap.from('.services-header h1', {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.2
        });


    }

    unmount() {
        if (this.footer) this.footer.destroy();

        // Remove injected styles
        const styles = document.querySelectorAll('style');
        styles.forEach(style => {
            if (style.textContent.includes('.services-page-new')) {
                style.remove();
            }
        });
    }
}
