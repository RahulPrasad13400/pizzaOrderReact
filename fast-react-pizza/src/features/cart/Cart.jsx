import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './CartSlice';
import EmptyCart from './EmptyCart';

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const cart = useSelector(getCart);
  const dispath = useDispatch()
  const username = useSelector(store=>store.user.username)
  function handleClearCart(){
    dispath(clearCart())
  }

  if(!cart.length) return <EmptyCart />

  return (
    <div className='mt-10 px-10 md:px-0'>
      <Link className='text-blue-500 text-sm hover:pb-1 hover:text-blue-600 hover:border-b-2 hover:border-b-blue-200' to="/menu">&larr; Back to menu</Link>

      <h2 className='my-4 font-semibold text-xl'>Your cart, {username.toUpperCase()}</h2>

      <ul className='divide-y divide-stone-200 border-b mt-3'>
        {cart.map(item=><CartItem key={item.pizzaId} item={item}/>)}
      </ul>

      <div className='space-x-4 mt-6 '>
        <Link to="/order/new" className="mb-4 disabled:cursor-not-allowed focus:ring focus:ring-offset-2 focus:ring-yellow-300 focus:bg-yellow-400 outline-none bg-yellow-400 text-stone-800 tracking-wide transition-colors duration-300 px-8 py-2 font-semibold inline-block rounded-full hover:bg-yellow-300">Order pizzas</Link>
        <button onClick={handleClearCart} className='w-32 h-10 border-2 border-stone-400 px-2 py-1 rounded-full transition-all duration-300 text-sm hover:bg-yellow-300 hover:border-none hover:font-semibold'>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
