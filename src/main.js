// import '../styles.css'; // Just in case, though it is linked in html
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
import Footer from './components/Footer.js';

document.addEventListener('DOMContentLoaded', () => {
    // Mount Navbar
    const navbar = new Navbar();
    navbar.mount(document.body);

    const router = new Router();
    router.init();

    // Mount Footer (it will be at bottom naturally, but router clears #app, so footer outside #app)
    // DISABLED: Pages now handle their own footer with appropriate reveal/fixed positioning
    // const footer = new Footer();
    // footer.mount(document.body);

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
