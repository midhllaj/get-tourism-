import { countries } from '../data/countries.js';
import gsap from 'gsap';

export default class Destinations {
    async mount(container) {
        container.innerHTML = `
            <div class="destinations-page" style="position: relative; z-index: 2; min-height: 80vh;">
                <!-- Content Emptied -->
            </div>
        `;
    }
    unmount() {
    }
}
