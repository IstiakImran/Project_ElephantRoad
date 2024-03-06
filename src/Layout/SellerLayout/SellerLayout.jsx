import React from 'react';
import SellerNav from '../../Shared/SellerNav/SellerNav';
import { Outlet } from 'react-router-dom';

const SellerLayout = () => {
    return (
        <div>
            <SellerNav></SellerNav>
            <Outlet></Outlet>
            
        </div>
    );
};

export default SellerLayout;