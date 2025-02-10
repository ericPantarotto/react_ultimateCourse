import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import './App.css';
import City from './components/City';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import Form from './components/Form';
import SpinnerFullPage from './components/SpinnerFullPage';
// import { CitiesProvider } from './contexts/CitiesProvider';
import { lazy, Suspense } from 'react';
import { CitiesProvider } from './contexts/CitiesProvider-reducer';
import { AuthProvider } from './contexts/FakeAuthProvider';

// import AppLayout from './pages/AppLayout';
// import Homepage from './pages/Homepage';
// import Login from './pages/Login';
// import PageNotFound from './pages/PageNotFound';
// import Pricing from './pages/Pricing';
// import Product from './pages/Product';
// import ProtectedRoute from './pages/ProtectedRoute';

const Homepage = lazy(() => import('./pages/Homepage'));
const Product = lazy(() => import('./pages/Product'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Login = lazy(() => import('./pages/Login'));
const AppLayout = lazy(() => import('./pages/AppLayout'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const ProtectedRoute = lazy(() => import('./pages/ProtectedRoute'));

function Layout() {
  let location = useLocation();

  return (
    <Suspense fallback={<SpinnerFullPage />} key={location.key}>
      <Outlet />
    </Suspense>
  );
}

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path='/' element={<Layout />}>
                {/* <Route path='/' element={<Homepage />} /> */}
                <Route index element={<Homepage />} />
                <Route path='product' element={<Product />} />
                <Route path='pricing' element={<Pricing />} />
                <Route path='login' element={<Login />} />
                <Route
                  path='app'
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate to='cities' replace />} />
                  <Route path='cities' element={<CityList />} />
                  <Route path='cities/:id' element={<City />} />
                  <Route path='countries' element={<CountryList />} />
                  <Route path='form' element={<Form />} />
                </Route>
                <Route path='*' element={<PageNotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
