import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoading, ingredients }) {
  const { quantity, name, totalPrice } = item;
  console.log(ingredients)
  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
         { isLoading ? <p>Loading..</p> : <p>{ingredients?.join(', ')}</p>}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
        
      </div>
    </li>
  );
}

export default OrderItem;
