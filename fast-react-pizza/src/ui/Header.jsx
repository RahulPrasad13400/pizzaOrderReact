import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

export default function Header() {
  return (
    <header className="bg-amber-200 px-4 py-7 flex justify-between">
      <Link className="tracking-[0.4rem] uppercase font-pizza" to='/'>Fast react pizza co.</Link>
      <SearchOrder />
      <UserName />
    </header>
  )
}
