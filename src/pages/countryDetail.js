import { getCountry } from '../data/countries.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
            <div class="country-page" style="position: relative; z-index: 2; min-height: 80vh;">
                <!-- Content Emptied -->
            </div>
        `;
    }

    unmount() {
        ScrollTrigger.getAll().forEach(t => t.kill());
    }
}
