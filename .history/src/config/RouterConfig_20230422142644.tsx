import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import {router} from '../constants';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
const RouterConfig = () => {
  const location = useLocation();
  const noHeaderFooterRoutes = ["/login", "/register"];

  return (
    <>
      {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}
      <Routes>
        {router.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Routes>
      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}



   
 
export default RouterConfig