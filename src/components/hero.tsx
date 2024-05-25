import type {StaticImageData} from "next/image";
import Image from "next/image";

interface HeroProps {
    imgData: StaticImageData;
    imgAlt: string;
    title: string;
}

export default function Hero(props: HeroProps) {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
     <div className="absolute -z-10 inset-0">
      <Image
        src = {props.imgData}
        alt = {props.imgAlt}
        fill
        style = {{ objectFit: 'cover'}} 
      />
     </div>

<h1 className="text-white text-6xl">{props.title}</h1>
<br />
<div className="flex items-center space-x-8 animate-marquee">
 <div className="bg-white p-1 rounded-lg shadow-md flex-shrink-0">
<p className="text-gradient text-4xl">{props.text}</p>
</div>
</div>
</div>
  );
}