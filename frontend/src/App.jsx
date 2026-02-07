import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:5000/api/todos";

export default function App() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);

  // FETCH TODOS FROM BACKEND
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error(err));
  }, []);

  // ADD TODO
  const addTodo = async () => {
    if (!title || !date || !time) {
      alert("Please fill all fields");
      return;
    }

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, date, time })
    });

    const newTodo = await res.json();
    setTodos(prev => [newTodo, ...prev]);

    setTitle("");
    setDate("");
    setTime("");
  };

  // DELETE TODO
  const deleteTodo = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });

    setTodos(todos.filter(todo => todo._id !== id));
  };

  // TOGGLE COMPLETE
  const toggleComplete = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT"
    });

    const updatedTodo = await res.json();

    setTodos(
      todos.map(todo =>
        todo._id === id ? updatedTodo : todo
      )
    );
  };

  return (
    <div className="app">

      {/* INPUT CARD */}
      <div className="input-card">
        <h3>Add New Task</h3>

        <input
          type="text"
          placeholder="Work title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />

        <div className="row">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <button onClick={addTodo}>＋ Add Task</button>
      </div>

      {/* TODO LIST */}
      <div className="todo-list">
        {todos.length === 0 && (
          <p className="empty">No tasks added yet</p>
        )}

        {todos.map(todo => (
          <div
            className={`todo-card ${todo.completed ? "done" : ""}`}
            key={todo._id}
          >
            <h4>{todo.title}</h4>

            <p>📅 {new Date(todo.date).toLocaleDateString()}</p>

            <p>
              ⏰ {new Date(`1970-01-01T${todo.time}`)
                .toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit"
                })}
            </p>

            <div className="actions">
              <button onClick={() => toggleComplete(todo._id)}>
                {todo.completed ? "↩ Undo" : "✔ Done"}
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteTodo(todo._id)}
              >
                ❌ Delete
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
