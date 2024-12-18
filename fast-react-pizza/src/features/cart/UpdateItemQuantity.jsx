import { useDispatch } from 'react-redux'
import Button from '../../ui/Button'
import { decreaseItemQuantity, increaseItemQuantity } from './CartSlice'
export default function UpdateItemQuantity({pizzaId, currentQuantity}) {
  const dispatch = useDispatch()
  return (
    <div className='flex gap-6'>
      <Button type="round" onClick={()=>dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
      <p>quantity {currentQuantity}</p>
      <Button type="round" onClick={()=>dispatch(increaseItemQuantity(pizzaId))}>+</Button>
    </div>
  )
}
