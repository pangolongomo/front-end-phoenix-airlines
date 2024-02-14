import "./normalize.css";
import { Routes, Route } from "react-router-dom";

import React, { lazy } from "react";

import Layout from "./site/Layout";
import ScrollToTop from "./site/components/ScrollToTop";

const Accueil = lazy(() => import("./site/pages/Accueil"));
const Apropos = lazy(() => import("./site/pages/Apropos"));
const Horaire = lazy(() => import("./site/pages/Horaire"));
const Destinations = lazy(() => import("./site/pages/Destinations"));
const Reservations = lazy(() => import("./site/pages/Reservations"));
const Contact = lazy(() => import("./site/pages/Contact"));
const Erreur = lazy(() => import("./site/pages/Erreur"));

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="horaire" element={<Horaire />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="apropos" element={<Apropos />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Erreur />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

//hero pictures slider
// rounder check in
// kin, lushi, goma, kisangani, mbuji-mayi
// connect social links//
//name destionation in the pictures
//horaire de vols put static
//
// Reservations fill the screen with pictures
// add contact page
// 1232px
