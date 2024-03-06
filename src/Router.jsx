import React from 'react';
// import {
//     RouterProvider,
//     createBrowserRouter,
//   } from "react-router-dom";
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ShoeDetail from './Pages/ShoeDetail/ShoeDetail';
import ShopPage from './Pages/ShopPage/ShopPage';
import Main from './Layout/Main/Main';
import AuthPage from './Pages/AuthPage/AuthPage';
import SellerLayout from './Layout/SellerLayout/SellerLayout';
import SellerInfo from './Seller/SellerInfo/SellerInfo';
import ShopInfo from './Seller/ShopInfo/ShopInfo';
import ProductInfo from './Seller/ProductInfo/ProductInfo';
import ProductLists from './Seller/ProductLists/ProductLists';

const Router = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Main></Main>,
        children: [
          {
            path: "/",
            element: <App></App>,
  
          },
          {
            path: "/auth",
            element: <AuthPage></AuthPage>
  
          },
          {
            path: "/shoes/:id",
            element: <ShoeDetail></ShoeDetail>,
          },
          {
            path: "/shops/:id",
            element: <ShopPage></ShopPage>
          },
        ],
      },
      {
        path: "/seller",
        element: <SellerLayout></SellerLayout>,
        children: [
          {
            path: "profile",
            element: <SellerInfo></SellerInfo>
          },
          {
            path: "shop",
            element: <ShopInfo></ShopInfo>
          },
          {
            path: "add-product",
            element: <ProductInfo></ProductInfo>
          },
          {
            path: "products",
            element: <ProductLists></ProductLists>
          }
        ]
      }
      ,
        
        {
          path: "*",
          element: <h1>Not Found</h1>,
        }
      ]);

    return (
        <RouterProvider router={router} />
    );
};

export default Router;