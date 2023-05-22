
import * as React from "react";
import { BrowserRouter} from "react-router-dom";
import RouterConfig from './config/RouterConfig';
import "./App.css";
function App() {

  
  return (
    <div className="overflow-hidden App font-montserrat">
      <BrowserRouter>
        <RouterConfig/>
      </BrowserRouter>
    </div>
  );
}

export default App;
