import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SearchOrder() {
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        if(!query) return 
        navigate(`/order/${query}`)
    }
    const [query,setQuery] = useState("")
  return <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder="search order number" value={query} onChange={e=>setQuery(e.target.value)} />
    </form>
}
