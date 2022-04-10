import "./App.css";
import { Provider } from "jotai";
import JotaiExample from "./JotaiExample.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/style.scss";
function App() {
  return (
    <Provider>
      <div className="App">
        <JotaiExample />
      </div>
    </Provider>
  );
}

export default App;
