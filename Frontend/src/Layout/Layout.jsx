import React, { Suspense } from "react";
import { useLocation } from 'react-router-dom';

import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../Components";


function Layout() {
  const location = useLocation();
  const showSlider = location.pathname === '/';

  return (
    <>
      <ScrollToTop />
      <ShowHide>
        <Navbar/>
      </ShowHide>
      {showSlider && <AutoSlider />}
      <Suspense>
        <Outlet />
      </Suspense>
      <ShowHide>
        <Footer/>
      </ShowHide>
    </>
  );
}

export default Layout;
