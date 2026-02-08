import Home from './pages/home.js';
import Services from './pages/services.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Destinations from './pages/destinations.js'; // Placeholder
import CountryDetail from './pages/countryDetail.js';

class Router {
    constructor(navbar) {
        this.routes = {
            '/': Home,
            '/about': About,
            '/services': Services,
            '/contact': Contact,
            '/destinations': Destinations,
            '/country': CountryDetail // Helper route, we will use query params
        };

        this.app = document.getElementById('app');
        this.navbar = navbar;
        this.currentRoute = null;
    }

    init() {
        // Handle Hash Change
        window.addEventListener('hashchange', () => this.handleRoute());
        window.addEventListener('load', () => this.handleRoute());
    }

    navigateTo(url) {
        window.location.hash = url;
    }

    async handleRoute() {
        // Simple hash or path check. Let's assume hash for simplicity if we can't configure server rewrites easily, 
        // BUT user asked for "premium", so I'll try to use standard paths and fallback to Hash if needed.
        // Actually, vanilla vite dev server handles history fallback usually.
        // Let's use `window.location.hash` for absolute safety in this dev environment without config access.

        // SWITCHING TO HASH ROUTER FOR STABILITY
        let path = window.location.hash.slice(1) || '/';

        // Handle params (e.g., /country/dubai -> /country and id=dubai)
        // For hash: #/country/dubai

        let component = this.routes[path];
        let params = {};

        // Dynamic route matching (simple)
        if (!component) {
            if (path.startsWith('/country/')) {
                component = this.routes['/country'];
                params.id = path.split('/')[2];
            } else {
                component = this.routes['/']; // Fallback to home
            }
        }

        if (this.currentRoute && this.currentRoute.unmount) {
            this.currentRoute.unmount();
        }

        if (this.navbar) {
            const isHome = path === '/';
            this.navbar.setVisible(isHome);
            this.navbar.setSolid(!isHome);
            if (!isHome) {
                this.navbar.createGlobalTrigger();
            } else if (this.navbar.globalTrigger) {
                this.navbar.globalTrigger.kill();
                this.navbar.globalTrigger = null;
            }
        }
        document.body.classList.toggle('white-theme', path !== '/');

        this.app.innerHTML = '';
        this.currentRoute = new component(params);
        this.currentRoute.navbarInstance = this.navbar; // Inject navbar instance
        await this.currentRoute.mount(this.app);

        this.updateSEO(path, params);
    }

    updateSEO(path, params) {
        let title = "Great Escapes Tourism | Luxury Travel";
        let desc = "Explore the world with Great Escapes Tourism. Bespoke journeys, luxury destinations, and unforgettable memories.";

        if (path === '/about') {
            title = "About Us | Great Escapes Tourism";
            desc = "Learn about our journey, our mission, and why we are the preferred choice for luxury travelers worldwide.";
        } else if (path === '/services') {
            title = "Our Services | Great Escapes Tourism";
            desc = "Interactive 3D Globe experience. Discover our global presence and premium travel services.";
        } else if (path === '/destinations') {
            title = "Destinations | Great Escapes Tourism";
            desc = "Browse our curated collection of luxury destinations. From Dubai to Paris, find your next escape.";
        } else if (path === '/contact') {
            title = "Contact Us | Great Escapes Tourism";
            desc = "Get in touch with Great Escapes Tourism. Start planning your dream vacation today.";
        } else if (path === '/country' && params.id) {
            // We'd ideally fetch real data here, but for now capitalized ID is fine as a fallback
            const name = params.id.charAt(0).toUpperCase() + params.id.slice(1);
            title = `${name} | Great Escapes Tourism`;
            desc = `Discover ${name} with Great Escapes Tourism. Luxury packages, top attractions, and exclusive experiences.`;
        }

        document.title = title;

        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = desc;
    }
}

export default Router;
