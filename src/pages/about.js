import gsap from 'gsap';

export default class About {
    async mount(container) {
        container.innerHTML = `
            <div class="about-page" style="position: relative; z-index: 2; min-height: 80vh;">
                <!-- Content Emptied -->
            </div>
        `;
    }
    unmount() {
    }
}
