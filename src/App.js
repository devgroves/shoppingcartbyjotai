import "./App.css";
import { Provider } from "jotai";
import Home from "./Home.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/style.scss";
function App() {
  return (
    <Provider>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
