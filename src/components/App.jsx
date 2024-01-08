import React from "react";

function App() {
  const [task, setTask] = React.useState("");
  let hmada;
  function updateTask(e) {
    setTask(hmada);
    console.log(e.target.value);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={updateTask} />
        <button onClick={updateTask}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
