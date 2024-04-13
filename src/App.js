import "./App.css";
import Add from "./Component/Add";
import Todoitems from "./Component/Todoitem.jsx";
import { useState } from "react";
import { TodoItem } from "./Store/Todo-Item-Store.jsx";

function App() {
  const [todo, addTodo] = useState([]);

  const handler = (itemName) => {
    const newtodo = [...todo, { Name: itemName }];
    addTodo(newtodo);
  };

  const handlerDeleteitem = (todoitem) => {
    const newtodo = todo.filter((item) => item.Name !== todoitem);
    addTodo(newtodo);
  };
  return (
    <TodoItem.Provider
      value={{
        todo: todo,
        handlers: handler,
        handlerDeleteitem: handlerDeleteitem,
      }}
    >
      <div className="App">
        <Add />
        <Todoitems /> {/* Render the Todoitem component to consume the context */}
      </div>
    </TodoItem.Provider>
  );
}

export default App;
