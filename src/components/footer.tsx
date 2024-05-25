

export default function Footer() {
    return (
      <footer className="bg-gray-800 w-full absolute text-white z-10 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Datos de contacto</h3>
            <p>Nombre: Jose Pablo Solís Rodríguez</p>
            <p>Teléfono: +506 8790671</p>
            <p>Email: josepablosolisrodriguez@gmail.com</p>
          </div>
          <img src="MiLogo.png" alt="Mi logo" className="h-14 mr-3" />
          <div>
            <h3 className="text-lg font-bold mb-2">Mis Redes</h3>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <a href="https://www.facebook.com/josepablo.solisrodriguez" className="hover:text-black-400 flex items-center" target="_blank" rel="noopener noreferrer">
            <img src="facebookLogo.png" alt="Logo de Facebook" className="h-6 mr-2" />
                Facebook
              </a>
              <a href="https://www.linkedin.com/in/jose-pablo-sol%C3%ADs-rodr%C3%ADguez-11974730b/" className="hover:text-black-400 flex items-center" target="_blank" rel="noopener noreferrer">
              <img src="LinkedinLogo.png" alt="Logo de Facebook" className="h-6 mr-2" />
                Linkedin
              </a>
              <a href="https://github.com/JosePabloSR" className="hover:text-black-400 flex items-center" target="_blank" rel="noopener noreferrer">
              <img src="GithubLogo.png" alt="Logo de Github" className="h-6 mr-2" />
                Mi Github
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
        <p>&copy; 2024 Jose Pablo Solis Rodríguez. Universidad de Costa Rica</p>
      </div>
      </footer>
    );
  }