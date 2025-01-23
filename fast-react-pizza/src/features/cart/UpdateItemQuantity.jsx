import { useDispatch, useSelector } from "react-redux"
import { decreaseItemQuantity, getCurrentQuantity, increaseItemQuantity } from "./CartSlice"

export default function UpdateItemQuantity({pizzaId}) {
    const dispatch = useDispatch()
    const currentQuantity = useSelector(getCurrentQuantity(pizzaId))
    console.log(currentQuantity)
  return (
    <div className="flex gap-2 items-center">
      <button onClick={()=>dispatch(decreaseItemQuantity(pizzaId))} className="text-sm bg-yellow-300 rounded-full text-black w-6 h-6">-</button>
      <span>{currentQuantity}</span>
      <button  onClick={()=>dispatch(increaseItemQuantity(pizzaId))}  className="text-sm bg-yellow-300 rounded-full text-black w-6 h-6">+</button>
    </div>
  )
}
