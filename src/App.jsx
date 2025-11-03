import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Header and Footer will now appear on EVERY page */}
      <Header />

      {/* Outlet renders the current route's component (Home or AboutPage) */}
      <Outlet /> 

      <Footer />
    </>
  );
}

export default App;