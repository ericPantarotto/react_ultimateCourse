import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Cart from './features/cart/Cart';
import Menu from './features/menu/Menu';
import { loader as menuLoader } from './features/menu/menuLoader';
import CreateOrder from './features/order/CreateOrder';
import Order from './features/order/Order';
import { action as createOrderAction } from './features/order/orderAction';
import { action as updateOrderAction } from './features/order/updateOrderAction';
import { loader as orderLoader } from './features/order/orderLoader';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import Home from './ui/Home';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
