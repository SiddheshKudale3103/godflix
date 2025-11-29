import React, { useEffect, useState, useRef } from "react";

// Dynamically load all images from src/assets/images/
const images = import.meta.glob("../assets/images/*.{png,jpg,jpeg,svg}", {
  eager: true,
});
const imageUrls = Object.values(images).map((i) => i.default);

export default function Carousel({ paused, delay }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const total = imageUrls.length;

  // Auto-slide
  useEffect(() => {
    if (paused || total === 0) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, delay);
    return () => clearInterval(timerRef.current);
  }, [paused, delay, total]);

  if (total === 0) {
    return (
      <div className="carousel empty">
        No images found. Add images to <code>src/assets/images/</code>
      </div>
    );
  }

  return (
    <div className="carousel">
      <div className="viewport">
        {imageUrls.map((src, i) => (
          <div key={i} className={"slide" + (i === index ? " active" : "")}>
            <img src={src} alt="" draggable="false" />
          </div>
        ))}
      </div>
    </div>
  );
}
