import { useFetcher } from 'react-router-dom'
import { updateOrder } from '../../services/apiRestaurant'

export default function UpdateOrder({order}) {
    const fetcher = useFetcher()

  return (
    <fetcher.Form method='PATCH'>
        <button className='bg-yellow-400 text-black px-6 py-3 font-semibold rounded-full'>
            make priority 
        </button>
    </fetcher.Form>
  )
}

export async function action({request, params}){
    const data = {priority : true}
    updateOrder(params.orderId, data)
    return null 
}