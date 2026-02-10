import Footer from '../components/Footer.js';
import gsap from 'gsap';

export default class Contact {
    async mount(container) {
        container.innerHTML = `
            <div class="contact-page-new">
                <div class="ripple-background">
                    <div class="ripple-circle" style="--i: 0;"></div>
                    <div class="ripple-circle" style="--i: 1;"></div>
                    <div class="ripple-circle" style="--i: 2;"></div>
                    <div class="ripple-circle" style="--i: 3;"></div>
                    <div class="ripple-circle" style="--i: 4;"></div>
                    <div class="ripple-circle" style="--i: 5;"></div>
                    <div class="ripple-circle" style="--i: 6;"></div>
                    <div class="ripple-circle" style="--i: 7;"></div>
                </div>
                <div class="contact-wrapper">
                    <div class="contact-info-side">
                        <h1 class="contact-title">Ready to Start Your Business Journey?</h1>
                        <p class="contact-subtitle">Contact us for a free consultation. Our experts are ready to guide you through your UAE business setup.</p>
                        
                        <div class="contact-details">
                            <div class="contact-detail-item">
                                <div class="contact-icon">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/>
                                        <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"/>
                                    </svg>
                                </div>
                                <div class="contact-detail-text">
                                    <div class="contact-label">PHONE</div>
                                    <div class="contact-value">+971 50 427 4260</div>
                                </div>
                            </div>

                            <div class="contact-detail-item">
                                <div class="contact-icon">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"/>
                                    </svg>
                                </div>
                                <div class="contact-detail-text">
                                    <div class="contact-label">EMAIL</div>
                                    <div class="contact-value">info@getourism.com</div>
                                </div>
                            </div>

                            <div class="contact-detail-item">
                                <div class="contact-icon">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                                    </svg>
                                </div>
                                <div class="contact-detail-text">
                                    <div class="contact-label">ADDRESS</div>
                                    <div class="contact-value">G.S14, P.B.No:111112<br/>Al Sharafi Building,1<br/>Al Karama, Dubai-UAE</div>
                                </div>
                            </div>
                        </div>

                        <div class="contact-socials">
                            <span class="follow-text">Follow Us:</span>
                            <a href="#" class="social-icon" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/>
                                </svg>
                            </a>
                            <a href="#" class="social-icon" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"/>
                                    <circle cx="16.806" cy="7.207" r="1.078"/>
                                    <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"/>
                                </svg>
                            </a>
                            <a href="#" class="social-icon" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <circle cx="4.983" cy="5.009" r="2.188"/>
                                    <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"/>
                                </svg>
                            </a>
                            <a href="#" class="social-icon" aria-label="WhatsApp">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178

 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div class="contact-form-side">
                        <div class="contact-form-box">
                            <h2 class="form-title">Request a Free Consultation</h2>
                            
                            <form class="contact-form">
                                <input type="text" placeholder="Your Name *" required class="form-input"/>
                                
                                <div class="form-row">
                                    <input type="email" placeholder="Email Address *" required class="form-input"/>
                                    <input type="tel" placeholder="Phone Number *" required class="form-input"/>
                                </div>
                                
                                <select class="form-select" id="service-select" required>
                                    <option value="">Select Service *</option>
                                    <option value="visa">Visit Visa</option>
                                    <option value="tour">Tour Packages</option>
                                    <option value="flight">Flight Tickets</option>
                                    <option value="other">Other Services</option>
                                </select>
                                
                                <div id="dynamic-fields-container" class="dynamic-fields-container"></div>
                                
                                <textarea placeholder="Your Message" rows="5" class="form-textarea"></textarea>
                                
                                <button type="submit" class="form-submit-btn">
                                    <span>SEND INQUIRY</span>
                                    <svg class="btn-arrow" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Mount Footer
        this.footer = new Footer();
        this.footer.mount(container, { type: 'sticky' });

        // Animation
        gsap.from('.contact-title', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });

        gsap.from('.contact-subtitle', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.2,
            ease: "power3.out"
        });

        gsap.from('.contact-detail-item', {
            x: -30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            delay: 0.4,
            ease: "power2.out"
        });

        gsap.from('.contact-socials', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            delay: 0.8,
            ease: "power2.out"
        });

        gsap.from('.contact-form-box', {
            x: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.3,
            ease: "power3.out"
        });

        gsap.from('.contact-form > *', {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            delay: 0.6,
            ease: "power2.out"
        });

        // Dynamic Fields Logic
        const serviceSelect = container.querySelector('#service-select');
        const dynamicFieldsContainer = container.querySelector('#dynamic-fields-container');

        serviceSelect.addEventListener('change', (e) => {
            const service = e.target.value;
            dynamicFieldsContainer.innerHTML = '';
            dynamicFieldsContainer.classList.remove('active');

            if (service === 'flight') {
                dynamicFieldsContainer.innerHTML = `
                    <div class="dynamic-section-title">Flight Details</div>
                    <div class="form-row">
                        <input type="text" placeholder="From (Origin) *" required class="form-input"/>
                        <input type="text" placeholder="To (Destination) *" required class="form-input"/>
                    </div>
                    <div class="form-row">
                        <input type="date" placeholder="Departure Date *" required class="form-input"/>
                        <input type="number" placeholder="Number of Passengers *" required min="1" class="form-input"/>
                    </div>
                    <textarea placeholder="Passenger Details (Names, Special Requirements)" rows="3" class="form-textarea"></textarea>
                `;
                dynamicFieldsContainer.classList.add('active');
            } else if (service === 'visa') {
                dynamicFieldsContainer.innerHTML = `
                    <div class="dynamic-section-title">Visa Consulting Details</div>
                    <div class="form-row">
                        <select class="form-select" required>
                            <option value="">Visa Type *</option>
                            <option value="tourist">Tourist Visa</option>
                            <option value="business">Business Visa</option>
                            <option value="transit">Transit Visa</option>
                        </select>
                        <input type="text" placeholder="Nationality / Country *" required class="form-input"/>
                    </div>
                    <textarea placeholder="Applicant Details (Names, Passport Info, Current Location)" rows="3" class="form-textarea"></textarea>
                `;
                dynamicFieldsContainer.classList.add('active');
            } else if (service === 'tour') {
                dynamicFieldsContainer.innerHTML = `
                    <div class="dynamic-section-title">Tour Package Details</div>
                    <div class="form-row">
                        <input type="text" placeholder="Preferred Destination *" required class="form-input"/>
                        <input type="number" placeholder="Number of Travelers *" required min="1" class="form-input"/>
                    </div>
                    <div class="form-row">
                        <input type="date" placeholder="Approximate Date *" required class="form-input"/>
                        <input type="text" placeholder="Duration (e.g., 5 Days) *" required class="form-input"/>
                    </div>
                    <textarea placeholder="Specific Interests (e.g., Adventure, Heritage, Luxury)" rows="3" class="form-textarea"></textarea>
                `;
                dynamicFieldsContainer.classList.add('active');
            } else if (service === 'other') {
                dynamicFieldsContainer.innerHTML = `
                    <div class="dynamic-section-title">Service Details</div>
                    <input type="text" placeholder="Specific Service Required *" required class="form-input"/>
                    <textarea placeholder="Please describe your requirements in detail *" required rows="4" class="form-textarea"></textarea>
                `;
                dynamicFieldsContainer.classList.add('active');
            }

            if (dynamicFieldsContainer.innerHTML !== '') {
                gsap.from(dynamicFieldsContainer.children, {
                    y: 10,
                    opacity: 0,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: "power2.out"
                });
            }
        });
    }

    unmount() {
        if (this.footer) this.footer.destroy();
    }
}

