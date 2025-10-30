import { useCart } from '../context/CartContext';

export default function Todos() {
  const { addToCart } = useCart();

  const productos = [
    {
      id: 1,
      nombre: 'Producto 1',
      precio: 10.99,
      image: './src/assets/descargar.jpeg',
      desc: 'Descripción del Producto 1',
    },
    {
      id: 2,
      nombre: 'Producto 2',
      precio: 19.99,
      image: './src/assets/descargar.jpeg',
      desc: 'Descripción del Producto 2',
    },
    {
      id: 3,
      nombre: 'Producto 3',
      precio: 5.49,
      image: './src/assets/descargar.jpeg',
      desc: 'Descripción del Producto 3',
    }
  ];

  const handleAddToCart = (producto, quantity) => {
    for (let i = 0; i < quantity; i++) {
      addToCart(producto);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {productos.map((producto) => (
          <div key={producto.id} className="border rounded-lg p-4 w-full max-w-[320px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[340px]">
            <h2 className="text-xl font-semibold mb-2 bg-amber-300 text-center rounded-md">{producto.nombre}</h2>
            <p className="text-gray-700 mb-3">${producto.precio.toFixed(2)}</p>
            <img
              className="aspect-[4/3] object-cover rounded-lg w-full mb-3"
              src={producto.image}
              alt={producto.nombre}
            />
            <p className="text-gray-600 text-sm h-12 overflow-hidden">{producto.desc}</p>
            <div className="shop flex justify-end mt-3">
              <input 
                type="number" 
                min="1" 
                defaultValue="1" 
                className="border rounded w-16 mr-2 text-center" 
                id={`quantity-${producto.id}`}
              />
              <button 
                className="bg-sky-950 text-white py-2 px-4 rounded hover:bg-sky-800"
                onClick={() => {
                  const quantityInput = document.getElementById(`quantity-${producto.id}`);
                  const quantity = parseInt(quantityInput.value) || 1;
                  handleAddToCart(producto, quantity);
                }}
              >
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}