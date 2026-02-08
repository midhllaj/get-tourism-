import Globe from '../components/Globe.js';

export default class Services {
    async mount(container) {
        container.innerHTML = `
            <div class="services-page" style="position: relative; z-index: 2; min-height: 80vh;">
                <!-- Content Emptied -->
            </div>
        `;
    }

    unmount() {
        if (this.globe) {
            this.globe.destroy();
        }
    }
}
