import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-gradient-to-l from-red-500 to-black w-full absolute text-white z-10 shadow-lg">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="font-bold text-3xl">
          Inicio
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/user/aboutme" className="rounded-full bg-black text-white px-4 py-2 hover:bg-gray-800">
            Sobre Mí
          </Link>
          <Link href="/user/mygithub" className="rounded-full bg-black text-white px-4 py-2 hover:bg-gray-800">
            Mis Repositorios
          </Link>
        </div>
      </nav>
    </div>
  );
}
