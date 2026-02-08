import '../styles.css'; // Just in case, though it is linked in html
import Router from './router.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

// Initialize Global Lenis
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Initialize Router and Navbar
import Navbar from './components/Navbar.js';

document.addEventListener('DOMContentLoaded', () => {
    // Mount Navbar
    const navbar = new Navbar();
    navbar.mount(document.body);

    const router = new Router();
    router.init();

    // Note: Footer is now mounted by individual pages, not globally

    // Simulate Loading
    const loader = document.getElementById('loader');
    const fill = document.querySelector('.progress-fill');

    gsap.to(fill, {
        width: '100%',
        duration: 1.5,
        ease: 'power2.inOut',
        onComplete: () => {
            gsap.to(loader, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    loader.style.display = 'none';
                }
            });
        }
    });
});
