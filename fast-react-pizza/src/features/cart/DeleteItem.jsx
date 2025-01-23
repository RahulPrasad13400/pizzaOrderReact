import { useDispatch } from 'react-redux'
import { deleteItem } from './CartSlice'

export default function DeleteItem({pizzaId}) {
    const dispatch = useDispatch()
  return (
    <button onClick={()=>dispatch(deleteItem(pizzaId))} className="disabled:cursor-not-allowed focus:ring focus:ring-offset-2 focus:ring-yellow-300 focus:bg-yellow-400 outline-none bg-yellow-400 text-stone-800 tracking-wide transition-colors duration-300 px-3 py-1 text-sm inline-block rounded-full hover:bg-yellow-300">Delete</button>

  )
}
