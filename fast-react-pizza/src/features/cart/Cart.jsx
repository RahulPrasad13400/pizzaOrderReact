import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './CartSlice';
import EmptyCart from './EmptyCart'

function Cart() {
  const username = useSelector(state=>state.user.username)
  const cart = useSelector(getCart)
  const dispatch = useDispatch()

  function handleClearCart(){
    dispatch(clearCart())
  }

  if(!cart.length) return <EmptyCart />

  return (
    <div>
      <LinkButton to='/menu' >&larr; back to menu</LinkButton>
      <h2 className='mt-10 mb-10 text-xl font-semibold'>Your cart, {username[0].toUpperCase() + username.slice(1)}</h2>
      <ul className='divide-y divide-stone-300 border-b border-stone-300 '>
        {cart.map(item=><CartItem key={item.pizzaId} item={item}/>)}
      </ul>
      <div className='mt-10 flex gap-10 items-center'>
        {/* <Link to="/order/new" className='input'>Order pizzas</Link> */}
        <Button to='/order/new' type='primary'>Order pizzas</Button>
        <Button type='secondary' onClick={handleClearCart}>clear</Button>
      </div>
    </div>
  );
}

export default Cart;
