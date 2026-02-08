import * as THREE from 'three';
import { countries } from '../data/countries.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default class Globe {
    constructor(container) {
        this.container = container;

        // Scene
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        this.camera.position.z = 2.2; // Slightly closer for impact

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        container.appendChild(this.renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); // Low ambient for contrast
        this.scene.add(ambientLight);

        const sunLight = new THREE.DirectionalLight(0xffffff, 1.5);
        sunLight.position.set(5, 3, 5);
        this.scene.add(sunLight);

        // Globe Group
        this.globeGroup = new THREE.Group();
        this.scene.add(this.globeGroup);

        // Texture Loader
        const loader = new THREE.TextureLoader();

        // Background
        this.scene.background = new THREE.Color(0x000000);

        // 1. Earth Sphere (Realistic High-Poly)
        const earthGeometry = new THREE.SphereGeometry(1, 128, 128);
        const earthMaterial = new THREE.MeshPhongMaterial({
            map: loader.load('textures/earth_daymap.jpg'),
            specularMap: loader.load('textures/earth_specular.jpg'),
            normalMap: loader.load('textures/earth_normal.jpg'),
            specular: new THREE.Color(0x333333),
            shininess: 25 // Wetter ocean look
        });
        this.globe = new THREE.Mesh(earthGeometry, earthMaterial);
        this.globeGroup.add(this.globe);

        // 2. Cloud Layer
        const cloudGeometry = new THREE.SphereGeometry(1.005, 128, 128); // Closer to surface
        const cloudMaterial = new THREE.MeshPhongMaterial({
            map: loader.load('textures/earth_clouds.png'),
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        this.clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
        this.globeGroup.add(this.clouds);

        // 3. Atmosphere Glow
        const atmosphereMaterial = new THREE.ShaderMaterial({
            vertexShader: `
                varying vec3 vNormal;
                void main() {
                    vNormal = normalize(normalMatrix * normal);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                varying vec3 vNormal;
                void main() {
                    float intensity = pow(0.7 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
                    gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity * 1.5;
                }
            `,
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide,
            transparent: true
        });

        const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(1.2, 64, 64), atmosphereMaterial);
        this.scene.add(atmosphere);

        // Controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.enableZoom = true;
        this.controls.zoomSpeed = 0.8;
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 0.5;
        this.controls.minDistance = 1.25; // Close enough to see details
        this.controls.maxDistance = 6;
        this.controls.enablePan = false; // Keep globe centered

        // Markers
        this.markers = [];
        this.addMarkers();

        // Stars
        this.createStars();

        // Load GeoJSON (Overlay style)
        this.loadGeoJSON();

        // Interaction
        this.raycaster = new THREE.Raycaster();
        this.mouseVector = new THREE.Vector2();

        // Animation Loop
        this.animate = this.animate.bind(this);
        this.animate();

        // Event Listeners
        this.handleResize = this.handleResize.bind(this);
        window.addEventListener('resize', this.handleResize);

        this.renderer.domElement.addEventListener('click', (e) => this.onClick(e), false);
        this.renderer.domElement.addEventListener('mousemove', (e) => this.onMouseMove(e), false);
    }

    // Convert Lat/Lon to 3D Vector (Adjusted for texture mapping)
    latLonToVector3(lat, lon, radius) {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);

        // Flip X to align with texture map
        const x = -(radius * Math.sin(phi) * Math.cos(theta));
        const z = (radius * Math.sin(phi) * Math.sin(theta));
        const y = (radius * Math.cos(phi));

        return new THREE.Vector3(x, y, z);
    }

    addMarkers() {
        const markerGeo = new THREE.SphereGeometry(0.015, 16, 16);
        const markerMat = new THREE.MeshBasicMaterial({ color: 0xffd700 }); // Bright Gold

        Object.values(countries).forEach(country => {
            if (country.lat && country.lon) {
                const pos = this.latLonToVector3(country.lat, country.lon, 1.02); // Above clouds

                const marker = new THREE.Mesh(markerGeo, markerMat.clone());
                marker.position.copy(pos);
                marker.userData = { id: country.id, name: country.name };

                this.globeGroup.add(marker);
                this.markers.push(marker);
            }
        });
    }

    createStars() {
        const starGeo = new THREE.BufferGeometry();
        const starCount = 2000;
        const posArray = new Float32Array(starCount * 3);

        for (let i = 0; i < starCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 50; // Widen starfield
        }

        starGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const starMat = new THREE.PointsMaterial({
            size: 0.02,
            color: 0xffffff,
            transparent: true,
            opacity: 0.8
        });

        this.stars = new THREE.Points(starGeo, starMat);
        this.scene.add(this.stars);
    }

    async loadGeoJSON() {
        try {
            const response = await fetch('/world.geojson');
            const data = await response.json();
            this.drawCountries(data);
        } catch (error) {
            console.error("Failed to load GeoJSON:", error);
        }
    }

    drawCountries(data) {
        // Subtle white borders floating just above surface
        const material = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.15 });
        const group = new THREE.Group();

        data.features.forEach(feature => {
            const geometry = feature.geometry;
            if (geometry.type === 'Polygon') {
                this.drawPolygon(geometry.coordinates, material, group);
            } else if (geometry.type === 'MultiPolygon') {
                geometry.coordinates.forEach(coords => {
                    this.drawPolygon(coords, material, group);
                });
            }
        });

        this.globeGroup.add(group);
    }

    drawPolygon(coordinates, material, group) {
        coordinates.forEach(ring => {
            const points = [];
            ring.forEach(coord => {
                const [lon, lat] = coord;
                const pos = this.latLonToVector3(lat, lon, 1.002); // Barely above surface
                points.push(pos);
            });

            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const line = new THREE.Line(geometry, material);
            group.add(line);
        });
    }

    onMouseMove(event) {
        this.updateRaycaster(event);
    }

    onClick(event) {
        if (this.controls) this.controls.autoRotate = false;

        const intersects = this.updateRaycaster(event);
        if (intersects.length > 0) {
            const object = intersects[0].object;
            if (object.userData && object.userData.id) {
                window.location.hash = `/country/${object.userData.id}`;
            }
        }
    }

    updateRaycaster(event) {
        const rect = this.renderer.domElement.getBoundingClientRect();
        this.mouseVector.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouseVector.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        this.raycaster.setFromCamera(this.mouseVector, this.camera);
        const intersects = this.raycaster.intersectObjects(this.markers);

        if (intersects.length > 0) {
            this.container.style.cursor = 'pointer';
            intersects[0].object.scale.set(2, 2, 2);
        } else {
            this.container.style.cursor = 'default';
            this.markers.forEach(m => {
                m.scale.set(1, 1, 1);
            });
        }
        return intersects;
    }

    handleResize() {
        if (!this.container) return;
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }

    animate() {
        if (!this.renderer) return;
        requestAnimationFrame(this.animate);

        if (this.controls) this.controls.update();

        // 1. Rotate Cloud Layer independently
        if (this.clouds) {
            this.clouds.rotation.y += 0.0003;
        }

        // 2. Subtle Star Rotation
        if (this.stars) {
            this.stars.rotation.y -= 0.0001;
        }

        this.renderer.render(this.scene, this.camera);
    }

    destroy() {
        window.removeEventListener('resize', this.handleResize);
        if (this.controls) this.controls.dispose();
        this.renderer.dispose();
        if (this.container && this.renderer.domElement) {
            this.container.removeChild(this.renderer.domElement);
        }
        this.renderer = null;
    }
}
