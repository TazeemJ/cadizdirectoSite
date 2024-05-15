import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Import your components
import Layout from "./Screen/Layout";
import Home from "./Screen/Home/Home";
import Chiclana from "./Screen/Chiclana/Chiclana";
import SanFernando from "./Screen/SanFernando/SanFernando";
import Carnaval from "./Screen/Carnaval/Carnaval";
import CadizCF from "./Screen/CadizCF/CadizCF";

// Create the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="noticias-chiclana" element={<Chiclana />} />
      <Route path="noticias-san-fernando" element={<SanFernando />} />
      <Route path="carnaval" element={<Carnaval />} />
      <Route path="noticias-cadiz-club-futbol" element={<CadizCF />} />
    </Route>
  )
);

// App component
function App() {
  return <RouterProvider router={router} />;
}

export default App;
