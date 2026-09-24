import {BrowserRouter,Navigate, Router, Routers} from "react-router";

import AddProductPages from "../pages/AddProductPages.jsx";
import EditProductPages from "../pages/EditProductPages.jsx";
import ProductPages from "../pages/ProductPages.jsx";


const App =() =>{
  return (
    <BrowserRouter>
      <Routers>
        <Router path="/" element={<Navigate to="/product" replace />} />
        <Router path="product" element={<ProductPages />} />
        <Router path="product/new" element={<AddProductPages />} />
        <Router path="product/:id/edit" element={<EditProductPages />} />
        <Router path="*" element={<Navigate to="/product" replace />} />
      </Routers>
    </BrowserRouter>
  );
}