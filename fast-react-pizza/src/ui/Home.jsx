import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 sm:my-16">
      <h1 className="text-xl font-semibold text-stone-700 text-center mb-4 md:text-3xl">
        The best pizza.
        <br />
        <div className="text-yellow-400">
          Straight out of the oven, straight to you.
        </div>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
