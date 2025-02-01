import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";

export default function WorldMap({ dots = [], lineColor = "#0ea5e9" }) {
  const svgRef = useRef(null);

  // Memoized DottedMap SVG to prevent re-renders
  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.2, // Reduce for better rendering speed
      color: "white",
      shape: "circle",
      backgroundColor: "black",
    });
  }, []);

  // Memoized function to project lat/lng to SVG coordinates
  const projectPoint = useMemo(
    () => (lat, lng) => ({
      x: (lng + 180) * (800 / 360),
      y: (90 - lat) * (400 / 180),
    }),
    []
  );

  // Memoized function to create curved paths
  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 40;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] bg-gray-950 rounded-lg relative font-sans">
      {/* Optimized SVG Rendering */}
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full mask-gradient pointer-events-none select-none"
        alt="world map"
        draggable={false}
      />

      {/* Optimized Paths and Dots */}
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <motion.path
              key={`path-${i}`}
              d={createCurvedPath(startPoint, endPoint)}
              fill="none"
              stroke={lineColor}
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 0.7, // Reduced animation time for faster rendering
                delay: 0.3 * i, // Less delay for quicker sequential animations
                ease: "easeOut",
              }}
            />
          );
        })}

        {dots.map((dot, i) => {
          const start = projectPoint(dot.start.lat, dot.start.lng);
          const end = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`points-${i}`}>
              {[start, end].map((point, index) => (
                <g key={`circle-${i}-${index}`}>
                  <circle cx={point.x} cy={point.y} r="2" fill={lineColor} />
                  <circle cx={point.x} cy={point.y} r="2" fill={lineColor} opacity="0.5">
                    <animate attributeName="r" from="2" to="6" dur="1s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.5" to="0" dur="1s" repeatCount="indefinite" />
                  </circle>
                </g>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
