// Test ID: IIDSAT
import { useLoaderData } from 'react-router-dom';
import {getOrder} from '../../service/apiRestaurant'
import OrderItem from './OrderItem'
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

function Order() {
  const order = useLoaderData()
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className='space-y-8 px-4 py-6'>
      <div className='flex flex-wrap items-center justify-between'>
        <h2 className='text-xl font-semibold'>Order #{id} {status}</h2>

        <div className='flex gap-2 items-center'>
          {priority && <span className='bg-red-500 tracking-wide text-red-50 px-3 font-semibold uppercase text-sm py-1 rounded-full'>Priority  </span>}
          <span className='bg-green-500 tracking-wide text-red-50 px-3 font-semibold uppercase text-sm py-1 rounded-full'>{status} order {id}</span>
        </div>
      </div>

      <div className='bg-stone-200 px-4 py-6 flex justify-between flex-wrap items-center'>
        <p className='font-semibold'>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>
      <ul className='divide-y divide-stone-400'>
        {cart.map(item=><OrderItem item={item} key={item.id} />)}
      </ul>
      <div className='bg-stone-200 space-y-4 px-4 py-6'>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className='font-semibold'>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function Loader({params}) {
  const order = await getOrder(params.orderId)
  console.log('mier')
  console.log(order)
  return order
}

export default Order;
