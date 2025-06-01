"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/images/mock_sp.png",
  "/images/mock_pc.png",
  "/images/mock_sp_2.png",
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setInterval(() => {
        slider.next();
      }, 8000);
    },
  });

  return (
    <section className="flex flex-col items-center justify-center text-center space-y-6 text-[#CBBFA1] font-serif">
      <Image
        src="/images/title-scroll.svg"
        alt="Seenのロゴ"
        width={338}
        height={106}
        priority
      />

      {/* スライドショー */}
      <div ref={sliderRef} className="keen-slider w-[338px] h-4/5">
        {images.map((src, i) => (
          <div
            key={i}
            className="keen-slider__slide flex items-center justify-center"
          >
            <Image
              src={src}
              alt={`スライド${i + 1}`}
              width={338}
              height={106}
              className="object-contain rounded-lg"
              priority
            />
          </div>
        ))}
      </div>

      {/* ドット */}
      <div className="flex space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === currentSlide ? "bg-[#CBBFA1]" : "bg-[#CBBFA1]/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
