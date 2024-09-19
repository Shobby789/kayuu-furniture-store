import Layout from "../components/Globals/Layout";

import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const Rooms = lazy(() => import("../pages/Rooms"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Contactus = lazy(() => import("../pages/ContactUs"));
const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(() => import("../pages/Checkout"));
const NotFound = lazy(() => import("../pages/NotFound"));
const ProductDetails = lazy(() => import("../pages/ProductDetailsPage"));
const OrderSuccess = lazy(()=> import("../pages/Success"))
const OrderFailed = lazy(()=> import("../pages/OrderFailed"))

export const routes = [
  {
    title: "Home Page",
    url: "/",
    page: <Home />,
  },
  {
    title: "Products Page",
    url: "/products",
    page: <Layout page={<Products />} />,
  },
  {
    title: "Product Details Page",
    url: "/products/:title",
    page: <Layout page={<ProductDetails />} />,
  },
  {
    title: "Rooms Page",
    url: "/rooms",
    page: <Layout page={<Rooms />} />,
  },
  {
    title: "AboutUs Page",
    url: "/about-us",
    page: <Layout page={<AboutUs />} />,
  },
  {
    title: "Contactus Page",
    url: "/contact-us",
    page: <Layout page={<Contactus />} />,
  },
  {
    title: "Cart Page",
    url: "/cart",
    page: <Layout page={<Cart />} />,
  },
  {
    title: "Checkout Page",
    url: "/checkout",
    page: <Layout page={<Checkout />} />,
  },
  {
    title: "Order Success Page",
    url: "/order-success",
    page: <Layout page={<OrderSuccess />} />,
  },
  {
    title: "Order Failed Page",
    url: "/order-failed",
    page: <Layout page={<OrderFailed />} />,
  },
  {
    title: "Not Found Page",
    url: "/:abc",
    page: <Layout page={<NotFound />} />,
  },
];
