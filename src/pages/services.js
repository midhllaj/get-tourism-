import Globe from '../components/Globe.js';
import Footer from '../components/Footer.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import { createRoot } from 'react-dom/client';


// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default class Services {
    async mount(container) {
        container.innerHTML = `
            <div class="services-page" style="width: 100%; position: relative; background-color: #fff; overflow-x: hidden;">
                
                <!-- Toggle Controls removed - only showing Our Services now -->
                <div class="services-controls" style="position: fixed; top: 120px; left: 50%; transform: translateX(-50%); z-index: 100; display: none;">
                    <button id="btn-our-services" class="service-toggle-btn active" style="padding: 10px 20px; border-radius: 30px; border: 1px solid rgba(0,0,0,0.2); background: #000; color: white; backdrop-filter: blur(10px); cursor: pointer; transition: all 0.3s ease;">
                        Our Services
                    </button>
                </div>

                <!-- Text Content View (New Intro + Services) -->
                <div id="view-our-services" class="service-view" style="width: 100%; min-height: 100vh; position: relative; z-index: 10; background: white;">
                    
                    <!-- NEW HERO SECTION: 'Our Main Services' -->
                    <section class="services-hero-collage" style="position: relative; min-height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden; padding: 4rem 2rem;">
                        
                        <!-- Background Image -->
                        <img src="/assets/services/hero-bg.jpg" alt="Services Background" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; filter: brightness(0.6);">

                        <div class="collage-container" style="position: relative; width: 100%; max-width: 1200px; height: 80vh; display: flex; align-items: center; justify-content: center; z-index: 2;">
                            
                            <!-- Large Background Text/Title -->
                            <h1 class="hero-title" style="position: relative; z-index: 10; text-align: center; font-family: 'League Spartan', sans-serif; font-weight: 800; font-size: clamp(3rem, 10vw, 8rem); line-height: 0.9; color: white; text-transform: uppercase;">
                                Our<br>
                                <span style="color: transparent; -webkit-text-stroke: 2px white;">Services</span>
                            </h1>

                        </div>
                    </section>

                    <!-- NEW INTRO SECTION FROM TEMPLATE (Existing) -->
                    <div class="services-scroll-slider">


                        <section class="slider">
                            <div class="slider-content">
                                <div class="slider-title">
                                    <h1>
                                        <!-- Title will be injected here via JS -->
                                    </h1>
                                    <p class="slider-desc">
                                        <!-- Description injected via JS -->
                                    </p>
                                    <a href="#" class="slider-btn" style="opacity: 0; pointer-events: none;">Explore More</a>
                                </div>

                                <div class="slider-images">
                                    <!-- Images will be injected here via JS -->
                                </div>
                            </div>

                            <div class="slider-indicator">
                                <div class="slider-indices"></div>
                                <div class="slider-progress-bar">
                                    <div class="slider-progress"></div>
                                </div>
                            </div>
                        </section>

                        <section class="contact-outro" style="position: relative; overflow: hidden; min-height: 100vh; display: flex; align-items: center; justify-content: flex-start; background: #000;">
                            <!-- Background Image -->
                            <div class="contact-bg-image" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0;">
                                <img src="/assets/services/contact-bg.jpg" alt="Man standing on cliff" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.6);">
                            </div>

                            <!-- Contact Content Container -->
                            <div class="contact-content-wrapper" style="position: relative; z-index: 2; width: 100%; max-width: 1400px; margin: 0 auto; padding: 4rem 2rem; display: flex; justify-content: space-between; align-items: flex-start; gap: 4rem; flex-wrap: wrap;">
                                
                                <!-- Left Side: Heading and Contact Info -->
                                <div style="flex: 1; min-width: 300px;">
                                    <!-- Main Heading -->
                                    <h1 class="contact-main-heading" style="font-family: 'League Spartan', sans-serif; font-weight: 800; font-size: clamp(2.5rem, 6vw, 5rem); line-height: 1.1; color: white; text-transform: uppercase; margin-bottom: 3rem; letter-spacing: 2px;">
                                        KEEP<br>CONNECTED<br>WITH US
                                    </h1>

                                    <!-- Contact Info Box - iOS 26 Theme -->
                                    <div class="contact-info-box" style="background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(30px) saturate(180%); -webkit-backdrop-filter: blur(30px) saturate(180%); padding: 2.5rem 3rem; max-width: 500px; border-radius: 28px; color: #fff; border: 1px solid rgba(255, 255, 255, 0.2); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3);">
                                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;">
                                            <!-- Phone -->
                                            <div class="contact-item">
                                                <h3 style="font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 0.85rem; text-transform: uppercase; margin-bottom: 0.5rem; letter-spacing: 1.5px; color: rgba(255, 255, 255, 0.7);">PHONE:</h3>
                                                <p style="font-family: 'Montserrat', sans-serif; font-size: 1rem; margin: 0; color: #fff; font-weight: 500;">+123-456-7890</p>
                                            </div>

                                            <!-- Address -->
                                            <div class="contact-item">
                                                <h3 style="font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 0.85rem; text-transform: uppercase; margin-bottom: 0.5rem; letter-spacing: 1.5px; color: rgba(255, 255, 255, 0.7);">ADDRESS:</h3>
                                                <p style="font-family: 'Montserrat', sans-serif; font-size: 1rem; margin: 0; color: #fff; line-height: 1.4; font-weight: 500;">123 Anywhere St., Any City, ST 12345</p>
                                            </div>

                                            <!-- Email -->
                                            <div class="contact-item">
                                                <h3 style="font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 0.85rem; text-transform: uppercase; margin-bottom: 0.5rem; letter-spacing: 1.5px; color: rgba(255, 255, 255, 0.7);">EMAIL:</h3>
                                                <p style="font-family: 'Montserrat', sans-serif; font-size: 1rem; margin: 0; color: #fff; font-weight: 500;">hello@reallygreatsite.com</p>
                                            </div>

                                            <!-- Website -->
                                            <div class="contact-item">
                                                <h3 style="font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 0.85rem; text-transform: uppercase; margin-bottom: 0.5rem; letter-spacing: 1.5px; color: rgba(255, 255, 255, 0.7);">WEBSITE:</h3>
                                                <p style="font-family: 'Montserrat', sans-serif; font-size: 1rem; margin: 0; color: #fff; font-weight: 500;">www.reallygreatsite.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Right Side: Client Information Form - iOS 26 Theme -->
                                <div class="client-form-container" style="flex: 1; min-width: 350px; max-width: 500px; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(30px) saturate(180%); -webkit-backdrop-filter: blur(30px) saturate(180%); padding: 3rem; border-radius: 28px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5); border: 1px solid rgba(255, 255, 255, 0.3);">
                                    <h2 style="font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 1.5rem; text-transform: uppercase; margin-bottom: 2rem; color: #1d1d1f; letter-spacing: 0.5px;">Get in Touch</h2>
                                    
                                    <form id="client-contact-form" style="display: flex; flex-direction: column; gap: 1.25rem;">
                                        <!-- Name Input -->
                                        <div class="form-group">
                                            <label style="font-family: 'Montserrat', sans-serif; font-size: 0.85rem; font-weight: 600; color: #1d1d1f; margin-bottom: 0.5rem; display: block;">Name</label>
                                            <input type="text" placeholder="Your Name" required style="width: 100%; padding: 1rem 1.25rem; background: rgba(255, 255, 255, 0.8); border: 1px solid rgba(0, 0, 0, 0.1); color: #1d1d1f; border-radius: 14px; outline: none; font-family: 'Montserrat', sans-serif; font-size: 1rem; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);">
                                        </div>

                                        <!-- Phone Input -->
                                        <div class="form-group">
                                            <label style="font-family: 'Montserrat', sans-serif; font-size: 0.85rem; font-weight: 600; color: #1d1d1f; margin-bottom: 0.5rem; display: block;">Phone</label>
                                            <input type="tel" placeholder="Your Phone Number" required style="width: 100%; padding: 1rem 1.25rem; background: rgba(255, 255, 255, 0.8); border: 1px solid rgba(0, 0, 0, 0.1); color: #1d1d1f; border-radius: 14px; outline: none; font-family: 'Montserrat', sans-serif; font-size: 1rem; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);">
                                        </div>

                                        <!-- Email Input -->
                                        <div class="form-group">
                                            <label style="font-family: 'Montserrat', sans-serif; font-size: 0.85rem; font-weight: 600; color: #1d1d1f; margin-bottom: 0.5rem; display: block;">Email</label>
                                            <input type="email" placeholder="Your Email" required style="width: 100%; padding: 1rem 1.25rem; background: rgba(255, 255, 255, 0.8); border: 1px solid rgba(0, 0, 0, 0.1); color: #1d1d1f; border-radius: 14px; outline: none; font-family: 'Montserrat', sans-serif; font-size: 1rem; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);">
                                        </div>

                                        <!-- Message Input -->
                                        <div class="form-group">
                                            <label style="font-family: 'Montserrat', sans-serif; font-size: 0.85rem; font-weight: 600; color: #1d1d1f; margin-bottom: 0.5rem; display: block;">Message</label>
                                            <textarea rows="4" placeholder="Tell us about your requirements..." style="width: 100%; padding: 1rem 1.25rem; background: rgba(255, 255, 255, 0.8); border: 1px solid rgba(0, 0, 0, 0.1); color: #1d1d1f; border-radius: 14px; outline: none; font-family: 'Montserrat', sans-serif; font-size: 1rem; resize: vertical; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);"></textarea>
                                        </div>

                                        <!-- Submit Button -->
                                        <button type="submit" style="padding: 1rem 1.5rem; background: linear-gradient(135deg, #007AFF 0%, #0051D5 100%); color: white; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border: none; border-radius: 14px; cursor: pointer; transition: all 0.3s ease; font-family: 'Montserrat', sans-serif; font-size: 1rem; box-shadow: 0 4px 16px rgba(0, 122, 255, 0.3); margin-top: 0.5rem;">Send Message</button>
                                    </form>
                                </div>


                            </div>
                        </section>
                    </div>
                    <!-- END NEW INTRO SECTION -->

                    <!-- EXISTING SERVICES CONTENT -->
                    <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 6rem 2rem; color: black;">
                        





                    </div>
                </div>

                <!-- Globe View (Interactive 3D Experience) -->
                <div id="view-3d-experience" class="service-view" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; pointer-events: none; transition: opacity 0.5s ease; width: 100vw; height: 100vh; background: black;">
                    <div class="globe-container" style="width: 100%; height: 100%;">
                        <div style="position: absolute; top: 50%; left: 50px; transform: translateY(-50%); z-index: 10; pointer-events: none; color: white;">
                            <h1 style="font-size: 4rem; line-height: 1;">Global<br>Presence</h1>
                            <p style="max-width: 400px; margin-top: 1rem; opacity: 0.8;">
                                Spin the globe to find your next destination.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <link rel="stylesheet" href="/services.css" />
        `;

        // Initialize Globe
        const globeContainer = container.querySelector('.globe-container');
        this.globe = new Globe(globeContainer);



        // --- SLIDER LOGIC ---
        const initSlider = () => {
            const context = container.querySelector('.services-scroll-slider');
            if (!context) return;

            const slides = [
                {
                    title: "Tour Package",
                    description: "Experience the essence of each destination through our meticulously designed tour packages. Explore the iconic attractions while also delving into the hidden gems that make each place truly special. Whether it’s a Dubai city tour with all excursions or a journey to the exotic landscapes of Kerala, our packages ensure a holistic and immersive travel experience.<br><br>Our tour packages are not generic itineraries but carefully crafted experiences. We invest time and effort into curating every detail, from the destinations you’ll visit to the activities you’ll partake in. This meticulous planning ensures that you get the most out of your trip.",
                    image: "/assets/services/tour-packages.jpg",
                    link: "#/destinations",
                    linkColor: "#007AFF" // Custom color property
                },
                {
                    title: "Visit Visas",
                    description: "Navigating travel requirements can be complex, which is why we simplify the process of obtaining visit visas. Trust us to handle the necessary paperwork and ensure a smooth travel experience.<br><br>Our visa acquisition services are designed to simplify the often complex and time-consuming process of obtaining visit visas. We bring expertise, efficiency, and a commitment to your convenience, so you can confidently embark on your journey, knowing that the necessary documentation has been handled with care and professionalism. Your peace of mind is our priority, and we aim to make your travel dreams a reality.",
                    image: "/assets/services/visit-visas.jpg",
                    link: "#/contact",
                    linkColor: "#007AFF"
                },
                {
                    title: "Air Tickets",
                    description: "Seamlessly connect to your desired destinations with our air ticket booking services. We offer convenience, flexibility, and competitive prices to ensure your journey starts off on the right foot.<br><br>We understand that the beginning of your trip often starts with booking the right flights. Our services are built to seamlessly connect you to your desired destinations. We prioritize efficiency, ensuring that you can easily find and book flights to various destinations around the world.",
                    image: "/assets/services/air-tickets.jpg",
                    link: "#/contact",
                    linkColor: "#007AFF"
                },


            ];

            const pinDistance = window.innerHeight * slides.length;
            const slider = context.querySelector('.slider');
            const progressBar = context.querySelector(".slider-progress");
            const sliderImages = context.querySelector(".slider-images");
            const sliderTitle = context.querySelector(".slider-title");
            const sliderIndices = context.querySelector(".slider-indices");

            let activeSlide = 0;

            function createIndices() {
                sliderIndices.innerHTML = "";
                slides.forEach((_, index) => {
                    const indexNum = (index + 1).toString().padStart(2, "0");
                    const indicatorElement = document.createElement("p");
                    indicatorElement.dataset.index = index;
                    indicatorElement.innerHTML = `<span class="marker"></span><span class="index">${indexNum}</span>`;
                    sliderIndices.appendChild(indicatorElement);

                    if (index === 0) {
                        gsap.set(indicatorElement.querySelector(".index"), { opacity: 1 });
                        gsap.set(indicatorElement.querySelector(".marker"), { scaleX: 1 });
                    } else {
                        gsap.set(indicatorElement.querySelector(".index"), { opacity: 0.35 });
                        gsap.set(indicatorElement.querySelector(".marker"), { scaleX: 0 });
                    }
                });
            }

            function animateNewSlide(index) {
                const newSliderImage = document.createElement("img");
                newSliderImage.src = slides[index].image;
                newSliderImage.alt = `Slide ${index + 1}`;

                gsap.set(newSliderImage, { opacity: 0, scale: 1.1 });
                sliderImages.appendChild(newSliderImage);

                gsap.to(newSliderImage, { opacity: 1, duration: 0.5, ease: "power2.out" });
                gsap.to(newSliderImage, { scale: 1, duration: 1, ease: "power2.out" });

                const allImages = sliderImages.querySelectorAll("img");
                if (allImages.length > 3) {
                    const removeCount = allImages.length - 3;
                    for (let i = 0; i < removeCount; i++) {
                        if (sliderImages.contains(allImages[i])) sliderImages.removeChild(allImages[i]);
                    }
                }

                animateNewTitle(index);
                animateIndicators(index);
            }

            function animateIndicators(index) {
                const indicators = sliderIndices.querySelectorAll("p");
                indicators.forEach((indicator, i) => {
                    const markerElement = indicator.querySelector(".marker");
                    const indexElement = indicator.querySelector(".index");
                    if (i === index) {
                        gsap.to(indexElement, { opacity: 1, duration: 0.3 });
                        gsap.to(markerElement, { scaleX: 1, duration: 0.3 });
                    } else {
                        gsap.to(indexElement, { opacity: 0.5, duration: 0.3 });
                        gsap.to(markerElement, { scaleX: 0, duration: 0.3 });
                    }
                });
            }

            function animateNewTitle(index) {
                const existingTitle = sliderTitle.querySelector("h1");
                const existingDesc = sliderTitle.querySelector("p");
                const existingBtn = sliderTitle.querySelector("a");

                // Animate out
                gsap.to([existingTitle, existingDesc], {
                    y: -20,
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => {
                        // Update content
                        existingTitle.innerText = slides[index].title;

                        if (slides[index].description) {
                            existingDesc.innerHTML = slides[index].description;
                            existingDesc.style.display = "block";
                        } else {
                            existingDesc.style.display = "none";
                        }

                        if (slides[index].link) {
                            existingBtn.href = slides[index].link;
                            // Apply custom color if exists, else default to black text on white bg
                            if (slides[index].linkColor) {
                                existingBtn.style.color = slides[index].linkColor;
                            } else {
                                existingBtn.style.color = 'black';
                            }
                            gsap.to(existingBtn, { opacity: 1, pointerEvents: 'auto', duration: 0.3 });
                        } else {
                            gsap.to(existingBtn, { opacity: 0, pointerEvents: 'none', duration: 0.3 });
                        }

                        // Reset positions
                        gsap.set([existingTitle, existingDesc], { y: 20, opacity: 0 });

                        // Animate in
                        gsap.to([existingTitle, existingDesc], {
                            y: 0,
                            opacity: 1,
                            duration: 0.5,
                            stagger: 0.1,
                            ease: "power2.out"
                        });
                    }
                });
            }

            // Init
            createIndices();
            // Initial render
            const initialImg = document.createElement("img");
            initialImg.src = slides[0].image;
            sliderImages.appendChild(initialImg);

            // Set initial text
            sliderTitle.querySelector("h1").innerText = slides[0].title;
            const descEl = sliderTitle.querySelector("p");
            const btnEl = sliderTitle.querySelector("a");

            if (slides[0].description) {
                descEl.innerHTML = slides[0].description;
                descEl.style.display = "block";
            } else {
                descEl.style.display = "none";
            }

            if (slides[0].link) {
                btnEl.href = slides[0].link;
                if (slides[0].linkColor) {
                    btnEl.style.color = slides[0].linkColor;
                }
                btnEl.style.opacity = "1";
                btnEl.style.pointerEvents = "auto";
            } else {
                btnEl.style.opacity = "0";
                btnEl.style.pointerEvents = "none";
            }


            // ScrollTrigger
            this.sliderTrigger = ScrollTrigger.create({
                trigger: slider,
                start: "top top",
                end: `+=${pinDistance}px`,
                scrub: 1,
                pin: true,
                pinSpacing: true,
                onUpdate: (self) => {
                    gsap.set(progressBar, { scaleY: self.progress });
                    const currentSlide = Math.min(Math.floor(self.progress * slides.length), slides.length - 1);
                    if (activeSlide !== currentSlide) {
                        activeSlide = currentSlide;
                        animateNewSlide(activeSlide);
                    }
                },
            });
        };

        // Initialize slider
        initSlider();

        // --- END SLIDER LOGIC ---

        // Event Listeners for Toggle (3D Experience is now a separate page, so only keep Our Services button)
        const btnOurServices = container.querySelector('#btn-our-services');
        // btn3dExperience is now a link, no event listener needed


        // Scroll Direction Listener for Controls Visibility
        let lastScrollTop = 0;
        const controls = container.querySelector('.services-controls');

        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                // Downscroll - Fade out
                gsap.to(controls, { opacity: 0, duration: 0.3, ease: "power2.out", pointerEvents: 'none' });
            } else {
                // Upscroll - Fade in
                gsap.to(controls, { opacity: 1, duration: 0.3, ease: "power2.out", pointerEvents: 'auto' });
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };

        window.addEventListener('scroll', handleScroll);
        this.scrollHandler = handleScroll; // Store ref for cleanup

        // Mount Footer with reveal effect
        this.footer = new Footer();
        this.footer.mount(document.body, { type: 'reveal' });

        // --- Animations for Collage Hero ---
        const collageSection = container.querySelector('.services-hero-collage');
        if (collageSection) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: collageSection,
                    start: 'top center',
                    toggleActions: 'play none none reverse'
                }
            });

            tl.from(collageSection.querySelector('.hero-title'), {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            })
                .from(collageSection.querySelector('.img-1'), {
                    y: -50,
                    opacity: 0,
                    rotation: 0,
                    duration: 0.8,
                    ease: 'back.out(1.7)'
                }, '-=0.5')
                .from(collageSection.querySelector('.img-2'), {
                    y: 50,
                    opacity: 0,
                    rotation: 0,
                    duration: 0.8,
                    ease: 'back.out(1.7)'
                }, '-=0.6');

            // Parallax effect on scroll
            gsap.to(collageSection.querySelector('.img-1'), {
                y: -30,
                scrollTrigger: {
                    trigger: collageSection,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
            gsap.to(collageSection.querySelector('.img-2'), {
                y: -60,
                scrollTrigger: {
                    trigger: collageSection,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }
    }

    unmount() {
        if (this.globe) {
            this.globe.destroy();
        }

        if (this.sliderTrigger) {
            this.sliderTrigger.kill();
        }
        if (this.scrollHandler) {
            window.removeEventListener('scroll', this.scrollHandler);
        }
        if (this.footer) {
            this.footer.destroy();
        }
    }
}
