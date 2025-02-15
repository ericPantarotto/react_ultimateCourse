import { getMenu } from '../../services/apiRestaurant';

export async function loader() {
  return await getMenu();
}
