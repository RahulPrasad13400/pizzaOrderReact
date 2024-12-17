import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../service/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";

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
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  const formErrors = useActionData()
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  const username = useSelector(state=>state.user.username)
  return (
    <div className="max-w-3xl mx-auto text-center flex flex-col gap-4 mt-10">
      <h2 className="text-xl font-semibold mb-8">Ready to order? Let's go!</h2>

      <Form method="POST" className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-10"> 
          <label className="font-semibold">First Name</label>
          <input className="input" type="text" name="customer" defaultValue={username} required />
        </div>

        <div className="flex items-center justify-center gap-10">
          <label className="font-semibold">Phone number</label>
            <input className="input" type="tel" name="phone" required />
          {formErrors?.phone  && <p>{formErrors.phone}</p>}
        </div>
        <div className="flex items-center justify-center gap-10">
          <label className="font-semibold">Address</label>
            <input className="input" type="text" name="address" required />
        </div>

        <div className="flex items-center justify-center gap-2">
          <input 
            className="w-6 h-6"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div className="flex items-center justify-center gap-10">
          <input className="input" type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type='primary' disabled={isSubmitting}>{isSubmitting ? 'place order...' : 'order now'}</Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({request}){
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const order = {
    ...data,
    cart : JSON.parse(data.cart),
    priority : data.priority === 'on'
  }
  const errors ={}
  if(!isValidPhone(order.phone)) errors.phone = 'please enter a valid phone number'
  if(Object.keys(errors).length > 0) return errors
  const newOrder = await createOrder(order)
  return redirect(`/order/${newOrder.id}`)
}

export default CreateOrder;
