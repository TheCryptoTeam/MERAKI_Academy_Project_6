import 'bootstrap/dist/css/bootstrap.min.css'

import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/Home";
import Navigation from "./components/Navigation";


import Hotels from "./components/Hotels";

import Cities from "./components/Cities";

import "./App.css";
import Login from './components/Login';
// import WishList from "./components/WishList";



//===============================================================

const App = () => {
  return (
    <div className="App">
  <Navigation />

      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
<Route path="/login" element={<Login />} />

        <Route path="/hotels" element={<Hotels />} />
        {/* <Route path="/wishList" element={<WishList />} /> */}


      </Routes>

    </div>
  );
};

export default App;
