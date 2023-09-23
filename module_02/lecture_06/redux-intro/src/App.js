import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Bingo from "./Bingo";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT5" });
        }}
      >
        +5
      </button>
      <br />
      <input type="number" id="custom" />
      <button
        onClick={() => {
          dispatch({
            type: "INCREMENT_CUSTOM",
            payload: parseInt(document.getElementById("custom").value),
          });
        }}
      >
        Custom Inc
      </button>
      <Bingo />
    </div>
  );
}

export default App;
