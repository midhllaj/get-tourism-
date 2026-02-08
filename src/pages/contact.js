import gsap from 'gsap';

export default class Contact {
    async mount(container) {
        container.innerHTML = `
            <div class="contact-page" style="position: relative; z-index: 2; min-height: 80vh;">
                <!-- Content Emptied -->
            </div>
        `;
    }
    unmount() {
    }
}
