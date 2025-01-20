import { useNavigate, useRouteError } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  const error = useRouteError()
  console.log(error)

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)} className='text-blue-500 text-sm hover:pb-1 hover:text-blue-600 hover:border-b-2 hover:border-b-blue-200'>&larr; Go back</button>
    </div>
  );
}

export default Error;
