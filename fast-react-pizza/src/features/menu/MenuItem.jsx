import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantity } from "../cart/CartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const dispath = useDispatch()
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantity(id))

  function handleClick(){
    const newPizza = {
        pizzaId : id,
        name,
        quantity : 1,
        unitPrice,
        totalPrice : unitPrice * 1
    }
     dispath(addItem(newPizza))
  }

  return (
    <li className="flex gap-4">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'grayscale opacity-70' : ''}`} />
      <div className="flex flex-col grow mr-8">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500">{ingredients.join(', ')}</p>
        <div className="mt-auto flex justify-between items-center">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p className="uppercase text-sm font-medium text-stone-500">Sold out</p>}
      {!currentQuantity || <div className="flex gap-4">
        <UpdateItemQuantity pizzaId={id} />
        <DeleteItem pizzaId={id} />
      </div>}
{   !soldOut &&  !currentQuantity &&   <button onClick={handleClick} className="disabled:cursor-not-allowed focus:ring focus:ring-offset-2 focus:ring-yellow-300 focus:bg-yellow-400 outline-none bg-yellow-400 text-stone-800 tracking-wide transition-colors duration-300 px-3 py-1 text-sm inline-block rounded-full hover:bg-yellow-300">Add to cart</button>
}        </div>
      </div>
    </li>
  );
}

export default MenuItem;
