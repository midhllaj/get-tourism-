export default class Footer {
    constructor() {
        this.html = `
            <footer class="footer">
                <div class="footer-content">
                    <div class="footer-top">
                        <div class="footer-left">
                            <h2>Great Escapes Tourism</h2>
                            <p>Turn your journey into a memory of a lifetime.</p>
                        </div>
                        <div class="footer-nav">
                            <div class="link-col">
                                <h4>Explore</h4>
                                <a href="#/">Home</a>
                                <a href="#/destinations">Destinations</a>
                                <a href="#/services">Services</a>
                            </div>
                            <div class="link-col">
                                <h4>Company</h4>
                                <a href="#/about">About Us</a>
                                <a href="#/contact">Contact</a>
                                <a href="#">Careers</a>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2026 Great Escapes Tourism. All rights reserved.</p>
                        <div class="footer-socials">
                            <a href="#">Instagram</a>
                            <a href="#">LinkedIn</a>
                            <a href="#">Twitter</a>
                        </div>
                    </div>
                    <div class="footer-credits">MADE BY STARSHAPE.IN</div>
                </div>
            </footer>
        `;
    }

    mount(container, options = {}) {
        // Append footer HTML to the container
        const footerTemplate = document.createElement('div');
        footerTemplate.innerHTML = this.html.trim();
        const footerElement = footerTemplate.firstChild;

        // Apply appropriate classes based on type
        if (options.type === 'fixed') {
            footerElement.classList.add('fixed-footer');
        } else if (options.type === 'reveal') {
            footerElement.classList.add('reveal-footer');
            // For reveal effect, add padding to main content to ensure footer can reveal
            this.addRevealPadding(container);
        }

        container.appendChild(footerElement);

        // Only call initStickyFooter for non-reveal footers
        if (options.type !== 'reveal' && options.type !== 'fixed') {
            this.initStickyFooter(container);
        }
    }

    addRevealPadding(container) {
        // Add padding to the main content wrapper to allow footer to reveal
        // This ensures there's enough scroll distance for the footer to show
        const mainContent = container.querySelector('.main-content') ||
            container.querySelector('.services-page') ||
            container.querySelector('.about-page') ||
            container.querySelector('.contact-page') ||
            container.querySelector('.destinations-page');

        if (mainContent) {
            mainContent.style.position = 'relative';
            mainContent.style.zIndex = '10';
            mainContent.style.backgroundColor = '#fff';
            // Add padding equal to footer height (approximately 300px)
            mainContent.style.paddingBottom = '300px';
        }
    }

    initStickyFooter(container) {
        const updateMargin = () => {
            const footer = container.querySelector('.footer');
            // Try to find a main content wrapper to apply margin-bottom
            const mainContent = container.querySelector('.main-content') ||
                container.querySelector('.about-page') ||
                container.querySelector('.contact-page') ||
                container.querySelector('.destinations-page') ||
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
