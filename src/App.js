import "./App.css";
import React from "react";
import Header from "./component/header/Header";
import Main from "./component/main/main";
import Footer from "./component/footer/footer";
// import Example from './slideshow/slide';
import News from "./component/news/News";
import Contact from "./component/contact/Contact";
import Open from "./component/open/Open";
import LandingPages from "./component/Pages/LandingPages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/layout/layout";
import Sign from "./component/sign/sign";

function App() {
  return (
    <>
   
   <div>

      <Header />
    {/* <Sign/> */}
      
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Sign" element={<Sign />} />
          </Route>
        </Routes>
      </Router>
      <Main/>
      <LandingPages />
      <Footer />
    </div>
    </>
  );
}

export default App;
