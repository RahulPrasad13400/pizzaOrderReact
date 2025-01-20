import { useLoaderData } from 'react-router-dom';
import {getMenu} from '../../services/apiRestaurant'
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData()
  return <ul className='my-4 h-[78vh] overflow-scroll overflow-x-hidden space-y-4'>{menu.map(pizza=><MenuItem key={pizza.id} pizza={pizza}/>)}</ul>;
}

export async function loader(){
  const menu = await getMenu()
  return menu
}

export default Menu;
