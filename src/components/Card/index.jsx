
"use client";


import Image from "next/image";
import Link from "next/link";
import {CaretRight} from "@phosphor-icons/react";

export function CardComponent({imagedata,title,description,pesanWA}) {
  return (
    <div className=" bg-color-secondary border-color-primary shadow-md shadow-color-primary w-full h-full p-4 md:p-16 rounded-lg border-2">
      <div>
      <Image  className="rounded-lg flex justify-center items-center" style={{height:'300px'}} width={400} height={300} src={imagedata}  alt="image 1" />
      </div>
       
    <div className="flex flex-col space-y-4 mt-4">
      <h5 className="text-3xl font-bold tracking-tight text-color-white dark:text-white text-center">
        {title}
      </h5>
      <p className="font-normal text-color-white">
        {description}
      </p>

      <Link className="flex text-color-primary font-semibold text-xl md:text-2xl hover:text-2xl md:hover:text-3xl hover:text-color-white" href={`https://wa.me/6282254335598?text=${pesanWA}`} target="_blank">Book Now <CaretRight  className="hover:text-color-white text-color-primary" size={32}/></Link> 
      
      </div>
      
      
    </div>
  );
}
