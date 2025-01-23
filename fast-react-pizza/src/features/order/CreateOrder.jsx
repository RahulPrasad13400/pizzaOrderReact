import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { useSelector } from "react-redux";
import { clearCart, getCart, getTotalPrice } from "../cart/CartSlice";
import store from '../../store'
import EmptyCart from "../cart/EmptyCart";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"
  const formErrors = useActionData()
  const totalPrice = useSelector(getTotalPrice)
  // const dispatch = useDispatch()

  const cart = useSelector(getCart)

  const {username, position, address, status : addressStatus, error : errorAddress} = useSelector(store=>store.user)

  const isLoadingAddress = addressStatus === "loading"
  
  if(!cart.length) return <EmptyCart />

  return (
    <div className="mt-4">
      <h2 className="mt-8 text-xl font-semibold">Ready to order? Lets go!</h2>

      <Form method="POST"  className="space-y-8">
        <div className="mt-8 space-y-4">
          <label className="font-semibold">First Name</label>
          <input defaultValue={username} className="font-semibold tracking-widest w-full focus:ring focus:ring-yellow-400 outline-none rounded-full px-4 py-2" type="text" name="customer" required />
        </div>

        <div className="space-y-4">
          <label className="font-semibold">Phone number</label>
          <div>
            <input className="font-semibold tracking-widest w-full focus:ring focus:ring-yellow-400 outline-none rounded-full px-4 py-2" type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <p className="text-red-600 bg-red-100 p-2 rounded">{formErrors.phone}</p>}
        </div>

        <div className="space-y-4">
          <label className="font-semibold">Address</label>
          <div>
            <input defaultValue={address} disabled={isLoadingAddress} className="font-semibold tracking-widest w-full focus:ring focus:ring-yellow-400 outline-none rounded-full px-4 py-2" type="text" name="address" required />
          </div>
          {addressStatus === "error" && <p className="text-red-600 bg-red-100 p-2 rounded">{errorAddress}</p>}

{    !position.latitude && <button disabled={isLoadingAddress} style={{color : "blue"}} onClick={(e)=>{
            e.preventDefault()
            // dispatch(fetchAddress())
          }}>Get Position</button>}

        </div>

        <div className="flex gap-4 items-center"> 
          <input
            className="h-4 w-4 accent-yellow-400"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-semibold"> Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input type="hidden" value={position.latitude ? `${position.latitude} ${position.longitude}` : ''} />
          <button className="mb-4 disabled:cursor-not-allowed focus:ring focus:ring-offset-2 focus:ring-yellow-300 focus:bg-yellow-400 outline-none bg-yellow-400 text-stone-800 tracking-wide transition-colors duration-300 px-8 py-2 font-semibold inline-block rounded-full hover:bg-yellow-300" disabled={isSubmitting}>Order now  ${totalPrice} </button>
        </div>
      </Form>
    </div>
  );
}

export async function action({request}){ 

  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const order = {...data, cart : JSON.parse(data.cart), priority : data.priority === "on" }
  const newOrder = await createOrder(order)

  const errors = {}
  if(!isValidPhone(newOrder.phone)){
    errors.phone = "Entered phone number is not valid . . ."
  }

  if(Object.keys(errors).length > 0) return errors 

  // store.dispath(clearCart())
  return redirect(`/order/${newOrder.id}`)

}

export default CreateOrder;
