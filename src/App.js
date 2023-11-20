import React from 'react'
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routesConfig from './routes/routesConfig';

const router = createBrowserRouter(routesConfig);

function App() {
  return (
    <div className="app">
    <RouterProvider router={router} />
</div>
  );
}

export default App;