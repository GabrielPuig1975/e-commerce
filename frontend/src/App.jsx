// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './componentes/Header.jsx';
import Cart from './componentes/Cart.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Todos from './pages/Todos.jsx';
import Ropa from './pages/Ropa.jsx';
import Tech from './pages/Tech.jsx';
import Hogar from './pages/Hogar.jsx';

function App() {
  return (
    <CartProvider>
      <Header />
      <Cart /> {/* Modal del carrito - se mostrará cuando esté activo */}
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/ropa" element={<Ropa />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/hogar" element={<Hogar />} />
        </Routes>
      </main>
    </CartProvider>
  );
}

export default App;