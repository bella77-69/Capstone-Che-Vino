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
import ReviewPage from "./pages/Reviews";
import Reviews from "./components/Reviews/Reviews";
import LeaveReview from "./components/Reviews/LeaveReview";
import WineGenerator from "./pages/Wine/WineGenerator";

function App() {


  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/wine-generator' element={<WineGenerator />} />
      <Route path='/wines/red' element={<RedWinePage />} />
      <Route path='/wines/white' element={<WhiteWinePage />} />
      <Route path='/wines/sparkling' element={<SparklingWinePage />} />
      <Route path='/wines/port' element={<PortWinePage />} />
      <Route path='/wines/rose' element={<RoseWinePage />} />
      <Route path='/wines/dessert' element={<DessertWinePage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/reviews' element={<ReviewPage />} />
      <Route path='/reviews/:id' element={<Reviews />} />
      <Route path="/leave_review/:id" element={<LeaveReview />} />
      </Routes>
    <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
