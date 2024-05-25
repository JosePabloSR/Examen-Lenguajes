import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
  text: string; // Añadí la propiedad "text" para que el componente compile correctamente
}

export default function Hero(props: HeroProps) {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      <div className="absolute -z-10 inset-0">
        <Image
          src={props.imgData}
          alt={props.imgAlt}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      <h1 className="text-white text-6xl">{props.title}</h1>
      <br />
      <div className="flex items-center space-x-8 animate-marquee">
        <div className="bg-white p-1 rounded-lg shadow-md flex-shrink-0">
          <p className="text-gradient text-4xl">{props.text}</p>
        </div>
      </div>

      <a href="mailto:josepablosolisrodriguez@gmail.com" className="hover:text-gray-400 text-4xl" target="_blank" rel="noopener noreferrer">
        <button className="bg-black hover:bg-white-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          Enviame un correo
        </button>
      </a>
    </div>
  );
}
