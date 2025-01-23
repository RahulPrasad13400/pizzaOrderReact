import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className='px-4 py-3'>
      <Link className=' text-blue-500 text-sm hover:pb-1 hover:text-blue-600 hover:border-b-2 hover:border-b-blue-200' to="/menu">&larr; Back to menu</Link>

      <p className='font-semibold mt-10'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
