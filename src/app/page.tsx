
import Image from "next/image";
import Link from "next/link";
import Hero from '@/components/hero'
import Hero2 from "@/components/hero2";
import userimage from "/public/FondoRN.jpg"

export default function Home() {
  return (

    <Hero imgData={userimage} imgAlt = "mainBackground" title = "Bienvenido a mi Portafolio"/>
    
  );
}
