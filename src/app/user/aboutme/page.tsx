// Importa los módulos necesarios si es necesario
import React from 'react';
import Hero2 from '@/components/hero2'
import galleryImg from "/public/Foto.png";
import galleryImg2 from "/public/Background2.jpg";

// Define tu componente AboutMe
export default function AboutMe() {
  return (
    <div>
        
    <Hero2 imgData={galleryImg}
    imgAlt="Foto"
    imgData2={galleryImg2}
    imgAlt2="Fondo de la página"
    title="Sobre mí" 
    name="Jose Pablo Solís Rodríguez" 
    ubication="Costa Rica, Puntarenas, Cantón Golfito, Distrito Golfito" 
    email="josepablosolisrodriguez@gmail.com"
    text="Me gusta trabajar en equipo siempre que pueda, 
    si tengo la oportunidad de ayudar lo hago. Me inclino más hacia el apartado de diseño en los proyectos y
     también el de mantenimiento de equipos"
    />
  </div>
  );
}
