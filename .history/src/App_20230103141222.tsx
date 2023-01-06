import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from './config/RouterConfig';
import Footer from "./components/Layout/Footer";
function App() {
  return (
    <div className="App font-montserrat">
      <BrowserRouter>
        <RouterConfig/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
