import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {


  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      </Routes>
    <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
