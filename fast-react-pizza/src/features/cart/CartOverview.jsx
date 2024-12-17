import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartItem, getCartPrice } from "./CartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getCartItem)
  const totalCartPrice = useSelector(getCartPrice)
  if(!totalCartQuantity) return null 
  return (
    <div className="bg-slate-400 text-white p-5 uppercase flex justify-between">
      <p className="space-x-4">
        <span>{totalCartQuantity} pizzas</span>
        <span> ${formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
