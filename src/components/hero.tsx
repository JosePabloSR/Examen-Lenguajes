import type {StaticImageData} from "next/image";
import Image from "next/image";

interface HeroProps {
    imgData: StaticImageData;
    imgAlt: string;
    title: string;
}

export default function Hero(props: HeroProps) {
  return (
    <div className="relative h-screen">
     <div className="absolute -z-10 inset-0">
      <Image
        src = {props.imgData}
        alt = {props.imgAlt}
        fill
        style = {{ objectFit: 'cover'}} 
      />
     </div>
     <div className="pt-48 flex justify-center items-center z-20">
       <h1 className="text-white text-6xl">{props.title}</h1>
     </div>
     <div className="absolute inset-0 bg-gradient-to-l from-slate-700"></div>
    </div>
  );
}