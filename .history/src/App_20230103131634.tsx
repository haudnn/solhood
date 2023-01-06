import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from './config/RouterConfig';
function App() {
  return (
    <div className="App font-montserrat">
      <BrowserRouter>
        <RouterConfig></RouterConfig>
      </BrowserRouter>
    </div>
  );
}

export default App;
