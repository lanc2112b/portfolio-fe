import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainNav from "./components/navs/MainNav";
import Header from "./components/structure/Header";
import PortfolioSection from './components/portfolio/PortfolioSection';
import Footer from './components/structure/Footer';
import MainSection from './components/structure/MainSection';

function App() {

  const [sideBar, setSideBar] = useState(true);

  return (
    <>
      <div className="wrapper w-full min-h-screen p-0 m-0 flex flex-row">
        <MainNav sideBar={sideBar} />

        <div className="center-wrapper w-full bg-gradient-to-tr from-stone-50 via-stone-100 to-zinc-300">
          <Header setSideBar={setSideBar} sideBar={sideBar} />

            <MainSection component={<PortfolioSection />} />

          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
