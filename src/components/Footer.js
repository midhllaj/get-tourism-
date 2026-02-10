import CircularText from './CircularText.js';

export default class Footer {
    constructor() {
        this.html = `
            <footer class="footer">
                <div class="footer-content">
                    <div class="footer-top">
                        <div class="footer-left">
                            <img src="/assets/get logo.png" alt="Great Escapes Tourism" class="footer-logo" />
                        </div>
                        <div class="footer-nav">
                            <a href="#/">Home</a>
                            <a href="#/destinations">Destinations</a>
                            <a href="#/services">Services</a>
                            <a href="#/about">About Us</a>
                            <a href="#/contact">Contact</a>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <div class="footer-bottom-left">
                            <p>&copy; 2026 Great Escapes Tourism. All rights reserved.</p>
                        </div>
                        <div class="footer-credits">MADE BY STARSHAPE.IN</div>
                        <div class="footer-bottom-right">
                            <div class="footer-socials">
                                <a href="#">Instagram</a>
                                <a href="#">LinkedIn</a>
                                <a href="#">Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }

    mount(container, options = {}) {
        // Append footer HTML to the container
        const footerTemplate = document.createElement('div');
        footerTemplate.innerHTML = this.html.trim();
        const footerElement = footerTemplate.firstChild;

        // Default to fixed positioning for parallax effect
        const footerType = options.type || 'fixed';
        footerElement.classList.add(`${footerType}-footer`);

        container.appendChild(footerElement);

        // Mount CircularText
        const creditsElement = footerElement.querySelector('.footer-credits');
        if (creditsElement) {
            creditsElement.innerHTML = '';
            new CircularText({
                text: 'MADE BY STARSHAPE .IN',
                onHover: 'speedUp',
                spinDuration: 20
            }).mount(creditsElement);
        }

        if (footerType !== 'relative') {
            this.initStickyFooter(container);
        }
    }

    initStickyFooter(container) {
        const updateMargin = () => {
            const footer = container.querySelector('.footer');
            // Try to find a main content wrapper to apply margin-bottom
            const mainContent = container.querySelector('.main-content') ||
                container.querySelector('.page-container') ||
                container.querySelector('.globe-container');

            if (footer && mainContent) {
                const footerHeight = footer.offsetHeight;
                mainContent.style.marginBottom = `${footerHeight}px`;
            }
        };

        // Initial update
        updateMargin();

        // Use ResizeObserver for more robust height tracking if available
        if (window.ResizeObserver) {
            const footer = container.querySelector('.footer');
            if (footer) {
                this.resizeObserver = new ResizeObserver(() => updateMargin());
                this.resizeObserver.observe(footer);
            }
        } else {
            window.addEventListener('resize', updateMargin);
            this.resizeHandler = updateMargin;
        }

        // Also run on a small delay to catch late layout shifts
        setTimeout(updateMargin, 100);
    }

    destroy() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        } else if (this.resizeHandler) {
            window.removeEventListener('resize', this.resizeHandler);
        }
    }
}
