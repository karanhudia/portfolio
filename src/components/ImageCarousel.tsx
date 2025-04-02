"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/assets/travel1.jpg",
    "/assets/travel2.jpg",
    "/assets/travel3.JPG",
    "/assets/travel4.JPG",
    "/assets/travel5.JPG",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-x-8 inset-y-16 md:inset-y-20 z-0">
      <div className="relative w-full h-full rounded-xl overflow-hidden border border-[#3E3E3E] shadow-2xl">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Travel photo ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
