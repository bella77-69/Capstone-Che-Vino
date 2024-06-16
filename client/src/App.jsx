import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import RedWinePage from "./pages/Wine/RedWinePage";
import WhiteWinePage from "./pages/Wine/WhiteWinePage";
import SparklingWinePage from "./pages/Wine/SparklingWinePage";
import PortWinePage from "./pages/Wine/PortWinePage";
import RoseWinePage from "./pages/Wine/RoseWinePage";
import DessertWinePage from "./pages/Wine/DessertWinePage";
import ContactPage from "./pages/Contact";

function App() {


  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/wines/reds' element={<RedWinePage />} />
      <Route path='/wines/whites' element={<WhiteWinePage />} />
      <Route path='/wines/sparkling' element={<SparklingWinePage />} />
      <Route path='/wines/port' element={<PortWinePage />} />
      <Route path='/wines/rose' element={<RoseWinePage />} />
      <Route path='/wines/dessert' element={<DessertWinePage />} />
      <Route path='/contact' element={<ContactPage />} />
      </Routes>
    <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
