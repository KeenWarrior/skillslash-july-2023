import logo from "./logo.svg";
import "./App.css";
import db from "./db/db";
import { useLiveQuery } from "dexie-react-hooks";

function App() {
  const todos = useLiveQuery(() => db.todos.toArray(), []);

  const completed = useLiveQuery(
    () => db.todos.where("id").equals(1).toArray(),
    []
  );

  const addTodo = async (detail, completed) => {
    await db.todos.add(
      {
        detail,
        completed,
      },
      [detail, completed]
    );
  };

  return (
    <div className="App">
      <div>
        <input type="text" id="detail" />
        <input type="checkbox" id="completed" />
        <button
          onClick={() => {
            const detail = document.getElementById("detail").value;
            const completed = document.getElementById("completed").checked;
            addTodo(detail, completed);
          }}
        >
          Add
        </button>
      </div>
      <div>
        <ul>
          {todos &&
            todos.map((todo) => (
              <li key={todo.id}>
                {todo.detail} - {todo.completed ? "Done" : "Not Done"}
              </li>
            ))}
        </ul>
      </div>

      <div>
        <h3>Completed</h3>
        <ul>
          {completed &&
            completed.map((todo) => (
              <li key={todo.id}>
                {todo.detail} - {todo.completed ? "Done" : "Not Done"}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
