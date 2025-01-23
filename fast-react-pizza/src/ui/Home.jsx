import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import { Link } from "react-router-dom";

function Home() {
  const username = useSelector(store=>store.user.username)
  return (
    <div className="my-10 sm:my-16 ">
      <h1 className="text-xl font-semibold text-stone-700 text-center mb-4 md:text-3xl">
        The best pizza.
        <br />
        <div className="text-yellow-400">
          Straight out of the oven, straight to you.
        </div>
      </h1>
      <div className="mt-10 text-center">
      {username === '' ? <CreateUser /> : <Link  className="mb-4 disabled:cursor-not-allowed focus:ring focus:ring-offset-2 focus:ring-yellow-300 focus:bg-yellow-400 outline-none bg-yellow-400 text-stone-800 tracking-wide transition-colors duration-300 px-8 py-2 font-semibold inline-block rounded-full hover:bg-yellow-300" to='/menu'>continue ordering {username.toUpperCase()}</Link>}
      </div>
    </div>
  );
}

export default Home;
