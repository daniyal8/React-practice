import React, {useState} from 'react';
import Header from './Components/Header/header';
import Footer from './Components/footer/footer'

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";


function App() {
    const [pageName,setPageName] = useState("Home")

    const changePageName = (pageName) => setPageName(pageName);
    return (
      <>
        <Header changePageName={changePageName} currentPage={pageName} />
        {pageName === "Home" && <Home />}
        {pageName === "About" && <About />}
        {pageName === "News" && <News />}
        {pageName === "Contact" && <Contact />}
        
        </>
  );
}

export default App;
