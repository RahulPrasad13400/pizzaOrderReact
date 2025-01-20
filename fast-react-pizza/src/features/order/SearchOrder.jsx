import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchOrder() {
    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        if(!query) return 
        navigate(`/order/${query}`)
        setQuery("")
    }

  return <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder='search order' value={query} onChange={e=>setQuery(e.target.value)} className='focus:ring focus:ring-offset-2 focus:ring-yellow-300 text-sm bg-yellow-100 placeholder:text-stone-400 outline-none sm:w-64 h-10 text-center rounded-full tracking-widest' />
    </form>
}
