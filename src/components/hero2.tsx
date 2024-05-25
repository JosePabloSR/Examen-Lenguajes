import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

 
interface Hero2Props {
  imgData: StaticImageData;
  imgAlt: string;
  imgData2: StaticImageData;
  imgAlt2: string;
  title: string;
  name: string;
  ubication: string;
  email: string;
  text: string;
}

export default function Hero2(props: Hero2Props) {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <Image 
        src={props.imgData} 
        alt={props.imgAlt} 
        width={400} 
        height={200} 
        className="shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-300" 
      />

      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${props.imgData2.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1
        }}
      />

      <div className="w-full max-w-screen-lg p-8 relative">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">{props.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md flex-shrink-0 hover:scale-110 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2 text-black">Información Personal</h3>
            <p className="text-xl text-black">Nombre: {props.name}</p>
            <p className="text-xl text-black">Ubicación: {props.ubication}</p>
            <p className="text-xl text-black">Correo Electrónico: {props.email}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md flex-shrink-0 hover:scale-110 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2 text-black">Mis Cualidades</h3>
            <ul className="list-disc list-inside text-xl text-black">
              <li>Tengo Nivel B2 de inglés</li>
              <li>Tengo conocimientos sobre ilustración digital</li>
              <li>Intento ayudar a otros cuando tengo la ocasión</li>
              <li>Trato de evitar siempre los conflictos con otros</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md flex-shrink-0 hover:scale-110 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2 text-black">Experiencias laborales</h3>
            <ul className="list-disc list-inside text-xl text-black">
              <li>Atención al cliente</li>
              <li>Digitador de datos</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md flex-shrink-0 hover:scale-110 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2 text-black">Mis certificaciones</h3>
            <ul className="list-disc list-inside text-xl text-black">
              <li>Cibersegurida</li>
              <li>Linux</li>
              <li>Trascrip</li>
              <li>Libre Office Writter</li>
              <li>JavaScript Essentials 1</li>
            </ul>
          </div>
        </div>
        <br />
        <div className="bg-white p-8 rounded-lg shadow-md flex-shrink-0 hover:scale-110 transition-transform duration-300">
          <h3 className="text-xl font-bold mb-2 text-black">Sobre mí</h3>
          <p className="text-xl text-black">{props.text}</p>
        </div>
      </div>
    </div>
  );
}
