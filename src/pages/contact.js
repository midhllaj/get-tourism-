import Footer from '../components/Footer.js';
import gsap from 'gsap';

export default class Contact {
    async mount(container) {
        container.innerHTML = `
            <div class="contact-page" style="position: relative; z-index: 2;">
                <section class="section flex-center container">
                    <div class="contact-wrapper glass" style="padding: 3rem; max-width: 600px; width: 100%; border-radius: 12px;">
                        <div class="text-center" style="margin-bottom: 2rem;">
                            <h2 style="color: var(--gold); font-family: 'Inter', sans-serif; font-size: 0.9rem; letter-spacing: 2px;">GET IN TOUCH</h2>
                            <h1 style="font-size: 3rem;">Start Your Journey</h1>
                        </div>
                        
                        <form id="contact-form">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="John Doe">
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="john@example.com">
                            </div>
                            <div class="form-group">
                                <label>Message</label>
                                <textarea rows="4" placeholder="Tell us about your dream trip..."></textarea>
                            </div>
                            <button type="submit" class="submit-btn">Send Enquiry</button>
                        </form>
                    </div>
                </section>
            </div>
            <style>
                .form-group {
                    margin-bottom: 1.5rem;
                }
                .form-group label {
                    display: block;
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    margin-bottom: 0.5rem;
                    opacity: 0.7;
                    letter-spacing: 1px;
                }
                .form-group input, .form-group textarea {
                    width: 100%;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid var(--glass-border);
                    padding: 1rem;
                    color: white;
                    font-family: "Inter", sans-serif;
                    outline: none;
                    transition: border-color 0.3s;
                }
                .form-group input:focus, .form-group textarea:focus {
                    border-color: var(--gold);
                }
                .submit-btn {
                    width: 100%;
                    padding: 1rem;
                    background: var(--gold);
                    color: black;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    transition: background 0.3s;
                }
                .submit-btn:hover {
                    background: white;
                }
            </style>
        `;

        gsap.from('.contact-wrapper', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        });
        this.footer = new Footer();
        this.footer.mount(container, { type: 'sticky' });
    }
    unmount() {
        if (this.footer) this.footer.destroy();
    }
}
