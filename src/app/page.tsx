
import Image from "next/image";
import Link from "next/link";
import Hero from '@/components/hero'
import userimage from "/public/mainBackground.jpg"

export default function Home() {
  return (

    <Hero imgData={userimage} imgAlt = "mainBackground" title = "Bienvenido a mi Portafolio"/>
  );
}
