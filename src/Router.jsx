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
import ProductInfo from './Seller/Products/ProductInfo/ProductInfo';
import ProductLists from './Seller/Products/ProductLists/ProductLists';
import SellerDashboard from './Seller/SellerDashboard/SellerDashboard';
import ShopManagement from './Seller/ShopManagement/ShopManagement';
import ProductListings from './Seller/ProductListings/ProductListings';
import InventoryManagement from './Seller/InventoryManagement/InventoryManagement';
import OrderList from './Seller/Orders/OrderList/OrderList';
import PaymentSettings from './Seller/PaymentSettings/PaymentSettings';
import ShippingSettings from './Seller/ShippingSettings/ShippingSettings';
import PromotionsAndDiscounts from './Seller/PromotionsAndDiscounts/PromotionsAndDiscounts';
import CommunicationCenter from './Seller/CommunicationCenter/CommunicationCenter';
import AnalyticsAndReports from './Seller/AnalyticsAndReports/AnalyticsAndReports';
import AccountSettings from './Seller/AccountSettings/AccountSettings';
import TermsAndPolicies from './Seller/TermsAndPolicies/TermsAndPolicies';
import SupportAndHelpCenter from './Seller/SupportAndHelpCenter/SupportAndHelpCenter';
import NotificationCenter from './Seller/NotificationCenter/NotificationCenter';
import FeedbackAndRatings from './Seller/FeedbackAndRatings/FeedbackAndRatings';
import OrderDetails from './Seller/Orders/OrderDetails/OrderDetails';

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
          },
          {
            path: "/seller/dashboard",
            element: <SellerDashboard />
          },
          {
            path: "/seller/shop-management",
            element: <ShopManagement />
          },
          {
            path: "/seller/product-listings",
            element: <ProductListings />
          },
          {
            path: "/seller/inventory-management",
            element: <InventoryManagement />
          },
          {
            path: "/seller/order-management",
            element: <OrderList />
          },
          {
            path: "/seller/order-details/:id",
            element: <OrderDetails />
          },
          {
            path: "/seller/payment-settings",
            element: <PaymentSettings />
          },
          {
            path: "/seller/shipping-settings",
            element: <ShippingSettings />
          },
          {
            path: "/seller/promotions-and-discounts",
            element: <PromotionsAndDiscounts />
          },
          {
            path: "/seller/communication-center",
            element: <CommunicationCenter />
          },
          {
            path: "/seller/analytics-and-reports",
            element: <AnalyticsAndReports />
          },
          {
            path: "/seller/account-settings",
            element: <AccountSettings />
          },
          {
            path: "/seller/terms-and-policies",
            element: <TermsAndPolicies />
          },
          {
            path: "/seller/support-and-help-center",
            element: <SupportAndHelpCenter />
          },
          {
            path: "/seller/notification-center",
            element: <NotificationCenter />
          },
          {
            path: "/seller/feedback-and-ratings",
            element: <FeedbackAndRatings />
          },
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