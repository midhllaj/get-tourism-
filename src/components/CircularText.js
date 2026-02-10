import './CircularText.css';

export default class CircularText {
    constructor({ text, spinDuration = 20, onHover = 'speedUp', className = '' } = {}) {
        this.text = text || 'MADE BY STARSHAPE .IN';
        this.spinDuration = spinDuration;
        this.onHover = onHover; // 'speedUp', 'slowDown', 'pause', 'goBonkers'
        this.className = className;
        this.element = null;
    }

    mount(container) {
        this.element = document.createElement('div');
        this.element.className = `circular-text-container ${this.className}`;

        const innerCircle = document.createElement('div');
        innerCircle.className = 'circular-text';
        innerCircle.style.animationDuration = `${this.spinDuration}s`;

        const letters = Array.from(this.text);
        const radius = 35; // Increased radius for larger circle

        letters.forEach((letter, i) => {
            const span = document.createElement('span');
            span.innerText = letter;
            const angle = (360 / letters.length) * i;
            // Rotate then translate outwards
            // We use -50% -50% on the span itself (via transform-origin/position) to center it
            // but here we just rely on transform.
            // translate(-50%, -50%) is not needed if we center via left:50% top:50% and transform-origin: center center?
            // Actually, best way: rotate(angle) translate(0, -radius) rotated text upright along the circle
            span.style.transform = `rotate(${angle}deg) translateY(-${radius}px)`;

            // Adjust for visual centering of the character itself if needed
            // But typically this is enough for "spoke" alignment

            innerCircle.appendChild(span);
        });

        this.element.appendChild(innerCircle);
        container.appendChild(this.element);

        this.addHoverEffects(innerCircle);
    }

    addHoverEffects(element) {
        if (!this.onHover) return;

        this.element.addEventListener('mouseenter', () => {
            switch (this.onHover) {
                case 'slowDown':
                    element.style.animationDuration = `${this.spinDuration * 2}s`;
                    break;
                case 'speedUp':
                    element.style.animationDuration = `${this.spinDuration / 4}s`;
                    break;
                case 'pause':
                    element.style.animationPlayState = 'paused';
                    break;
                case 'goBonkers':
                    element.style.animationDuration = `${this.spinDuration / 20}s`;
                    break;
            }
        });

        this.element.addEventListener('mouseleave', () => {
            // Reset
            element.style.animationDuration = `${this.spinDuration}s`;
            element.style.animationPlayState = 'running';
        });
    }
}
