import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./Components/Screen/Home/Home";
import Chiclana from "./Components/Screen/Chiclana/Chiclana";
import SanFernando from "./Components/Screen/SanFernando/SanFernando";
import Carnaval from "./Components/Screen/Carnaval/Carnaval";
import CadizCF from "./Components/Screen/CadizCF/CadizCF";
import Layout from "./Components/Screen/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/noticias-chiclana" element={<Chiclana />} />
      <Route path="/noticias-san-fernando" element={<SanFernando />} />
      <Route path="/carnaval" element={<Carnaval />} />
      <Route path="/noticias-cadiz-club-futbol" element={<CadizCF />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
