"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// Assuming these are your image imports - replace with your actual imports
import gallery1 from "../../assets/Rectangle 22.svg";
import gallery2 from "../../assets/Rectangle 24.svg";
import gallery3 from "../../assets/Rectangle 22.svg";
import gallery4 from "../../assets/Rectangle 24.svg";

const AutoSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const images = [gallery1, gallery2, gallery3, gallery4, gallery4, gallery4];

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = sliderRef.current;
        console.log("clientWidth", clientWidth);

        if (scrollLeft + clientWidth >= scrollWidth) {
          // scroll back to start
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // scroll by image width (assuming each image is 300px wide with margin)
          sliderRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
        }
      }
    }, 3000); // Slide every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden relative">
      <div
        ref={sliderRef}
        className="flex overflow-x-hidden no-scrollbar scroll-smooth"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="max-md:w-dvw w-[427px] h-[262px] flex-shrink-0 mr-1 relative"
          >
            <Image
              src={img}
              alt={`gallery ${index}`}
              fill
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { AutoSlider };
