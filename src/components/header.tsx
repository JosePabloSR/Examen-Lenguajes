

import Link from "next/link";


export default function Header(){
    return(
        <div className="w-full absolute text-white z-10">
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