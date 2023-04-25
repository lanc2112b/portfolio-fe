import { useState } from 'react'
import {Routes, Route } from 'react-router-dom';
import './App.css'
import MainNav from "./components/navs/MainNav";
import Header from "./components/structure/Header";
import PortfolioList from './components/portfolio/PortfolioList';
import Footer from './components/structure/Footer';
import MainSection from './components/structure/MainSection';
import ContactForm from './components/contact/ContactForm';
import LandingPage from './components/landing/LandingPage';
import PortfolioItem from './components/portfolio/PortfolioItem';


function App() {

  const [sideBar, setSideBar] = useState(true);

  return (
    <>
      <div className="wrapper w-full min-h-screen p-0 m-0 flex flex-row">
        <MainNav sideBar={sideBar} />

        <div className="center-wrapper w-full bg-gradient-to-tr from-stone-50 via-stone-100 to-zinc-300 flex flex-col min-h-screen">
          <Header setSideBar={setSideBar} sideBar={sideBar} />
            <Routes>
            
            <Route path="/" element={<MainSection component={<LandingPage />} />} />
            <Route path="/contact" element={<MainSection component={<ContactForm />} />} />
            <Route path="/portfolio" element={<MainSection component={<PortfolioList />} />} />
            <Route path="/portfolio/:id" element={<MainSection component={<PortfolioItem />} />} />
            
            </Routes>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
