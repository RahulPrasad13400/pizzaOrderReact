import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/CartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch()
  const currentQuantity = useSelector(getCurrentQuantityById(id))
  const isCart = currentQuantity > 0
  function handleAddToCart(){
    const newItem = {
      pizzaId : id,
      name,
      quantity : 1,
      unitPrice,
      totalPrice : unitPrice
    }
    dispatch(addItem(newItem))  
  }
  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`} />
      <div className="flex flex-col grow">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}
          {!soldOut && <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity}/>}
          {isCart && <DeleteItem pizzaId={id}/>}
        {!soldOut && !isCart && <Button onClick={handleAddToCart} type="small">Add to cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
