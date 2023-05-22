
import * as React from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import RouterConfig from './config/RouterConfig';
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import "./App.css";
function App() {
  const location = useLocation();
  const noHeaderFooterRoutes = ["/login", "/register"];
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
