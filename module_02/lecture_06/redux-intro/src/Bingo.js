import { useSelector } from "react-redux";

export default function Bingo() {
    const counter = useSelector((state) => state.counter);
    return (
        <div className="App">
        <h1>Bingo</h1>
        <h1>Counter: {counter}</h1>
        </div>
    );
}