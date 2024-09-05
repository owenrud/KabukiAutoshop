
"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import banner from "@/images/bannerimg.jpg"

export function CarouselComponent() {
  return (
    <div className="sm:h-64 md:h-96">
      <Carousel >
        <Image src = {banner} width={1000} height={1000}/>
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
  );
}
