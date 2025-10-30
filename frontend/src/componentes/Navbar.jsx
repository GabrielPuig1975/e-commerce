// src/componentes/Navbar.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

// Objeto para las categorías de productos (DEBE estar definido ANTES del componente)
const productCategories = [
  { path: '/todos', label: 'Todos' },
  { path: '/tech', label: 'Tech' },
  { path: '/hogar', label: 'Hogar' },
  { path: '/ropa', label: 'Ropa' },
];

// Objeto para las páginas de navegación
const navPages = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

function Navbar() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');
  const { getTotalItems, toggleCart } = useCart();

  const handleCategoryChange = (e) => {
    const path = e.target.value;
    setSelectedCategory(path);
    if (path) {
      navigate(path);
    }
  };

  return (
    <nav className="nav-links flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full">
      {/* Select para categorías de productos */}
      <div className="select-categories w-full sm:w-auto">
        <select 
          onChange={handleCategoryChange} 
          value={selectedCategory} 
          className="p-2 border border-gray-300 rounded bg-white w-full sm:w-auto text-sm sm:text-base"
        >
          <option value="" disabled>Categorías</option>
          {productCategories.map((cat) => (
            <option key={cat.path} value={cat.path}>{cat.label}</option>
          ))}
        </select>
      </div>
      
      {/* Menú de navegación para Home, About, Contact */}
      <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 w-full sm:w-auto">
        {navPages.map((page) => (
          <li key={page.path}>
            <Link 
              to={page.path} 
              className="bg-violet-300 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 rounded-full py-2 px-3 sm:px-4 text-center block text-sm sm:text-base min-w-16 sm:min-w-20"
            >
              {page.label}
            </Link>
          </li>
        ))}
        
        {/* Ícono del carrito */}
        <li>
          <button
            onClick={toggleCart}
            className="relative bg-violet-300 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 rounded-full py-2 px-3 sm:px-4 text-center block text-sm sm:text-base min-w-16 sm:min-w-20"
          >
            🛒
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;