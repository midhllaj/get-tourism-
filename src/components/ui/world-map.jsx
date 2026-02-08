import React from "react";
import { motion } from "motion/react";

export default function WorldMap({ dots = [], lineColor = "#ffffff" }) {
    const svgRef = React.useRef(null);

    // Function to project coordinates (Equirectangular projection for simplicity to match standard map images/dots)
    const project = (lat, lng) => {
        const width = 800;
        const height = 400;
        const x = (lng + 180) * (width / 360);
        const y = (90 - lat) * (height / 180);
        return { x, y };
    };

    const createCurvedPath = (start, end) => {
        const midX = (start.x + end.x) / 2;
        const midY = Math.min(start.y, end.y) - 50; // Curve upwards
        return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
    };

    return (
        <div className="w-full relative aspect-[2/1] rounded-lg overflow-hidden font-sans" style={{ backgroundColor: '#002E5D' }}>
            {/* Background Dots (Simulated World Map) */}
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '10px 10px' }}>
                {/* This is a simple grid pattern as a fallback. For a true "World Map" shape, we'd need a GeoJSON or specific SVG path. 
              Given the constraints, we'll use a stylized subtle grid which is common in tech demos if a full map isn't available. */}
            </div>

            {/* World Map Image/SVG Overlay (Approximation) */}
            {/* Since we don't have a local GeoJSON or SVG asset for the world map, we will use a simplified SVG path for the continents to give context. */}
            <svg viewBox="0 0 800 400" className="w-full h-full absolute inset-0 pointer-events-none">
                {/* Simple abstract continent shapes for context (Equirectangular) */}

                {/* Detailed World Map Pattern (Base64 or Path) - Let's use a standard dotted map pattern if possible. 
              Alternatively, we can render the dots provided by the user. 
          */}

                <image href="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" x="0" y="0" width="800" height="400" opacity="0.2" />

                {dots.map((dot, index) => {
                    const start = project(dot.start.lat, dot.start.lng);
                    const end = project(dot.end.lat, dot.end.lng);

                    return (
                        <g key={index}>
                            {/* Start Point */}
                            <circle cx={start.x} cy={start.y} r={3} fill={lineColor} className="animate-pulse">
                                <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
                            </circle>

                            {/* End Point */}
                            <circle cx={end.x} cy={end.y} r={3} fill={lineColor} className="animate-pulse">
                                <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" delay="1s" />
                                <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" delay="1s" />
                            </circle>

                            {/* Path */}
                            <motion.path
                                d={createCurvedPath(start, end)}
                                fill="none"
                                stroke={lineColor}
                                strokeWidth="1.5"
                                strokeDasharray="5 5"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.6 }}
                                transition={{ duration: 1.5, delay: index * 0.5, ease: "easeInOut" }}
                            />
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}
