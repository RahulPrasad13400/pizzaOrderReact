import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartQuantity, getTotalPrice } from "./CartSlice";

function CartOverview() {
  const pizzas = useSelector(getTotalCartQuantity)
  const totalPrice = useSelector(getTotalPrice)

  if(!pizzas) return null 

  return (
    <div className="bg-stone-800 text-stone-200 px-4 py-4 sm:px-6 flex items-center justify-between">
      <p className="text-stone-300 font-semibold uppercase space-x-2 md:text-base">
        <span>{pizzas} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
