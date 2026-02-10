import gsap from 'gsap';

export default class FlightLoader {
    constructor() {
        this.element = document.createElement('div');
        this.element.className = 'flight-loader';
        this.element.innerHTML = `
            <div class="flight-track">
                <div class="plane-wrapper">
                    <svg viewBox="0 0 24 24" fill="currentColor" class="loading-plane">
                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                    </svg>
                    <div class="trail"></div>
                </div>
            </div>
            <style>
                .flight-loader {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    background: #fff;
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    pointer-events: none;
                }
                .flight-track {
                    width: 100%;
                    position: relative;
                    height: 100px;
                    overflow: hidden;
                }
                .plane-wrapper {
                    position: absolute;
                    left: -100px; /* Start off-screen */
                    top: 50%;
                    transform: translateY(-50%) rotate(90deg);
                    display: flex;
                    align-items: center;
                }
                .loading-plane {
                    width: 60px;
                    height: 60px;
                    color: #000;
                    transform: rotate(90deg); /* Orient plane correctly */
                }
                .trail {
                    position: absolute;
                    right: 100%;
                    top: 50%;
                    transform: translateY(-50%);
                    height: 2px;
                    background: rgba(0,0,0,0.1);
                    width: 0;
                }
            </style>
        `;
    }

    mount() {
        if (!document.querySelector('.flight-loader')) {
            document.body.appendChild(this.element);
        }
    }

    play() {
        return new Promise((resolve) => {
            const loader = this.element;
            const plane = this.element.querySelector('.plane-wrapper');
            const trail = this.element.querySelector('.trail');

            // Reset
            gsap.set(loader, { opacity: 1, pointerEvents: 'auto' });
            gsap.set(plane, { x: -150, opacity: 1 });
            gsap.set(trail, { width: 0, opacity: 1 });

            const tl = gsap.timeline({
                onComplete: () => {
                    // Start fading out loader but resolve promise first so page can change
                    resolve();
                    gsap.to(loader, { opacity: 0, duration: 0.5, pointerEvents: 'none', delay: 0.2 });
                }
            });

            // 1. Plane flies in to center
            tl.to(plane, {
                x: window.innerWidth / 2 - 30, // Center
                duration: 1,
                ease: "power2.out"
            })
                // 2. Plane flies out
                .to(plane, {
                    x: window.innerWidth + 150, // Off-screen right
                    duration: 0.8,
                    ease: "power2.in"
                });
        });
    }
}
