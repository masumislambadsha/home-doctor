import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";

import WishList from "../Pages/WishList";
import ProductsDetails from "../Pages/ProductsDetails";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: <h2>Loading...</h2>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {

        index:true,
        Component: Home,
        loader: () => fetch('./furnitureData.json')
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/wishlist",
        Component: WishList
      },
      {
        path:'/products/:id',
        Component: ProductsDetails
      },
      {
        path:'/about',
        Component: About
      },
      {
        path:'/contact',
        Component: Contact
      }
    ],
  },
]);
export default router;
