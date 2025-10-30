// src/componentes/Header.jsx
import Navbar from './Navbar.jsx';
import Logo from '../../public/Logo.png';

function Header() {
  return (
    <header className="header-container flex flex-col gap-3 sm:flex-row items-center justify-between p-4 bg-yellow-300 shadow-md">
      {/* Logo */}
      <div className="logo-section flex items-center w-full sm:w-auto justify-center sm:justify-start">
        <img src={Logo} alt="Logo" className="logo h-10 w-10 sm:h-12 sm:w-12" />
      </div>
      
      {/* Barra de búsqueda */}
      <div className="flex items-center w-full sm:flex-1 sm:mx-4 md:mx-8 max-w-2xl">
        <div className="relative w-full">
          <input 
            type="text" 
            placeholder="Search..." 
            className="p-2 pr-10 border border-gray-300 rounded bg-white w-full text-sm sm:text-base" 
          />
          <i className="fa-solid fa-magnifying-glass absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg sm:text-xl"></i>
        </div>
      </div>
      
      {/* Navegación */}
      <div className="w-full sm:w-auto">
        <Navbar />
      </div>
    </header>
  );
}

export default Header;