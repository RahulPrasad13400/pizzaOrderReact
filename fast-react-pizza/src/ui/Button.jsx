import { Link } from "react-router-dom"

export default function Button({children, disabled, to, type, onClick}) {
    const base = "uppercase inline-block font-semibold transition-colors duration-300 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-red-900 mb-10 focus:ring-offset-2 active:bg-slate-400"
    const styles = {
      primary : base + "px-4 py-3 sm:px-6 sm:py-4",
      small : base + "py-2.5 px-5",
      secondary : "border-2 border-stone-300 uppercase inline-block font-semibold transition-colors duration-300 text-stone-400 py-2 px-4 rounded hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-900 mb-10 focus:ring-offset-2 active:bg-slate-400"
    }
    if(to) return <Link to={to} className={styles[type]}>{children}</Link>

    if(onClick) return  <div>
                            <button onClick={onClick} disabled={disabled} className={styles[type]}>{children}</button>
                        </div>

    return (
    <div>
      <button disabled={disabled} className={styles[type]}>{children}</button>
    </div>
  )
}
