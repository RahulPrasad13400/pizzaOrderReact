import { useState } from 'react';

function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className='text-center space-y-8'>
      <p className='text-sm md:text-base'>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='w-72 h-10 text-center border-none outline-none focus:ring focus:ring-yellow-300 rounded-full'
      />

      {username !== '' && (
        <div>
          <button className="mb-4 disabled:cursor-not-allowed focus:ring focus:ring-offset-2 focus:ring-yellow-300 focus:bg-yellow-400 outline-none bg-yellow-400 text-stone-800 tracking-wide transition-colors duration-300 px-8 py-2 font-semibold inline-block rounded-full hover:bg-yellow-300">Start ordering</button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
