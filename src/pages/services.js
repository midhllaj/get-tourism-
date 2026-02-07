import Footer from '../components/Footer.js';
import Globe from '../components/Globe.js';

export default class Services {
    async mount(container) {
        container.innerHTML = `
            <div class="globe-container" style="width: 100%; height: 100vh; position: relative; overflow: hidden; z-index: 2;">
                <div style="position: absolute; top: 100px; left: 50px; z-index: 10;">
                    <h1>Global Presence</h1>
                    <p style="max-width: 400px; margin-top: 1rem; opacity: 0.8;">
                        Exploring the world has never been easier. Spin the globe to find your next destination.
                        <br><br>
                        <span style="color: var(--emerald);">●</span> Interactive 3D Experience
                    </p>
                </div>
            </div>
        `;

        const globeContainer = container.querySelector('.globe-container');
        this.globe = new Globe(globeContainer);

        this.footer = new Footer();
        this.footer.mount(container, { type: 'sticky' });
    }

    unmount() {
        if (this.footer) {
            this.footer.destroy();
        }
        if (this.globe) {
            this.globe.destroy();
        }
    }
}
