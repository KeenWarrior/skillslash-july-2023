import logo from "./logo.svg";
import "./App.css";
import { LocalStorageProvider } from "./storage/LocalStorageProvider";
import Bingo from "./Bingo";

function App() {
  return (
    <div className="App">
      <LocalStorageProvider>
        <Bingo />
      </LocalStorageProvider>
    </div>
  );
}

export default App;
