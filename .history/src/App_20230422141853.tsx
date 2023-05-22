import "./App.css";
import { BrowserRouter, useLocation } from "react-router-dom";
import RouterConfig from './config/RouterConfig';
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);
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
