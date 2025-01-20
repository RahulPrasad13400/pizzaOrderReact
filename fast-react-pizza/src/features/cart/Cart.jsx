import { Link } from 'react-router-dom';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div>
      <Link className='text-blue-500 text-sm hover:pb-1 hover:text-blue-600 hover:border-b-2 hover:border-b-blue-200' to="/menu">&larr; Back to menu</Link>

      <h2 className='my-4'>Your cart, %NAME%</h2>

      <div className='space-x-4'>
        <Link to="/order/new" className="mb-4 disabled:cursor-not-allowed focus:ring focus:ring-offset-2 focus:ring-yellow-300 focus:bg-yellow-400 outline-none bg-yellow-400 text-stone-800 tracking-wide transition-colors duration-300 px-8 py-2 font-semibold inline-block rounded-full hover:bg-yellow-300">Order pizzas</Link>
        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
