import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'
import UserName from '../features/user/UserName'

export default function Header() {
  return (
    <header className='bg-yellow-400 font-semibold uppercase px-4 py-4 border-b border-stone-400 sm:px-6 flex items-center justify-around'>
        <Link to='/' className='outline-none focus:ouline-none focus:ring focus:ring-offset-2 focus:ring-yellow-200 tracking-widest focus:px-2 focus:py-1'>React pizza</Link>
        <SearchOrder />
        <UserName />
    </header>
  )
}
