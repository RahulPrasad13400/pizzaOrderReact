import { useSelector } from "react-redux"

export default function UserName() {
  const username = useSelector(state=>state.user.username)
  console.log(username)
  if(!username) return null
  return (
    <div className="font-semibold hidden md:block">
        Hii {username.toUpperCase()}
    </div>
  )
}
