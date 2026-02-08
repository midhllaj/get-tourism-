import Globe from '../components/Globe.js';
import Footer from '../components/Footer.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import { createRoot } from 'react-dom/client';
import WorldMapDemo from '../components/WorldMapDemo.jsx';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default class Services {
    async mount(container) {
        container.innerHTML = `
            <div class="services-page" style="width: 100%; position: relative; background-color: #fff; overflow-x: hidden;">
                
                <!-- Toggle Controls (Kept Absolute on top) -->
                <div class="services-controls" style="position: fixed; top: 120px; left: 50%; transform: translateX(-50%); z-index: 100; display: flex; gap: 1rem;">
                    <button id="btn-our-services" class="service-toggle-btn active" style="padding: 10px 20px; border-radius: 30px; border: 1px solid rgba(0,0,0,0.2); background: #000; color: white; backdrop-filter: blur(10px); cursor: pointer; transition: all 0.3s ease;">
                        Our Services
                    </button>
                    <button id="btn-3d-experience" class="service-toggle-btn" style="padding: 10px 20px; border-radius: 30px; border: 1px solid rgba(0,0,0,0.2); background: transparent; color: rgba(0,0,0,0.6); backdrop-filter: blur(10px); cursor: pointer; transition: all 0.3s ease;">
                        Interactive 3D Experience
                    </button>
                </div>

                <!-- Text Content View (New Intro + Services) -->
                <div id="view-our-services" class="service-view" style="width: 100%; min-height: 100vh; position: relative; z-index: 10; background: white;">
                    
                    <!-- NEW INTRO SECTION FROM TEMPLATE -->
                    <div class="services-scroll-slider">
                        <section class="intro" style="display: block; padding: 0;">
                            <div id="world-map-root" style="width: 100%;"></div>
                        </section>

                        <section class="slider">
                            <div class="slider-images">
                                <!-- Images will be injected here via JS -->
                            </div>

                            <div class="slider-title">
                                <h1>
                                    <!-- Title will be injected here via JS -->
                                </h1>
                                <p class="slider-desc">
                                    <!-- Description injected via JS -->
                                </p>
                                <a href="#" class="slider-btn" style="opacity: 0; pointer-events: none;">Explore More</a>
                            </div>

                            <div class="slider-indicator">
                                <div class="slider-indices"></div>
                                <div class="slider-progress-bar">
                                    <div class="slider-progress"></div>
                                </div>
                            </div>
                        </section>

                        <section class="contact-outro" style="position: relative; overflow: hidden; min-height: 100vh; display: flex; align-items: center; justify-content: center; color: white;">
                            <!-- Background & Clouds -->
                            <div class="sky-bg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0;">
                                <img src="/assets/home page bg.jpg" alt="Sky" style="width: 100%; height: 100%; object-fit: cover;">
                            </div>
                            
                            <div class="clouds-container" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none;">
                                <img src="/assets/cloud-left-1.png" class="cloud-anim-left" style="position: absolute; top: 10%; left: -10%; width: 50%; opacity: 0.8;">
                                <img src="/assets/cloud-right-1.png" class="cloud-anim-right" style="position: absolute; top: 30%; right: -10%; width: 55%; opacity: 0.7;">
                                <img src="/assets/cloud-left-1.png" class="cloud-anim-left-slow" style="position: absolute; bottom: 10%; left: -20%; width: 60%; opacity: 0.6;">
                            </div>

                            <!-- Contact Content -->
                            <div class="contact-content glass" style="position: relative; z-index: 2; width: 100%; max-width: 600px; padding: 3rem; border-radius: 20px; background: rgba(0,0,0,0.4); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); text-align: center;">
                                <h2 style="font-family: 'Inter', sans-serif; font-size: 0.9rem; letter-spacing: 2px; color: #fbbf24; margin-bottom: 1rem; text-transform: uppercase;">Get in Touch</h2>
                                <h1 style="font-family: 'Instrument Serif', serif; font-size: 3.5rem; margin-bottom: 2rem; line-height: 1.1;">Start Your Journey</h1>
                                
                                <form id="service-contact-form" style="display: flex; flex-direction: column; gap: 1.5rem; text-align: left;">
                                    <div class="form-group">
                                        <input type="text" placeholder="Your Name" style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 5px; outline: none; font-family: 'Inter', sans-serif;">
                                    </div>
                                    <div class="form-group">
                                        <input type="email" placeholder="Your Email" style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 5px; outline: none; font-family: 'Inter', sans-serif;">
                                    </div>
                                    <div class="form-group">
                                        <textarea rows="3" placeholder="Tell us about your trip..." style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; border-radius: 5px; outline: none; font-family: 'Inter', sans-serif; resize: none;"></textarea>
                                    </div>
                                    <button type="submit" style="padding: 1rem; background: #fbbf24; color: black; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; border: none; border-radius: 5px; cursor: pointer; transition: transform 0.2s ease;">Send Enquiry</button>
                                </form>
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

            <style>
                /* TEMPLATE STYLES IMPORTED */
                .services-scroll-slider {
                    color: black;
                }
                .intro, .outro {
                    padding: 4rem 2rem;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #fff;
                    color: #000;
                    text-align: center;
                }
                .intro h1, .outro h1 {
                    font-size: 2.5rem; /* Adjusted roughly */
                    font-weight: 400;
                    width: 60%;
                    max-width: 800px;
                    line-height: 1.4;
                    font-family: 'Instrument Serif', serif;
                }

                .slider {
                    position: relative;
                    width: 100%;
                    height: 100vh;
                    overflow: hidden;
                    background: #fff;
                }

                .slider-images {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }
                /* Dark overlay for text readability */
                .slider-images::after {
                    content: "";
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background-color: rgba(0, 0, 0, 0.35);
                }
                .slider-images img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transform-origin: center;
                    will-change: transform, opacity;
                }

                .slider-title {
                    position: absolute;
                    top: 50%;
                    left: 5%;
                    transform: translateY(-50%);
                    width: 60%;
                    color: #fff;
                    z-index: 2;
                }
                .slider-title h1 {
                    font-family: 'Instrument Serif', serif;
                    font-size: 4rem;
                    line-height: 1.1;
                    margin-bottom: 1rem;
                    color: #ffffff; /* As requested per previous theme changes */
                }
                .slider-title p {
                    font-family: 'Inter', sans-serif;
                    font-size: 1rem;
                    line-height: 1.6;
                    margin-bottom: 2rem;
                    max-width: 600px;
                    opacity: 0.9;
                }
                .slider-btn {
                    display: inline-block; 
                    padding: 12px 35px; 
                    background: white; 
                    color: black; 
                    border-radius: 50px; 
                    font-weight: 500; 
                    text-decoration: none; 
                    transition: transform 0.3s ease;
                }
                .slider-btn:hover {
                    transform: scale(1.05);
                }

                .slider-indicator {
                    position: absolute;
                    top: 50%;
                    right: 2rem;
                    transform: translateY(-50%);
                    z-index: 2;
                }

                .slider-indices {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    padding: 1rem 1.25rem;
                }
                .slider-indices p {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    color: #fff;
                    font-family: 'Inter', monospace;
                    font-size: 0.85rem;
                    margin: 0;
                }

                .index {
                    position: relative;
                    width: 1.25rem;
                    display: flex;
                    justify-content: flex-end;
                }
                .marker {
                    position: relative;
                    width: 0.75rem;
                    height: 1px;
                    background-color: #fff;
                    transform-origin: right;
                    transform: scaleX(0);
                }

                .slider-progress-bar {
                    position: absolute;
                    top: 0; right: 0;
                    width: 1px; height: 100%;
                    background-color: rgba(255, 255, 255, 0.35);
                }
                .slider-progress {
                    position: absolute;
                    top: 0; left: 50%;
                    transform: translateX(-50%) scaleY(0);
                    width: 3px; height: 100%;
                    background-color: #fff;
                    transform-origin: top;
                }

                @media (max-width: 1000px) {
                    .slider-title {
                        width: 90%;
                        left: 5%;
                        font-size: 0.8em;
                    }
                    .intro h1, .outro h1 {
                        width: 90%;
                        font-size: 2rem;
                    }
                }
                
                /* Cloud Animations for Contact Outro */
                @keyframes floatLeft {
                    0% { transform: translateX(0); }
                    50% { transform: translateX(30px); }
                    100% { transform: translateX(0); }
                }
                @keyframes floatRight {
                    0% { transform: translateX(0); }
                    50% { transform: translateX(-30px); }
                    100% { transform: translateX(0); }
                }
                @keyframes floatSlow {
                    0% { transform: translateX(0) scale(1.1); }
                    50% { transform: translateX(20px) scale(1.15); }
                    100% { transform: translateX(0) scale(1.1); }
                }

                .cloud-anim-left {
                    animation: floatLeft 20s ease-in-out infinite;
                }
                .cloud-anim-right {
                    animation: floatRight 25s ease-in-out infinite;
                }
                .cloud-anim-left-slow {
                    animation: floatSlow 30s ease-in-out infinite;
                }
            </style>
        `;

        // Initialize Globe
        const globeContainer = container.querySelector('.globe-container');
        this.globe = new Globe(globeContainer);

        // Mount React WorldMap
        const mapRoot = container.querySelector('#world-map-root');
        if (mapRoot) {
            this.reactRoot = createRoot(mapRoot);
            this.reactRoot.render(React.createElement(WorldMapDemo));
        }

        // --- SLIDER LOGIC ---
        const initSlider = () => {
            const context = container.querySelector('.services-scroll-slider');
            if (!context) return;

            const slides = [
                {
                    title: "Tour Package",
                    description: "Experience the essence of each destination through our meticulously designed tour packages. Explore the iconic attractions while also delving into the hidden gems that make each place truly special. Whether it’s a Dubai city tour with all excursions or a journey to the exotic landscapes of Kerala, our packages ensure a holistic and immersive travel experience.<br><br>Our tour packages are not generic itineraries but carefully crafted experiences. We invest time and effort into curating every detail, from the destinations you’ll visit to the activities you’ll partake in. This meticulous planning ensures that you get the most out of your trip.",
                    image: "/assets/services/tour-package-hiking.png",
                    link: "#/destinations"
                },
                {
                    title: "Visit Visas",
                    description: "Navigating travel requirements can be complex, which is why we simplify the process of obtaining visit visas. Trust us to handle the necessary paperwork and ensure a smooth travel experience.<br><br>Our visa acquisition services are designed to simplify the often complex and time-consuming process of obtaining visit visas. We bring expertise, efficiency, and a commitment to your convenience, so you can confidently embark on your journey, knowing that the necessary documentation has been handled with care and professionalism. Your peace of mind is our priority, and we aim to make your travel dreams a reality.",
                    image: "/assets/services/visit-visas-8k.png",
                    link: "#/contact"
                },
                {
                    title: "Air Tickets",
                    description: "Seamlessly connect to your desired destinations with our air ticket booking services. We offer convenience, flexibility, and competitive prices to ensure your journey starts off on the right foot.<br><br>We understand that the beginning of your trip often starts with booking the right flights. Our services are built to seamlessly connect you to your desired destinations. We prioritize efficiency, ensuring that you can easily find and book flights to various destinations around the world.",
                    image: "/assets/services/air-tickets-8k.png",
                    link: "#/contact"
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

        // Event Listeners for Toggle
        const btnOurServices = container.querySelector('#btn-our-services');
        const btn3dExperience = container.querySelector('#btn-3d-experience');
        const viewOurServices = container.querySelector('#view-our-services');
        const view3dExperience = container.querySelector('#view-3d-experience');

        const setActive = (is3d) => {
            if (is3d) {
                btn3dExperience.style.background = '#000';
                btn3dExperience.style.color = 'white';
                btnOurServices.style.background = 'transparent';
                btnOurServices.style.color = 'rgba(0,0,0,0.6)';

                view3dExperience.style.opacity = '1';
                view3dExperience.style.pointerEvents = 'auto';

                viewOurServices.style.opacity = '0';
                viewOurServices.style.pointerEvents = 'none';
            } else {
                btnOurServices.style.background = '#000';
                btnOurServices.style.color = 'white';
                btn3dExperience.style.background = 'transparent';
                btn3dExperience.style.color = 'rgba(0,0,0,0.6)';

                viewOurServices.style.opacity = '1';
                viewOurServices.style.pointerEvents = 'auto';

                view3dExperience.style.opacity = '0';
                view3dExperience.style.pointerEvents = 'none';

                // Refresh scrolltrigger when switching back to services view
                ScrollTrigger.refresh();
            }
        };

        btnOurServices.addEventListener('click', () => setActive(false));
        btn3dExperience.addEventListener('click', () => setActive(true));

        // Mount Footer with reveal effect
        this.footer = new Footer();
        this.footer.mount(container, { type: 'reveal' });
    }

    unmount() {
        if (this.globe) {
            this.globe.destroy();
        }
        if (this.reactRoot) {
            this.reactRoot.unmount();
        }
        if (this.sliderTrigger) {
            this.sliderTrigger.kill();
        }
        if (this.footer) {
            this.footer.destroy();
        }
    }
}
