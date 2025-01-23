import { useSelector } from "react-redux"

export default function UserName() {
  const username = useSelector(store=>store.user.username)
  if(!username) return null 
  return (
    <div className="tracking-widest text-sm font-semibold hidden md:block">
      {username}
    </div>
  )
}
