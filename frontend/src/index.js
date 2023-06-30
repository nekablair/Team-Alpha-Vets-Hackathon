import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../src/scss/custom.scss';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ProvidersScreen from './screens/ProvidersScreen';
import ContactScreen from './screens/ContactScreen';
import ResourcesScreen from './screens/ResourcesScreen';
import FormsScreen from './screens/FormsScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/about' element={<AboutScreen />} />
      <Route path='/providers' element={<ProvidersScreen />} />
      <Route path='/contact' element={<ContactScreen />} />
      <Route path='/resources' element={<ResourcesScreen />} />
      <Route path='/forms' element={<FormsScreen />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
