import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/homePage/HomePage";
import Blog from "../../pages/Blog";
import Layout from "../Layout";
import ProductDetails from "../../productDetails/ProductDetails";
import Categories from "../../pages/homePage/Categories";
import FavoritePage from "../../store/FavoritePage";
import AboutSection from "../../pages/aboutPage/AboutSection";
const Routing = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/about-us",
                element: <AboutSection />,
            },
            {
                path: "/categories",
                element: <Categories />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/product/:slug",
                element: <ProductDetails />,
            },
            {
                path: "/favoritePage",
                element: <FavoritePage />,
            },
        ],
    },
]);

export default Routing;
