import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"
  const formErrors = useActionData()
  const cart = fakeCart

  return (
    <div className="mt-4">
      <h2 className="mt-8">Ready to order? Lets go!</h2>

      <Form method="POST"  className="space-y-8">
        <div className="mt-8 space-y-4">
          <label>First Name</label>
          <input className="w-full focus:ring focus:ring-yellow-400 outline-none rounded-full px-4 py-2" type="text" name="customer" required />
        </div>

        <div className="space-y-4">
          <label>Phone number</label>
          <div>
            <input className="w-full focus:ring focus:ring-yellow-400 outline-none rounded-full px-4 py-2" type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div className="space-y-4">
          <label>Address</label>
          <div>
            <input  className="w-full focus:ring focus:ring-yellow-400 outline-none rounded-full px-4 py-2" type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            className="h-4 w-4 accent-yellow-400"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority"> Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button className="mb-4 disabled:cursor-not-allowed focus:ring focus:ring-offset-2 focus:ring-yellow-300 focus:bg-yellow-400 outline-none bg-yellow-400 text-stone-800 tracking-wide transition-colors duration-300 px-8 py-2 font-semibold inline-block rounded-full hover:bg-yellow-300" disabled={isSubmitting}>Order now</button>
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
    errors.phone = "Entered phone number is not valid..."
  }

  if(Object.keys(errors).length > 0) return errors 

  console.log(newOrder)
  return redirect(`/order/${newOrder.id}`)

}

export default CreateOrder;
