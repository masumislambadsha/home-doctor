import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className='bg-base-300'>
      <Navbar></Navbar>
      <div className='container mx-auto justify-items-center'>
         <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
