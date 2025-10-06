import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen container mx-auto'>
      <Navbar></Navbar>
      <div className='flex-1 '>
         <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
