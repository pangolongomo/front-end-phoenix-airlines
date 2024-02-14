import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "./sections/Header";
import Footer from "./sections/footer";
import Spinner from "./components/Spinner";

function Layout() {
  return (
    <>
      <Header/>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

export default Layout;
