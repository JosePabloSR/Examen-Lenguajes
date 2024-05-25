

import Link from "next/link";


export default function Header(){
    return(

        
        <div className="bg-gradient-to-l from-red-500 to-black w-full absolute text-white z-10 shadow-lg">
            <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
                <Link href="/" className="font-bold text-3xl"> Inicio </Link>
                <div className="space-x-4 text-xl">
                    <Link href="gallery">Mis Certificados</Link>
                    <Link href="user/aboutme">Sobre Mi</Link>
                     <Link href="user/mygithub">Mis Repositorios</Link>   
                </div>
            </nav> 
        </div>
    )
}