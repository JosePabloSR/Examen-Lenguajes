
import Image from "next/image";
import Hero from '@/components/hero'
import userimage from "/public/FondoRN.jpg"

export default function Home() {
  return (

    <Hero imgData={userimage} imgAlt = "mainBackground" title = "Bienvenido a mi Portafolio"/>
    
  );
}
