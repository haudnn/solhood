import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from './config/RouterConfig';
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
function App() {
  return (
    <div className=" App font-montserrat">
      <BrowserRouter>
        <Header />
        <RouterConfig/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
