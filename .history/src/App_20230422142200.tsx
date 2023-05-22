
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from './config/RouterConfig';
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import "./App.css";
function App() {

  return (
    <div className="overflow-hidden App font-montserrat">
      <BrowserRouter>
        <Header />
        <RouterConfig/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
