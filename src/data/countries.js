export const countries = {
    dubai: {
        name: "Dubai",
        id: "dubai",
        tagline: "The City of Gold",
        description: "Experience the ultimate fusion of tradition and futuristic vision. From the soaring heights of the Burj Khalifa to the tranquil dunes of the Arabian Desert, Dubai offers a luxury escape like no other.",
        heroImage: "/dubai.jpg",
        highlights: [
            { title: "Burj Khalifa", desc: "Touch the sky from the world's tallest tower.", image: "/assets/destinations/dubai/burj-khalifa.png" },
            { title: "Palm Jumeirah", desc: "An island wonder of luxury living.", image: "/assets/destinations/dubai/palm-jumeirah.png" },
            { title: "Desert Safari", desc: "Golden dunes and Arabian nights.", image: "/assets/destinations/dubai/desert-safari.png" }
        ],
        whyUs: "At Great Escapes Tourism, we curate Dubai experiences that go beyond the ordinary. Our exclusive partnerships grant you VIP access to the city's most coveted attractions, from private yacht charters around the Palm to seamless, skip-the-line entry at the Burj Khalifa. We handle every detail—luxury transport, personalized itineraries, and 24/7 support—so your only focus is enjoying the magic of Dubai.",
        activities: [
            { title: "Skydive Dubai", desc: "Freefall over the iconic Palm Jumeirah.", image: "/assets/destinations/dubai/skydive.png" },

            { title: "Burj Khalifa", desc: "Visit the observation deck on the 148th floor.", image: "/assets/destinations/dubai/burj-khalifa.png" },
            { title: "Dubai Aquarium", desc: "Underwater zoo with thousands of marine animals.", image: "/assets/destinations/dubai/aquarium.png" },
            { title: "Dubai Frame", desc: "A golden picture frame framing old and new Dubai.", image: "/assets/destinations/dubai/frame.png" },
            { title: "Hot Air Balloon", desc: "Float over the desert at sunrise.", image: "/assets/destinations/dubai/balloon.png" }
        ],
        lat: 25.2048,
        lon: 55.2708,
        continent: "Asia",
        iso: "ae"
    },
    kerala: {
        name: "Kerala",
        id: "kerala",
        tagline: "God's Own Country",
        description: "A tropical paradise of waving palms and wide sandy beaches. Cruise the serene backwaters on a traditional houseboat, rejuvenate with Ayurveda, and explore the misty tea gardens of Munnar.",
        heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=3840&auto=format&fit=crop",
        highlights: [
            { title: "Alleppey", desc: "Cruise through the Venice of the East on a traditional houseboat.", image: "/assets/destinations/kerala/alleppey.png" },
            { title: "Munnar", desc: "Wander through rolling hills of emerald tea plantations.", image: "/assets/destinations/kerala/munnar.png" },
            { title: "Kochi", desc: "Explore colonial history and iconic Chinese fishing nets.", image: "/assets/destinations/kerala/kochi.png" },
            { title: "Wayanad", desc: "Discover misty mountains, waterfalls, and wildlife sanctuaries.", image: "/assets/destinations/kerala/wayanad.png" },
            { title: "Varkala", desc: "Relax on cliff-top beaches overlooking the Arabian Sea.", image: "/assets/destinations/kerala/varkala.png" },
            { title: "Thekkady", desc: "Experience the wild at Periyar National Park.", image: "/assets/destinations/kerala/thekkady.png" }
        ],
        lat: 10.8505,
        lon: 76.2711,
        continent: "Asia",
        iso: "in"
    },
    armenia: {
        name: "Armenia",
        id: "armenia",
        tagline: "The Land of Noah",
        description: "Discover the world's first Christian nation, home to ancient monasteries, stunning mountain landscapes, and the legendary Mount Ararat. A journey through history and hospitality.",
        heroImage: "/assets/destinations/armenia-8k.png",
        highlights: [
            { title: "Yerevan", desc: "The Pink City.", image: "/assets/destinations/armenia/yerevan.png" },
            { title: "Lake Sevan", desc: "The jewel of Armenia.", image: "/assets/destinations/armenia/lake-sevan.png" },
            { title: "Tatev", desc: "Monastery in the clouds.", image: "/assets/destinations/armenia/tatev.png" }
        ],
        lat: 40.0691,
        lon: 45.0382,
        continent: "Europe",
        iso: "am"
    },
    salalah: {
        name: "Salalah",
        id: "salalah",
        tagline: "Oman's Green Jewel",
        description: "Escape to the lush green landscapes of Salalah, especially during the Khareef season. Waterfalls, mist-covered mountains, and pristine beaches await in this unique Arabian paradise.",
        heroImage: "/assets/destinations/salalah-8k.png",
        highlights: [
            { title: "Wadi Darbat", desc: "Cascading waterfalls.", image: "/assets/destinations/salalah/wadi-darbat.png" },
            { title: "Mughsail Beach", desc: "Blowholes and cliffs.", image: "/assets/destinations/salalah/mughsail-beach.png" },
            { title: "Frankincense", desc: "Land of ancient trade.", image: "/assets/destinations/salalah/frankincense.png" }
        ],
        lat: 17.0151,
        lon: 54.0924,
        continent: "Asia",
        iso: "om"
    },
    azerbaijan: {
        name: "Azerbaijan",
        id: "azerbaijan",
        tagline: "The Land of Fire",
        description: "Where East meets West, Azerbaijan offers a contrast of modern architecture and ancient heritage. Explore the mud volcanoes, the Caspian coast, and the rich culture.",
        heroImage: "/assets/destinations/azerbaijan-8k.png",
        highlights: [
            { title: "Gobustan", desc: "Ancient rock carvings.", image: "/assets/destinations/azerbaijan/gobustan.png" },
            { title: "Mud Volcanoes", desc: "Natural wonder.", image: "/assets/destinations/azerbaijan/mud-volcanoes.png" },
            { title: "Sheki", desc: "Silk Road heritage.", image: "/assets/destinations/azerbaijan/sheki.png" }
        ],
        lat: 40.1431,
        lon: 47.5769,
        continent: "Asia",
        iso: "az"
    },
    bali: {
        name: "Bali",
        id: "bali",
        tagline: "Island of the Gods",
        description: "Find your zen in the lush rice terraces of Ubud or surf the legendary waves of Uluwatu. Bali is a spiritual awakening wrapped in tropical paradise.",
        heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000&auto=format&fit=crop",
        highlights: [
            { title: "Ubud", desc: "Cultural heart and artistic hub.", image: "/assets/destinations/bali/ubud.png" },
            { title: "Uluwatu", desc: "Cliffs, temples, and ocean views.", image: "/assets/destinations/bali/uluwatu.png" }
        ],
        lat: -8.4095,
        lon: 115.1889,
        continent: "Asia",
        iso: "id"
    },
    srilanka: {
        name: "Sri Lanka",
        id: "srilanka",
        tagline: "Pearl of the Indian Ocean",
        description: "A diverse island nation teeming with wildlife, golden beaches, and ancient ruins. Take the scenic train ride to Ella or climb the Sigiriya rock fortress.",
        heroImage: "/sri-lanka.jpg",
        highlights: [
            { title: "Sigiriya", desc: "Lion Rock fortress.", image: "/assets/destinations/srilanka/sigiriya.png" },
            { title: "Ella", desc: "Scenic mountain views.", image: "/assets/destinations/srilanka/ella.png" },
            { title: "Mirissa", desc: "Whale watching.", image: "/assets/destinations/srilanka/mirissa.png" }
        ],
        lat: 7.8731,
        lon: 80.7718,
        continent: "Asia",
        iso: "lk"
    },
    singapore: {
        name: "Singapore",
        id: "singapore",
        tagline: "City in a Garden",
        description: "A futuristic metropolis where nature and technology blend seamlessly. Marvel at the Supertrees, shop on Orchard Road, and taste the world's best street food.",
        heroImage: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2000&auto=format&fit=crop",
        highlights: [
            { title: "Marina Bay", desc: "Iconic skyline.", image: "/assets/destinations/singapore/marina-bay.png" },
            { title: "Gardens by the Bay", desc: "Supertrees and cloud forest.", image: "/assets/destinations/singapore/gardens-by-the-bay.png" },
            { title: "Sentosa", desc: "Island resort fun.", image: "/assets/destinations/singapore/sentosa.png" }
        ],
        lat: 1.3521,
        lon: 103.8198,
        continent: "Asia",
        iso: "sg"
    },
    almaty: {
        name: "Almaty",
        id: "almaty",
        tagline: "The City of Apples",
        description: "Kazakhstan's cultural hub, set against the backdrop of the Trans-Ili Alatau mountains. Discover a city of leafy avenues, chic cafes, and outdoor adventures.",
        heroImage: "/almaty.jpg",
        highlights: [
            { title: "Big Almaty Lake", desc: "Turquoise alpine lake.", image: "/assets/destinations/almaty/big-almaty-lake.png" },
            { title: "Medeu", desc: "Highest skating rink.", image: "/assets/destinations/almaty/medeu.png" },
            { title: "Kok Tobe", desc: "Panoramic city views.", image: "/assets/destinations/almaty/kok-tobe.png" }
        ],
        lat: 43.2220,
        lon: 76.8512,
        continent: "Asia",
        iso: "kz"
    },
    thailand: {
        name: "Thailand",
        id: "thailand",
        tagline: "Land of Smiles",
        description: "Golden temples, bustling street markets, and tropical islands. Thailand offers an adventure for every sense.",
        heroImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2000&auto=format&fit=crop",
        highlights: [
            { title: "Bangkok", desc: "Vibrant street life and shrines.", image: "/assets/destinations/thailand/bangkok.png" },
            { title: "Phuket", desc: "Mountainous island rainforests.", image: "/assets/destinations/thailand/phuket.png" }
        ],
        lat: 15.8700,
        lon: 100.9925,
        continent: "Asia",
        iso: "th"
    },
    baku: {
        name: "Baku",
        id: "baku",
        tagline: "City of Winds",
        description: "The capital of Azerbaijan, known for its medieval walled city and contemporary landmarks like the Flame Towers. A vibrant city on the Caspian Sea.",
        heroImage: "/baku.jpg",
        highlights: [
            { title: "Flame Towers", desc: "Modern architectural icon.", image: "/assets/destinations/baku/flame-towers.png" },
            { title: "Old City", desc: "UNESCO World Heritage site.", image: "/assets/destinations/baku/old-city.png" },
            { title: "Boulevard", desc: "Seaside promenade.", image: "/assets/destinations/baku/boulevard.png" }
        ],
        lat: 40.4093,
        lon: 49.8671,
        continent: "Asia",
        iso: "az"
    },
    turkey: {
        name: "Turkey",
        id: "turkey",
        tagline: "Where East Meets West",
        description: "A mesmerizing blend of history and culture. From the hot air balloons of Cappadocia to the bazaars of Istanbul.",
        heroImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2000&auto=format&fit=crop",
        highlights: [
            { title: "Cappadocia", desc: "Magical fairy chimneys.", image: "/assets/destinations/turkey/cappadocia.png" },
            { title: "Istanbul", desc: "Historic mosques and markets.", image: "/assets/destinations/turkey/istanbul.png" }
        ],
        lat: 38.9637,
        lon: 35.2433,
        continent: "Europe",
        iso: "tr"
    }
};

export const getCountry = (id) => {
    return countries[id.toLowerCase()] || null;
};
