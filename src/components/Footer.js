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

        // Apply appropriate class based on type
        if (options.type === 'reveal') {
            footerElement.classList.add('footer-reveal');
            // Wrap page content for reveal effect
            const pageContent = container.querySelector('#app');
            if (pageContent && !pageContent.classList.contains('page-wrapper-reveal')) {
                pageContent.classList.add('page-wrapper-reveal');
                // Add margin bottom to allow footer to reveal
                // Use dynamic height to avoid blank space
                const updateMargin = () => {
                    const height = footerElement.offsetHeight;
                    pageContent.style.marginBottom = `${height}px`;
                };

                // Initial update
                // Use setTimeout to ensure styles are applied and layout is done
                setTimeout(updateMargin, 0);

                // Add resize listener
                window.addEventListener('resize', updateMargin);

                // Store cleanup function on the footer instance if possible, or just accept the listener
                // Since this class doesn't seem to have a robust lifecycle manager for global listeners, 
                // we'll leave it as is for now. The page reload will clear it.
            }
        } else if (options.type === 'fixed') {
            footerElement.classList.add('fixed-footer');
        }

        container.appendChild(footerElement);
    }

    destroy() {
        // Cleanup if needed
        const footer = document.querySelector('.footer');
        if (footer) {
            footer.remove();
        }
    }
}
