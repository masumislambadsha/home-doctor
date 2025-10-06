import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";

import WishList from "../Pages/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {

        index:true,
        Component: Home,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/wishlist",
        Component: WishList
      },
    ],
  },
]);
export default router;
