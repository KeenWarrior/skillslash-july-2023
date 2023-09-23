import useLocal from "./storage/useLocal";

export default function Bingo() {
  const { counter, setCounter } = useLocal();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}
