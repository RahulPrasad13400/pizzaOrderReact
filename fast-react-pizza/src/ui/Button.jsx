import { Link } from "react-router-dom"

export default function Button({children, disabled, to}) {
    const classname = "uppercase inline-block font-semibold transition-colors duration-300 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-red-900 mb-10 focus:ring-offset-2 active:bg-slate-400"
    if(to) return <Link to={to} className={classname}>{children}</Link>
    return (
    <div>
      <button disabled={disabled} className={classname}>{children}</button>
    </div>
  )
}
